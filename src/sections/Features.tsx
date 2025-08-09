
import TestimonialsTicker from "@/sections/TestimonialsTicker";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LayoutAuditOverlay from "@/components/dev/LayoutAuditOverlay";

const PlaceholderPhone = ({ src, alt, variant = "straight" }: { src: string; alt: string; variant?: "tilt-left" | "straight" | "tilt-right" }) => {
  const tiltClass = {
    "tilt-left": "-rotate-12 origin-bottom-left",
    "straight": "",
    "tilt-right": "rotate-12 origin-bottom-right",
  }[variant];
  return (
    <figure className="pointer-events-none select-none relative -mb-10 mt-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={900}
        height={1900}
        className={`mx-auto max-h-72 md:max-h-80 w-auto object-contain drop-shadow-2xl ${tiltClass}`}
      />
    </figure>
  );
};

const Card = ({ title, desc, tone, img, alt, variant = "straight" }: { title: string; desc: string; tone: "pink" | "indigo" | "purple"; img: string; alt: string; variant?: "tilt-left" | "straight" | "tilt-right" }) => {
  const toneClass = {
    pink: "bg-surface-pink",
    indigo: "bg-surface-indigo",
    purple: "bg-surface-purple",
  }[tone];

  return (
    <article className={`${toneClass} relative rounded-3xl p-6 md:p-8 text-foreground/95 h-full flex flex-col justify-between`}>
      <div className="max-w-prose">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{desc}</p>
      </div>
      <PlaceholderPhone src={img} alt={alt} variant={variant} />
    </article>
  );
};

const SmallFeature = ({ title, desc }: { title: string; desc: string }) => (
  <article className="rounded-3xl p-5 bg-card/60 ring-1 ring-border h-full">
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </article>
);

const Features = () => {
  return (
    <section className="container pb-20">
      <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
        {/* Row 1: três cards altos com proporção fixa baseada na referência */}
        <AspectRatio ratio={9 / 16}>
          <div className="h-full" data-audit="card-1">
            <Card
              tone="pink"
              title="Como funciona?"
              desc="O AutoFinance é seu assistente financeiro digital. Registre despesas e entradas pelo WhatsApp ou painel. Simples. Rápido. Automatizado. Você fala, ele organiza."
              img="/lovable-uploads/a6b664e7-e257-4c27-ac5f-5e28024be117.png"
              alt="WhatsApp com AutoFinance registrando gastos por voz (mockup inclinado à esquerda)"
              variant="tilt-left"
            />
          </div>
        </AspectRatio>
        <AspectRatio ratio={9 / 16}>
          <div className="h-full" data-audit="card-2">
            <Card
              tone="indigo"
              title="Mande fotos e áudios para anotar seus gastos."
              desc="Não quer digitar? Sem problemas. Envie a foto de um recibo ou fale por áudio – nós interpretamos e registramos tudo."
              img="/lovable-uploads/e7d9f13f-80b7-40fc-a58e-e11be1a4d5c0.png"
              alt="Comprovante fotografado sendo interpretado no WhatsApp (mockup frontal)"
              variant="straight"
            />
          </div>
        </AspectRatio>
        <AspectRatio ratio={9 / 16}>
          <div className="h-full" data-audit="card-3">
            <Card
              tone="purple"
              title="Tenha resumos diários pelo WhatsApp e Painel"
              desc="Receba um resumo diário ou semanal com seu saldo, gastos e entradas. Tudo direto no WhatsApp."
              img="/lovable-uploads/5a6e3df2-491e-4fc6-9d77-875d11518a38.png"
              alt="Resumo financeiro enviado no WhatsApp pelo AutoFinance (mockup inclinado à direita)"
              variant="tilt-right"
            />
          </div>
        </AspectRatio>

        {/* Row 2: duas barras baixas sob as duas primeiras colunas */}
        <AspectRatio ratio={7 / 2} className="hidden md:block">
          <div className="h-full" data-audit="bar-1">
            <SmallFeature title="Total privacidade." desc="Seus dados são só seus. Tudo criptografado e seguro – sem compartilhamento ou publicidade." />
          </div>
        </AspectRatio>
        <AspectRatio ratio={7 / 2} className="hidden md:block">
          <div className="h-full" data-audit="bar-2">
            <SmallFeature title="Gráficos interativos" desc="Visualize seus gastos com clareza. Compare meses, entenda padrões e tome decisões melhores." />
          </div>
        </AspectRatio>
        <div className="hidden md:block" />
      </div>

      <LayoutAuditOverlay maskUrl="/lovable-uploads/08ba5a89-7c21-437b-acf3-0b31440fbd20.png" />

      <TestimonialsTicker />
    </section>
  );
};

export default Features;
