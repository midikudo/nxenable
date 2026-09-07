import {
  Bot, Code2, Globe2, Link2, MonitorSmartphone, PanelsTopLeft, ShieldCheck,
  Workflow, CalendarDays, UsersRound, BarChart3, Boxes, Search, PencilRuler,
  Rocket, Headphones, Building2, ShoppingCart, Stethoscope, Factory,
  GraduationCap, BriefcaseBusiness
} from "lucide-react";

export const services = [
  { title: "Custom Software Development", titleTh: "พัฒนาซอฟต์แวร์เฉพาะธุรกิจ", text: "Tailored software built around your workflows, users, and business goals.", textTh: "ซอฟต์แวร์ที่ออกแบบจาก Workflow ผู้ใช้งาน และเป้าหมายของธุรกิจคุณโดยตรง", icon: Code2 },
  { title: "Web Applications", titleTh: "เว็บแอปพลิเคชัน", text: "Secure, scalable, responsive web applications engineered for performance.", textTh: "เว็บแอปที่ปลอดภัย รองรับการเติบโต Responsive และออกแบบเพื่อประสิทธิภาพ", icon: Globe2 },
  { title: "Mobile Applications", titleTh: "โมบายแอปพลิเคชัน", text: "Modern iOS and Android applications with robust backend integration.", textTh: "แอป iOS และ Android สมัยใหม่ พร้อมเชื่อมต่อ Backend อย่างเป็นระบบ", icon: MonitorSmartphone },
  { title: "Business Platforms", titleTh: "แพลตฟอร์มธุรกิจ", text: "Integrated platforms that streamline operations and support growth.", textTh: "แพลตฟอร์มที่เชื่อมการทำงาน ลดความซ้ำซ้อน และรองรับการเติบโต", icon: PanelsTopLeft },
  { title: "API & Integrations", titleTh: "API และการเชื่อมต่อระบบ", text: "Connect payments, ERP, CRM, LINE, cloud and third-party services.", textTh: "เชื่อม Payment, ERP, CRM, LINE, Cloud และบริการ Third-party", icon: Link2 },
  { title: "AI & Automation", titleTh: "AI และระบบอัตโนมัติ", text: "Practical AI and workflow automation designed around measurable outcomes.", textTh: "นำ AI และ Workflow Automation มาใช้กับงานจริงโดยมุ่งผลลัพธ์ที่วัดได้", icon: Bot }
];

export const solutions = [
  { title: "POS", titleTh: "ระบบ POS", text: "Modern point-of-sale systems for retail and service businesses.", textTh: "ระบบขายหน้าร้านสมัยใหม่สำหรับธุรกิจ Retail และ Service", icon: ShoppingCart },
  { title: "CRM", titleTh: "ระบบ CRM", text: "Customer management systems for stronger, more measurable relationships.", textTh: "ระบบบริหารลูกค้าที่ช่วยสร้างความสัมพันธ์และติดตามผลได้ชัดเจน", icon: UsersRound },
  { title: "Booking", titleTh: "ระบบจอง", text: "Smart appointment and reservation systems with automated workflows.", textTh: "ระบบนัดหมายและจองคิว พร้อม Workflow อัตโนมัติ", icon: CalendarDays },
  { title: "Membership", titleTh: "สมาชิกและ Loyalty", text: "Membership and loyalty platforms designed for recurring relationships.", textTh: "ระบบสมาชิกและ Loyalty เพื่อสร้างความสัมพันธ์ระยะยาวกับลูกค้า", icon: Boxes },
  { title: "Dashboard & Workflow", titleTh: "Dashboard และ Workflow", text: "Turn operational data into action with dashboards and approval flows.", textTh: "เปลี่ยนข้อมูลการดำเนินงานให้เป็นการตัดสินใจผ่าน Dashboard และ Approval Flow", icon: BarChart3 },
  { title: "Internal Tools", titleTh: "ระบบภายในองค์กร", text: "Custom tools that reduce manual work and improve team productivity.", textTh: "เครื่องมือเฉพาะองค์กรที่ช่วยลดงาน Manual และเพิ่มประสิทธิภาพทีม", icon: Workflow }
];

