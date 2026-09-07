import PageHero from "@/components/PageHero";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" description="A simple website privacy notice for NXENABLE." />
      <section className="section"><div className="shell prose">
        <h2>Information we receive</h2><p>We may receive information you submit through email or contact channels, such as your name, company, contact details and project information.</p>
        <h2>How we use information</h2><p>We use submitted information to respond to enquiries, prepare proposals, communicate about projects and operate our business.</p>
        <h2>Third-party services</h2><p>Hosting, analytics, email and other infrastructure providers may process limited technical data under their own terms.</p>
        <h2>Contact</h2><p>For privacy enquiries, contact contact@nxenable.co.</p>
      </div></section>
    </main>
  );
}
