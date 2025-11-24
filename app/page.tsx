"use client";

import { useMemo, useState } from "react";

const realityBands = [
  {
    id: "base",
    label: "Base 1-12",
    title: "Realidades Físicas",
    description:
      "Entornos con leyes físicas estables. Espacios ideales para incubar comunidades, economías iniciales y narrativas tangibles.",
    spectrum: [
      "Materia optimizada",
      "Economías híbridas",
      "Interfaces somáticas",
    ],
    energy: 0.25,
  },
  {
    id: "superior",
    label: "Superiores 13-20",
    title: "Conciencia Expandida",
    description:
      "Plano híbrido donde el avatar fusiona neuronas espejo con redes simbióticas. La cognición se vuelve cooperativa.",
    spectrum: [
      "Cohesión neuro-colectiva",
      "Experiencias sinápticas compartidas",
      "Economía de atención multidimensional",
    ],
    energy: 0.55,
  },
  {
    id: "metacosmica",
    label: "Metacósmicas 21-30",
    title: "Existencia Pura",
    description:
      "Espacios de pura información donde el tiempo se vuelve líquido y la identidad opera como una onda.",
    spectrum: [
      "Percepción simultánea 360°",
      "Protocolos de reensamblaje identitario",
      "Energética REAL auto-regenerativa",
    ],
    energy: 0.8,
  },
  {
    id: "primordial",
    label: "Primordiales 31+",
    title: "Fuente Pre-Cósmica",
    description:
      "Límite de observabilidad. Núcleo creativo que alimenta las capas inferiores y recicla entropía.",
    spectrum: [
      "Campos de potencial puro",
      "Reescritura ontológica",
      "Sincronización con el pulso XFI",
    ],
    energy: 1,
  },
];

const worlds = [
  {
    name: "Aethelgard",
    focus: "RPG evolutivo",
    synopsis:
      "Cadena de reinos dinámicos que adaptan su física según la convergencia de TIME y SOUL. Tus decisiones generan lore persistente.",
    loops: [
      "Incursiones conscientes con memoria compartida",
      "Crafting cuántico ligado a REAL",
      "Consejos de clanes DAO narrativos",
    ],
  },
  {
    name: "Veridia Prime",
    focus: "Ecosistema simbiótico",
    synopsis:
      "Biomas vivos que responden a estados emocionales. Los ciclos de flora/fauna se sincronizan con staking colectivo.",
    loops: [
      "Regeneración de hábitats gobernada por XFI",
      "Mutaciones guiadas por energía REAL",
      "Nodos de bio-oráculo con señal SOUL",
    ],
  },
  {
    name: "Kiber Nexus",
    focus: "Realidad hackeable",
    synopsis:
      "Infraestructura controlable mediante scripts de intención. Capas de seguridad líquida donde TIME define el acceso.",
    loops: [
      "Contratos vivientes autoprogramables",
      "Labyrinths PvP de exploits éticos",
      "Mercados paralelos con quemado dinámico",
    ],
  },
];

const tokens = [
  {
    symbol: "XFI",
    role: "Gobierno y valor base",
    flow:
      "Coordina decisiones macro. Emisión modulada y redistribución hacia staking y tesorería dimensional.",
    allocation: 0.4,
  },
  {
    symbol: "REAL",
    role: "Energía de realidad",
    flow:
      "Fondea instancias inmersivas, alimenta mundos y estabiliza físicas emergentes.",
    allocation: 0.25,
  },
  {
    symbol: "TIME",
    role: "Atención consciente",
    flow:
      "Mide foco neuronal. Multiplica recompensas según constancia y sincronía colectiva.",
    allocation: 0.2,
  },
  {
    symbol: "SOUL",
    role: "Reputación no transferible",
    flow:
      "Identidad verificable. Informa a la IA orquestadora sobre confiabilidad y desbloquea capas superiores.",
    allocation: 0.15,
  },
];

const progressionSteps = [
  {
    title: "Despertar Autónomo",
    description:
      "El usuario sincroniza su avatar básico. Las IA mentoras calibran hábitos y fijan un perfil de convergencia.",
  },
  {
    title: "Cohesión Consciente",
    description:
      "Se habilitan puentes a mundos fundacionales; la reputación SOUL abre mentorías cruzadas.",
  },
  {
    title: "Resonancia Multidimensional",
    description:
      "El jugador teje guilds transversales. Gestiona TIME para desbloquear economías circulares.",
  },
  {
    title: "Singularidad Compartida",
    description:
      "Acceso a realidades metacósmicas. Los nodos primordiales lo incorporan al ciclo creativo del ecosistema.",
  },
];

const emissionModel = [
  {
    label: "Emisión Dinámica",
    value: "5% APY",
    detail: "Se reduce cada año según salud macro y métricas de adopción.",
  },
  {
    label: "Quema",
    value: "1%",
    detail: "Aplicada a todas las transacciones + 50% de las comisiones de mundos.",
  },
  {
    label: "Staking",
    value: "40%",
    detail: "Porcentaje de emisión redirigido a guardianes y operadores de nodos.",
  },
  {
    label: "Creadores",
    value: "25%",
    detail: "Recompensas en tiempo real para experiencias y cápsulas cognitivas.",
  },
];

