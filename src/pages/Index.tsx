import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import SimpleIntelligent from "@/sections/SimpleIntelligent";
import MidCTA from "@/sections/MidCTA";
import Footer from "@/sections/Footer";

const Index = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AutoFinance',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description:
      'Assistente financeiro no WhatsApp: registre gastos por texto, áudio ou foto e receba análises inteligentes.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <SimpleIntelligent />
      <MidCTA />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
};

export default Index;
