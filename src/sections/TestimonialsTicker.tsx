import Marquee from "react-fast-marquee";

const testimonials: { text: string; rating: number }[] = [
  { text: "Facilitou meu controle de gastos no dia a dia.", rating: 5 },
  { text: "Anotar por áudio é perfeito quando estou na rua.", rating: 5 },
  { text: "Resumo semanal claro e direto ao ponto.", rating: 4 },
  { text: "OCR do recibo funciona muito bem!", rating: 5 },
  { text: "Finalmente entendo para onde vai meu dinheiro.", rating: 5 },
  { text: "Simples, rápido e prático pelo WhatsApp.", rating: 5 },
];

const StarRow = ({ rating }: { rating: number }) => (
  <span aria-label={`${rating} de 5 estrelas`} className="text-xs text-foreground/70">
    {"★★★★★".slice(0, rating)}
  </span>
);

const TestimonialsTicker = () => {
  return (
    <div className="mt-6 md:mt-8 rounded-xl bg-secondary/40 ring-1 ring-border overflow-hidden">
      <Marquee pauseOnHover gradient={false} speed={40} aria-label="Feedbacks de usuários rolando">
        <div className="flex gap-3 md:gap-4 py-3 md:py-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="marquee-item inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm ring-1 ring-border shadow-soft"
            >
              <StarRow rating={t.rating} />
              <span className="text-foreground/80">{t.text}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TestimonialsTicker;
