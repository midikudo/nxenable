import PageHero from "@/components/PageHero";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="LEGAL" title="Website Terms" description="General terms for using the NXENABLE public website." />
      <section className="section"><div className="shell prose">
        <h2>Website content</h2><p>Content on this website is provided for general information and may be updated without notice.</p>
        <h2>Project engagements</h2><p>Software development services, pricing, scope, intellectual property, support and delivery obligations are governed by the applicable quotation, proposal and contract.</p>
        <h2>Intellectual property</h2><p>NXENABLE branding, website design and original website content may not be reproduced for commercial use without permission.</p>
        <h2>Contact</h2><p>Questions may be sent to contact@nxenable.co.</p>
      </div></section>
    </main>
  );
}
