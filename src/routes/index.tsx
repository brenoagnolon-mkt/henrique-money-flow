import { createFileRoute } from "@tanstack/react-router";
import fotoHenrique from "@/assets/foto-henrique.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aula Exclusiva — Henrique Mac Dowell | Servidores Públicos Federais" },
      { name: "description", content: "Aula gratuita: transforme parte do seu salário em patrimônio e renda passiva, sem comprometer seu orçamento." },
      { property: "og:title", content: "Aula Exclusiva para Servidores Públicos Federais" },
      { property: "og:description", content: "Descubra como transformar parte do seu salário em patrimônio. 07/07 às 20h." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-brand-bg font-sans text-brand-night antialiased">
      {/* ============ SEÇÃO 1: HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-12 lg:pb-32 lg:pt-16">
          {/* Coluna texto */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-orange md:text-sm">
              Atenção: Aula exclusiva para servidores públicos federais
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-blue md:text-5xl lg:text-6xl">
              Descubra como{" "}
              <span className="text-brand-orange">
                transformar parte do seu salário em patrimônio.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-brand-night/80 md:text-xl">
              Aprenda o caminho para ter renda extra sem trabalhar mais e sem
              pagar juros ao banco.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-night">
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                Data e Hora da aula gratuita: 07/07 às 20h
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#formulario"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-orange to-[#ff8a2b] px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-orange/40 md:text-lg"
              >
                Garantir meu Acesso
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Coluna imagem (oculta no mobile) */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-orange/15 via-transparent to-brand-blue/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-night/5 to-brand-blue/10">
                <img
                  src={fotoHenrique}
                  alt="Henrique Mac Dowell"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEÇÃO 2: PROMESSA ============ */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Conteúdo da aula
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
              O que você vai aprender nessa{" "}
              <span className="text-brand-orange">aula gratuita</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              "Como transformar parte da sua renda mensal em patrimônio e renda passiva sem comprometer seus custos fixos",
              "Como transformar da sua estabilidade no serviço público em renda independente do governo",
              "Por que deixar seu dinheiro no banco pode te deixar pobre no final da vida",
              "As estratégias que poucos servidores conhecem para crescer financeiramente sem trabalhar mais e sem pagar juros ao banco",
            ].map((item) => (
              <li
                key={item}
                className="group flex items-start gap-4 rounded-2xl border border-brand-night/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg hover:shadow-brand-night/5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-base leading-relaxed text-brand-night md:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <a
              href="#formulario"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-orange to-[#ff8a2b] px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-orange/40 md:text-lg"
            >
              Garantir meu Acesso
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ SEÇÃO 3: AUTORIDADE ============ */}
      <section className="bg-brand-night py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          {/* Imagem (topo no mobile, esquerda no desktop) */}
          <div className="order-1 md:order-none">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-orange/30 to-brand-blue/40 blur-2xl" />
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-white/10">
                <img
                  src={fotoHenrique}
                  alt="Henrique Mac Dowell"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 flex flex-col gap-6 md:order-none">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Mentor
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Quem será seu <span className="text-brand-orange">mentor</span>
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
              <p>
                Essa aula será conduzida por{" "}
                <span className="font-semibold text-white">
                  Henrique Mac Dowell
                </span>
                .
              </p>
              <p>
                Há <span className="font-semibold text-brand-orange">10 anos</span>{" "}
                é especialista em ajudar famílias a construir patrimônio,
                Consultor Financeiro Certificado{" "}
                <span className="font-semibold text-white">
                  CFP (Certified Financial Planner)
                </span>{" "}
                — a principal certificação internacional para profissionais que
                atuam com planejamento financeiro pessoal, consultoria
                patrimonial e gestão de fortunas.
              </p>
              <p>
                Hoje,{" "}
                <span className="font-semibold text-white">
                  Diretor de Investimentos no Matri Bank
                </span>
                , ajuda pessoas e empresas a construírem patrimônio adaptando
                estratégias ao contexto do cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl justify-center px-6">
          <a
            href="#formulario"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-orange to-[#ff8a2b] px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-orange/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-orange/40 md:text-lg"
          >
            Garantir meu Acesso
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* ============ SEÇÃO 4: FORMULÁRIO ============ */}
      <section id="formulario" className="bg-brand-bg py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Última etapa
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
              Garanta seu acesso{" "}
              <span className="text-brand-orange">gratuito</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-night/70 md:text-lg">
              Preencha o formulário abaixo e receba todas as instruções para
              participar da aula no dia <strong>07/07 às 20h</strong>.
            </p>
          </div>

          <div className="rounded-3xl border border-brand-night/10 bg-white p-4 shadow-xl shadow-brand-night/5 md:p-8">
            <iframe
              src="https://tally.so/embed/vGgvGd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height={500}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Formulário de Cadastro"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-brand-night py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Henrique Mac Dowell. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