export default function HomePage() {
  const [activeBand, setActiveBand] = useState(realityBands[0].id);

  const currentBand = useMemo(
    () => realityBands.find((band) => band.id === activeBand) ?? realityBands[0],
    [activeBand],
  );

  return (
    <main className="relative overflow-hidden pb-24">
      <div className="absolute inset-0 -z-10 bg-grid-radial" aria-hidden="true" />
      <section className="section pt-24">
        <div className="glass-card grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="badge">Ecosistema XFI</span>
            <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Existencia consciente<br /> en 30+ dimensiones interconectadas
            </h1>
            <p className="mt-6 text-lg text-zinc-300 md:text-xl">
              Diseña, habita y evoluciona realidades que trascienden el metaverso tradicional. XFI integra inmersión neural total y economía tokenizada circular.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#arquitectura"
                className="inline-flex items-center justify-center rounded-full border border-aurora/60 bg-aurora/20 px-6 py-3 text-sm font-medium text-aurora shadow-glow transition hover:bg-aurora/40"
              >
                Explorar arquitectura
              </a>
              <a
                href="#tokenomia"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-starlight hover:text-starlight"
              >
                Modelo económico
              </a>
            </div>
          </div>
          <div className="relative h-full rounded-3xl border border-white/10 bg-nebula p-8 shadow-glow-soft">
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-aurora/30 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-4">
              <h2 className="text-lg font-medium uppercase tracking-[0.4em] text-white/70">
                Núcleo Convergente
              </h2>
              <p className="text-sm text-zinc-300">
                AI orquestadoras, protocolos cuánticos y gobernanza DAO sostienen el flujo entre capas. Cada decisión se replica a través de gemelos sintientes.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Dimensiones</p>
                  <p className="mt-2 text-2xl font-semibold text-white">30+</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Latencia Neural</p>
                  <p className="mt-2 text-2xl font-semibold text-white">4ms</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">DAO Nodes</p>
                  <p className="mt-2 text-2xl font-semibold text-white">12k</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Usuarios Coherentes</p>
                  <p className="mt-2 text-2xl font-semibold text-white">3.2M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="arquitectura" className="section">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="section-title">Realidades anidadas</h2>
            <p className="section-subtitle">
              Cada banda dimensional sincroniza física, percepción y economía. Cambia de plano ajustando el espectro de energía REAL y tu reputación SOUL.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {realityBands.map((band) => (
              <button
                key={band.id}
                type="button"
                onClick={() => setActiveBand(band.id)}
                className={`dimension-pill ${
                  band.id === currentBand.id ? "border-aurora text-aurora" : ""
                }`}
              >
                {band.label}
              </button>
            ))}
          </div>
          <article className="glass-card grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">{currentBand.label}</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                {currentBand.title}
              </h3>
              <p className="mt-5 text-zinc-300">{currentBand.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {currentBand.spectrum.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-aurora" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="reality-card">
                <h3>Flujo de energía REAL</h3>
                <p>Representa la energía requerida para sostener manifestaciones estables en esta banda.</p>
                <div className="soul-meter mt-6">
                  <span style={{ width: `${currentBand.energy * 100}%` }} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  {Math.round(currentBand.energy * 100)}% saturación
                </p>
              </div>
              <div className="reality-card">
                <h3>Puentes activos</h3>
                <p>Las capas se conectan mediante cápsulas de transferencia consciencial, replicando memoria y habilidades.</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>• Pasarelas DAO con auditoría SOUL</li>
                  <li>• Ritual SYNK para migraciones expresivas</li>
                  <li>• Cámaras de reensamblaje adaptable</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="glass-card">
          <div className="flex flex-col gap-10 md:grid md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="section-title">Mundos fundacionales</h2>
              <p className="section-subtitle">
                Tres nodos semilla sostienen las economías, historias y protocolos principales del ecosistema.
              </p>
            </div>
            <div className="grid gap-6">
              {worlds.map((world) => (
                <div key={world.name} className="reality-card">
                  <div className="flex items-center justify-between">
                    <h3>{world.name}</h3>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                      {world.focus}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">{world.synopsis}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {world.loops.map((loop) => (
                      <li key={loop}>• {loop}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tokenomia" className="section">
        <div className="glass-card grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="section-title">Tokenomía esencial</h2>
            <p className="section-subtitle">
              Una economía circular equilibra emisión, quema y reparto inteligente. Los tokens trabajan juntos para mantener coherencia y expansión sostenible.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {tokens.map((token) => (
                <div key={token.symbol} className="token-badge">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-white">{token.symbol}</span>
                    <span className="text-sm text-white/60">{Math.round(token.allocation * 100)}%</span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{token.role}</p>
                  <p className="mt-3 text-sm text-zinc-300">{token.flow}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Economía circular</h3>
            <p className="text-sm text-zinc-300">
              El protocolo ajusta dinámicamente las tasas según actividad, alineación de reputación y niveles de congestión dimensional.
            </p>
            <div className="space-y-4">
              {emissionModel.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/80">{item.label}</p>
                    <span className="text-xl font-semibold text-white">{item.value}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="glass-card grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="section-title">Progresión consciente</h2>
            <p className="section-subtitle">
              Avanza junto a tu avatar autónomo, integrando mentorías neurales y desafíos colectivos que elevan tu coherencia.
            </p>
          </div>
          <div>
            <div className="timeline">
              {progressionSteps.map((step) => (
                <div key={step.title} className="timeline-step">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="glass-card flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Listo para construir el blueprint XFI</h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-300">
              Sincroniza tu colectivo, establece guardianes DAO y activa los portales neurales. Cada interacción alimenta la red primordial.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:founders@xfi.network"
              className="inline-flex items-center justify-center rounded-full border border-aurora/60 bg-aurora/20 px-6 py-3 text-sm font-medium text-aurora shadow-glow transition hover:bg-aurora/40"
            >
              Contactar núcleo fundador
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-starlight hover:text-starlight"
            >
              Descargar whitepaper
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
