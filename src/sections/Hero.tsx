import { Button } from "@/components/ui/button";

const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand))" />
          <stop offset="100%" stopColor="hsl(var(--brand-2))" />
        </linearGradient>
      </defs>
      <path d="M12 2l9 20H3L12 2z" fill="url(#g)" />
    </svg>
    <span className="font-bold text-lg tracking-tight">AutoFinance</span>
  </div>
);

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow-radial" aria-hidden />
      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="story-link"><Logo /></a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#planos" className="hover-scale">Planos</a>
          <a href="#login" className="hover-scale">Login</a>
          <Button variant="hero" size="lg" className="rounded-full">cadastre-se</Button>
        </div>
      </nav>

      <section className="container pt-8 pb-16 text-center">
        <p className="mb-3 text-sm text-muted-foreground">Planos • Login • Cadastro</p>
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
