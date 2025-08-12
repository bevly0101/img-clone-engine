import TestimonialsTicker from "@/sections/TestimonialsTicker";

// Card genérico seguindo o layout enviado (cores, títulos e mockups)
const Card = ({
  title,
  desc,
  tone,
  img,
  alt,
}: {
  title: string;
  desc: string;
  tone: "pink" | "lilac" | "purple" | "dark";
  img?: string;
  alt?: string;
}) => {
  const toneClass = {
    pink: "bg-surface-pink",
    lilac: "bg-surface-indigo",
    purple: "bg-surface-purple",
    dark: "bg-card",
  }[tone];

  const sizeClass = {
    pink: "min-h-[320px] md:min-h-[440px]",
    lilac: "min-h-[320px] md:min-h-[440px]",
    purple: "min-h-[360px] md:min-h-[520px]",
    dark: "min-h-[280px] md:min-h-[340px]",
  }[tone];

  return (
    <article className={`${toneClass} ${sizeClass} relative overflow-hidden rounded-2xl p-6 md:p-8 text-foreground/95`}>
      <div className="max-w-prose">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base opacity-90 leading-relaxed">{desc}</p>
      </div>

      {img && alt && (
        <>
          {/* Versão desktop: mockup absoluto no canto inferior direito */}
          <img
            src={img}
            alt={alt}
            loading="lazy"
            width={900}
            height={1900}
            className="hidden md:block absolute bottom-0 right-0 w-1/2 max-h-[80%] object-contain pointer-events-none select-none drop-shadow-2xl"
          />
          {/* Versão mobile: mockup abaixo do texto */}
          <img
            src={img}
            alt={alt}
            loading="lazy"
            width={900}
            height={1900}
            className="block md:hidden mt-5 w-full object-contain pointer-events-none select-none drop-shadow-2xl"
          />
        </>
      )}
    </article>
  );
};

const Features = () => {
  return (
    <section className="container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {/* Linha superior */}
        <Card
          tone="pink"
          title="Como funciona?"
          desc="O AutoFinance é seu assistente financeiro digital. Através do WhatsApp ou do painel, você registra despesas, entradas, recebe alertas, vê relatórios e extratos de recibos. Simples, rápido, automatizado."
          img="/lovable-uploads/a6b664e7-e257-4c27-ac5f-5e28024be117.png"
          alt="Mockup do AutoFinance demonstrando registro de gastos por voz"
        />

        <Card
          tone="lilac"
          title="📸 Mande fotos e áudios para anotar seus gastos."
          desc="Não quer digitar? Sem problemas. Tire uma foto de um recibo ou fale por áudio: 'Comprei gasolina por R$ 50 reais'. O AutoFinance interpreta, extrai os dados e registra tudo."
          img="/lovable-uploads/e7d9f13f-80b7-40fc-a58e-e11be1a4d5c0.png"
          alt="Mockup interpretando recibo no WhatsApp"
        />

        <Card
          tone="purple"
          title="Tenha resumos diários pelo WhatsApp e Painel de controle"
          desc="Receba um resumo diário ou semanal com seu saldo, gastos e entradas. Tudo direto no WhatsApp!"
          img="/lovable-uploads/5a6e3df2-491e-4fc6-9d77-875d11518a38.png"
          alt="Mockup com resumo financeiro diário do AutoFinance"
        />

        {/* Linha inferior */}
        <Card
          tone="dark"
          title="🔒 Total privacidade."
          desc="Seus dados são só seus. Tudo é criptografado, seguro e armazenado com as melhores práticas de proteção."
        />

        <Card
          tone="dark"
          title="📊 Gráficos interativos"
          desc="Visualize seus gastos com clareza. Compare meses, entenda padrões e tome decisões melhores."
        />

        {/* Espaçador da terceira coluna para manter o grid alinhado no desktop */}
        <div className="hidden md:block" />
      </div>

      <TestimonialsTicker />
    </section>
  );
};

export default Features;
