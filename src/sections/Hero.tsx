import { Button } from "@/components/ui/button";

const Logo = () => (
  <img
    src="/lovable-uploads/851f6320-cf7d-44af-a64f-4837d69bd9bd.png"
    alt="AutoFinance logo"
    width={180}
    height={36}
    className="h-8 md:h-9 w-auto"
    loading="eager"
    decoding="async"
  />
);

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow-radial" aria-hidden />
      <nav className="container flex items-center justify-start py-6">
        <a href="#" className="story-link"><Logo /></a>
      </nav>

      <section className="container pt-8 pb-16 text-center">
        
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          Organize suas finanças de forma
          <br />
          <span className="block mt-2">Simples, Inteligente e</span>
          <span className="block mt-2 bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">Feita para você</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
          Com a <strong>AutoFinance</strong>, você fala, e a mágica acontece: gastos anotados, organizados e analisados — tudo pelo <strong>WhatsApp</strong>.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button variant="hero" size="lg" className="rounded-full px-8">comece seu Teste  gratuito</Button>
        </div>
      </section>
    </header>
  );
};

export default Hero;
