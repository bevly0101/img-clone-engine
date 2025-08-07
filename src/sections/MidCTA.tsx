import { Button } from "@/components/ui/button";

const MidCTA = () => (
  <section className="container text-center py-24">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">E isso é só o começo...</h2>
    <p className="text-muted-foreground max-w-xl mx-auto">
      Experimentar é melhor do que adiar de novo. Por que não tentar agora?
    </p>
    <div className="mt-8">
      <Button variant="hero" size="lg" className="rounded-full px-8">comece seu Teste  gratuito</Button>
    </div>
  </section>
);

export default MidCTA;
