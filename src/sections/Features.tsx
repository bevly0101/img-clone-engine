const PlaceholderPhone = () => (
  <div className="aspect-[9/19] w-full rounded-[2rem] bg-background/40 ring-1 ring-border shadow-soft grid place-items-center text-sm text-muted-foreground">
    Imagem do mockup pendente
  </div>
);

const Card = ({ title, desc, tone }: { title: string; desc: string; tone: "pink" | "indigo" | "purple" }) => {
  const toneClass = {
    pink: "bg-surface-pink",
    indigo: "bg-surface-indigo",
    purple: "bg-surface-purple",
  }[tone];

  return (
    <article className={`${toneClass} rounded-2xl p-6 md:p-8 text-foreground/95`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-6 max-w-prose">{desc}</p>
      <PlaceholderPhone />
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
        />
        <Card
          tone="indigo"
          title="Mande fotos e áudios para anotar seus gastos."
          desc="Não quer digitar? Sem problemas. Envie a foto de um recibo ou fale por áudio – nós interpretamos e registramos tudo."
        />
        <Card
          tone="purple"
          title="Tenha resumos diários pelo WhatsApp e Painel"
          desc="Receba um resumo diário ou semanal com seu saldo, gastos e entradas. Tudo direto no WhatsApp."
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