export const process = [
  { n: "01", title: "Discovery", titleTh: "ค้นหาความต้องการ", text: "Understand goals, users, workflows, constraints and success criteria.", textTh: "ทำความเข้าใจเป้าหมาย ผู้ใช้ Workflow ข้อจำกัด และเกณฑ์ความสำเร็จ", icon: Search },
  { n: "02", title: "Design", titleTh: "ออกแบบ", text: "Turn requirements into user journeys, architecture and prototypes.", textTh: "เปลี่ยน Requirement เป็น User Journey, Architecture และ Prototype", icon: PencilRuler },
  { n: "03", title: "Development", titleTh: "พัฒนา", text: "Build in milestones with maintainable, scalable engineering practices.", textTh: "พัฒนาเป็น Milestone ด้วยมาตรฐานที่ดูแลต่อและขยายระบบได้", icon: Code2 },
  { n: "04", title: "UAT", titleTh: "ทดสอบ UAT", text: "Test, refine and verify that every agreed workflow works as expected.", textTh: "ทดสอบ ปรับแก้ และยืนยันว่า Workflow ที่ตกลงทำงานได้ตามคาด", icon: ShieldCheck },
  { n: "05", title: "Go-live", titleTh: "ขึ้นใช้งานจริง", text: "Deploy safely with production checks, monitoring and handover.", textTh: "Deploy อย่างปลอดภัย พร้อม Production Check, Monitoring และ Handover", icon: Rocket },
  { n: "06", title: "Support", titleTh: "ดูแลต่อเนื่อง", text: "Ongoing maintenance, enhancement and operational support.", textTh: "Maintenance, Enhancement และ Support หลังเปิดใช้งาน", icon: Headphones }
];

export const industries = [
  { title: "Retail & Commerce", titleTh: "ค้าปลีกและการค้า", text: "POS, inventory, membership, omnichannel and operations systems.", textTh: "POS, Inventory, Membership, Omnichannel และระบบปฏิบัติการ", icon: ShoppingCart },
  { title: "Healthcare", titleTh: "Healthcare", text: "Booking, patient workflows, internal dashboards and integrations.", textTh: "Booking, Patient Workflow, Dashboard ภายใน และ System Integration", icon: Stethoscope },
  { title: "Corporate & Enterprise", titleTh: "องค์กรและ Enterprise", text: "Workflow, approval, CRM, internal tools and system integration.", textTh: "Workflow, Approval, CRM, Internal Tools และ System Integration", icon: Building2 },
  { title: "Manufacturing", titleTh: "โรงงานและการผลิต", text: "Operational dashboards, inventory, traceability and automation.", textTh: "Operational Dashboard, Inventory, Traceability และ Automation", icon: Factory },
  { title: "Education", titleTh: "การศึกษา", text: "Enrollment, booking, member portals, payments and reporting.", textTh: "Enrollment, Booking, Member Portal, Payment และ Reporting", icon: GraduationCap },
  { title: "Professional Services", titleTh: "ธุรกิจบริการ", text: "Booking, CRM, billing, document workflows and client portals.", textTh: "Booking, CRM, Billing, Document Workflow และ Client Portal", icon: BriefcaseBusiness }
];

export const work = [
  {
    slug: "retail-pos-platform",
    title: "Retail POS Platform",
    titleTh: "แพลตฟอร์ม Retail POS",
    category: "POS · Cloud · Retail",
    summary: "A multi-location POS platform covering catalog, inventory, purchasing, sales, refunds, shifts and receipts.",
    summaryTh: "แพลตฟอร์ม POS หลายสาขา ครอบคลุมสินค้า สต๊อก จัดซื้อ การขาย คืนสินค้า กะพนักงาน และใบเสร็จ",
    result: "A scalable retail operations foundation built for multiple branches and permission-aware workflows.",
    resultTh: "โครงสร้างระบบ Retail ที่รองรับหลายสาขาและ Workflow ตามสิทธิผู้ใช้งาน"
  },
  {
    slug: "booking-membership",
    title: "Booking & Membership",
    titleTh: "ระบบ Booking & Membership",
    category: "Booking · Membership",
    summary: "Integrated booking, payments and membership workflows for service businesses.",
    summaryTh: "รวมระบบจอง ชำระเงิน และสมาชิกไว้ใน Workflow เดียวสำหรับธุรกิจบริการ",
    result: "A single operational flow that reduces manual coordination and improves customer experience.",
    resultTh: "ลดการประสานงานแบบ Manual และทำให้ประสบการณ์ลูกค้าต่อเนื่องขึ้น"
  },
  {
    slug: "operations-dashboard",
    title: "Operations Dashboard",
    titleTh: "Operations Dashboard",
    category: "Dashboard · Internal Tools",
    summary: "A custom dashboard and workflow system for internal operations, approvals and reporting.",
    summaryTh: "Dashboard และ Workflow เฉพาะองค์กรสำหรับการดำเนินงาน การอนุมัติ และ Reporting",
    result: "Faster visibility into business activity with a clearer audit trail and fewer manual handoffs.",
    resultTh: "เห็นสถานะธุรกิจเร็วขึ้น มี Audit Trail ชัด และลดการส่งต่องานแบบ Manual"
  }
];
