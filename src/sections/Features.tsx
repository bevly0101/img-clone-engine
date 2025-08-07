
const PlaceholderPhone = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-[9/19] mx-auto max-w-[220px] md:max-w-[260px] w-full rounded-[2rem] overflow-hidden">
    <img src={src} alt={alt} loading="lazy" width={900} height={1900} className="h-full w-full object-cover" />
  </div>
);

const Card = ({ title, desc, tone, img, alt }: { title: string; desc: string; tone: "pink" | "indigo" | "purple"; img: string; alt: string }) => {
  const toneClass = {
    pink: "bg-surface-pink",
    indigo: "bg-surface-indigo",
    purple: "bg-surface-purple",
  }[tone];

  return (
    <article className={`${toneClass} rounded-2xl p-6 md:p-8 text-foreground/95`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-6 max-w-prose">{desc}</p>
      <PlaceholderPhone src={img} alt={alt} />
    </article>
  );
};

const SmallFeature = ({ title, desc }: { title: string; desc: string }) => (
  <article className="rounded-2xl p-5 bg-card/60 ring-1 ring-border">
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </article>
);

const Features = () => {
  return (
    <section className="container pb-20">
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          tone="pink"
          title="Como funciona?"
          desc="O AutoFinance é seu assistente financeiro digital. Registre despesas e entradas pelo WhatsApp ou painel. Simples. Rápido. Automatizado. Você fala, ele organiza."
          img="/lovable-uploads/992d0a75-281f-482d-ad2c-f8e110cf8174.png"
          alt="WhatsApp com AutoFinance registrando gastos por voz"
        />
        <Card
          tone="indigo"
          title="Mande fotos e áudios para anotar seus gastos."
          desc="Não quer digitar? Sem problemas. Envie a foto de um recibo ou fale por áudio – nós interpretamos e registramos tudo."
          img="/lovable-uploads/3cfec948-bb3a-4256-bbef-c5840b55d842.png"
          alt="Comprovante fotografado sendo interpretado no WhatsApp"
        />
        <Card
          tone="purple"
          title="Tenha resumos diários pelo WhatsApp e Painel"
          desc="Receba um resumo diário ou semanal com seu saldo, gastos e entradas. Tudo direto no WhatsApp."
          img="/lovable-uploads/f5564d63-5264-4582-83d1-0b6351e6d9f1.png"
          alt="Resumo financeiro enviado no WhatsApp pelo AutoFinance"
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <SmallFeature title="Total privacidade." desc="Seus dados são só seus. Tudo criptografado e seguro – sem compartilhamento ou publicidade." />
        <SmallFeature title="Gráficos interativos" desc="Visualize seus gastos com clareza. Compare meses, entenda padrões e tome decisões melhores." />
      </div>
    </section>
  );
};

export default Features;
