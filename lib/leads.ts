import { getSupabaseServerClient } from "@/lib/supabase-server";

export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL" | "WON" | "LOST" | "SPAM";

export type Lead = {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectType?: string;
  estimatedBudget?: string;
  expectedTimeline?: string;
  existingSystem?: string;
  message: string;
  status: LeadStatus;
  source: string;
  ipHash?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
};

export interface LeadRepository {
  create(lead: Lead): Promise<void>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: string): Promise<Lead | null>;
  updateLeadStatus(id: string, status: LeadStatus): Promise<Lead | null>;
}

export class LeadStorageUnavailableError extends Error {
  constructor() {
    super("Lead storage is unavailable");
    this.name = "LeadStorageUnavailableError";
  }
}

type LeadRow = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  project_type: string | null;
  estimated_budget: string | null;
  expected_timeline: string | null;
  existing_system: string | null;
  message: string;
  status: LeadStatus;
  source: string;
  ip_hash: string | null;
  user_agent: string | null;
  created_at: string;
  updated_at: string;
};

function toRow(lead: Lead): LeadRow {
  return {
    id: lead.id,
    name: lead.name,
    company: lead.company || null,
    email: lead.email,
    phone: lead.phone || null,
    project_type: lead.projectType || null,
    estimated_budget: lead.estimatedBudget || null,
    expected_timeline: lead.expectedTimeline || null,
    existing_system: lead.existingSystem || null,
    message: lead.message,
    status: lead.status,
    source: lead.source,
    ip_hash: lead.ipHash || null,
    user_agent: lead.userAgent || null,
    created_at: lead.createdAt,
    updated_at: lead.updatedAt
  };
}

function fromRow(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    company: row.company || undefined,
    email: row.email,
    phone: row.phone || undefined,
    projectType: row.project_type || undefined,
    estimatedBudget: row.estimated_budget || undefined,
    expectedTimeline: row.expected_timeline || undefined,
    existingSystem: row.existing_system || undefined,
    message: row.message,
    status: row.status,
    source: row.source,
    ipHash: row.ip_hash || undefined,
    userAgent: row.user_agent || undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export class SupabaseLeadRepository implements LeadRepository {
  constructor(private readonly client: NonNullable<ReturnType<typeof getSupabaseServerClient>>) {}

  async create(lead: Lead) {
    const { error } = await this.client.from("leads").insert(toRow(lead));
    if (error) throw error;
  }

  async getLeads() {
    const { data, error } = await this.client.from("leads").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return (data as LeadRow[]).map(fromRow);
  }

  async getLeadById(id: string) {
    const { data, error } = await this.client.from("leads").select("*").eq("id", id).maybeSingle();
    if (error) throw error;
    return data ? fromRow(data as LeadRow) : null;
  }

  async updateLeadStatus(id: string, status: LeadStatus) {
    const { data, error } = await this.client
      .from("leads")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    return data ? fromRow(data as LeadRow) : null;
  }
}

const memoryLeads: Lead[] = [];
const memoryLeadRepository: LeadRepository = {
  async create(lead) {
    memoryLeads.push(lead);
  },
  async getLeads() {
    return [...memoryLeads].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
  async getLeadById(id) {
    return memoryLeads.find((lead) => lead.id === id) || null;
  },
  async updateLeadStatus(id, status) {
    const lead = memoryLeads.find((item) => item.id === id);
    if (!lead) return null;
    lead.status = status;
    lead.updatedAt = new Date().toISOString();
    return lead;
  }
};

export function getLeadRepository(): LeadRepository {
  const client = getSupabaseServerClient();
  if (client) return new SupabaseLeadRepository(client);
  if (process.env.NODE_ENV !== "production") return memoryLeadRepository;
  throw new LeadStorageUnavailableError();
}

export async function getLeads() {
  return getLeadRepository().getLeads();
}

export async function getLeadById(id: string) {
  return getLeadRepository().getLeadById(id);
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  return getLeadRepository().updateLeadStatus(id, status);
}
