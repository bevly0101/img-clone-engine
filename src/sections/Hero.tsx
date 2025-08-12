import { Button } from "@/components/ui/button";
import { useInViewOnce } from "@/hooks/useInViewOnce";

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
  const { ref: titleRef, inView: titleIn } = useInViewOnce();
  const { ref: descRef, inView: descIn } = useInViewOnce();
  const { ref: ctaRef, inView: ctaIn } = useInViewOnce();
  const { ref: loginRef, inView: loginIn } = useInViewOnce();

  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow-radial" aria-hidden />
      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="story-link"><Logo /></a>
        <div className="flex items-center gap-5 md:gap-6 text-sm md:text-base text-muted-foreground">
          <a href="#planos" className="hover-scale">Planos</a>
          <a href="#cadastro" className="hover-scale">Cadastre-se</a>
          {/* Login com efeito + tamanhos responsivos */}
          <Button asChild variant="hero" size="sm" className={`rounded-full md:hidden ${loginIn ? "animate-fade-in" : "opacity-0"}`}>
            <a ref={loginRef as any} href="#login" className="hover-scale">Login</a>
          </Button>
          <Button asChild variant="hero" size="lg" className={`rounded-full hidden md:inline-flex ${loginIn ? "animate-fade-in" : "opacity-0"}`}>
            <a href="#login" className="hover-scale">Login</a>
          </Button>
        </div>
      </nav>

      <section className="container pt-8 pb-16 text-center">
        
        <h1
          ref={titleRef as any}
          className={`mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl ${titleIn ? "animate-fade-in" : "opacity-0"}`}
        >
          Organize suas finanças de forma
          <br />
          <span className="block mt-2">Simples, Inteligente e</span>
          <span className="block mt-2 bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">Feita para você</span>
        </h1>
        <p
          ref={descRef as any}
          className={`mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground ${descIn ? "animate-fade-in" : "opacity-0"}`}
        >
          Com a <strong>AutoFinance</strong>, você fala, e a mágica acontece: gastos anotados, organizados e analisados — tudo pelo <strong>WhatsApp</strong>.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button
            ref={ctaRef as any}
            variant="hero"
            size="lg"
            className={`rounded-full px-8 ${ctaIn ? "animate-fade-in" : "opacity-0"}`}
          >
            comece seu Teste  gratuito
          </Button>
        </div>
      </section>
    </header>
  );
};

export default Hero;
