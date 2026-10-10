import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Hand, Shirt, Ruler, Scissors, Timer, PawPrint, Check, X, Plus, Truck, RotateCcw, ShieldCheck, Package, Gift, Heart, Users, Baby,
} from "lucide-react";
import { CONFIG } from "@/config";
import hero from "@/assets/hero.jpg";
import przed from "@/assets/przed.jpg";
import sowka from "@/assets/sowka.jpg";
import mis from "@/assets/mis.jpg";
import swinka from "@/assets/swinka.jpg";
import piesek from "@/assets/piesek.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "tuptusie – szelki do nauki chodzenia | Ty idziesz prosto" },
      { name: "description", content: "Szelki do nauki chodzenia z długim uchwytem. Maluch stawia pierwsze kroki, a ty idziesz wyprostowana. 4 wzory, 7–24 mies." },
      { property: "og:title", content: "tuptusie – Ile razy dziś się schyliłaś?" },
      { property: "og:description", content: "Szelki do nauki chodzenia z długim, miękkim uchwytem. Twoje plecy zasłużyły na przerwę." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const VARIANTS = [
  { id: "sowka", name: "Sówka", img: sowka, note: "nasz ulubieniec" },
  { id: "mis", name: "Miś", img: mis },
  { id: "swinka", name: "Świnka", img: swinka },
  { id: "piesek", name: "Piesek", img: piesek },
];

function Logo({ light }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xl font-bold tracking-tight ${light ? "text-navy-foreground" : "text-navy"}`}>
      <PawPrint className="h-6 w-6 text-primary" /> tuptusie
    </span>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Cta({ children = "Wybieram swój wzór", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a href="#kup" className={`inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-cta transition hover:scale-[1.02] active:scale-95 ${className}`}>
      {children}
    </a>
  );
}

function Section({ id, children, tone = "plain", className = "" }: { id?: string; children: ReactNode; tone?: "plain" | "cream" | "navy"; className?: string }) {
  const t = tone === "cream" ? "bg-cream" : tone === "navy" ? "bg-navy text-navy-foreground" : "bg-background";
  return (
    <section id={id} className={`${t} px-5 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mb-8 text-center text-3xl font-bold leading-tight md:text-4xl">{children}</h2>;
}

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-[24px] bg-card p-6 text-card-foreground shadow-soft ${className}`}>{children}</div>
);

const FAQ = [
  ["Od jakiego wieku można używać?", "Od 7 do 24 miesięcy – od momentu, gdy maluch stawia pierwsze kroki z pomocą. Maksymalna waga dziecka to 15 kg."],
  ["Czy będą pasować na moje dziecko?", "Szelki mają regulowane paski na ramiona (24–42 cm) i część w kroku (17–34 cm). Obwód klatki to 54–70 cm – zmierz malucha i porównaj z tabelą wymiarów."],
  ["Ile trwa dostawa?", "Czas dostawy to 14–30 dni roboczych. Numer do śledzenia przesyłki otrzymasz mailem."],
  ["Dlaczego dostawa trwa tak długo?", "Produkt wysyłamy z magazynu zagranicznego – dzięki temu możemy zaoferować niższą cenę."],
  ["Jak śledzić paczkę?", "Po wysyłce dostaniesz maila z numerem przesyłki i linkiem do śledzenia. Jeśli go nie widzisz, sprawdź folder spam lub napisz do nas."],
  ["Czy mogę zwrócić produkt?", "Tak, masz 14 dni na zwrot bez podania przyczyny."],
  ["Czy mogę podnosić dziecko za uchwyt?", "NIE. Uchwyt służy wyłącznie do asekuracji przy chodzeniu. Nie podnoś ani nie przenoś dziecka za uchwyt."],
  ["Czy szelki zastępują opiekę?", "NIE. Szelki pomagają w asekuracji, ale dziecko zawsze musi być pod nadzorem dorosłego."],
  ["Jak dbać o szelki?", "Pierz ręcznie w letniej wodzie i susz na płasko."],
  ["Jakie formy płatności?", "Płatności obsługuje bezpieczny system sklepu – dostępne metody zobaczysz przy składaniu zamówienia."],
];

function Index() {
  const [selected, setSelected] = useState("sowka");
  const [open, setOpen] = useState<number | null>(0);
  const current = VARIANTS.find((v) => v.id === selected)!;

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="pb-24 md:pb-0">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-navy px-4 py-2 text-center text-xs font-medium text-navy-foreground md:text-sm">
        🚚 Darmowa wysyłka od {CONFIG.FREE_SHIPPING_FROM} zł · ↩️ 14 dni na zwrot
      </div>

      <header className="flex items-center justify-between px-5 py-4 mx-auto max-w-5xl">
        <Logo />
        <a href="#kup" className="hidden text-sm font-semibold text-primary md:block">Kup teraz</a>
      </header>

      {/* HERO */}
      <section className="px-5 pb-16 pt-4">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Ile razy dziś się <span className="text-primary">schyliłaś?</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">Maluch uczy się chodzić, a ty chodzisz za nim zgięta wpół. Twoje plecy zasłużyły na przerwę.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {["7–24 mies.", "do 15 kg", "regulowane", "4 wzory"].map((c) => (
                <span key={c} className="rounded-full bg-cream px-4 py-1.5 text-sm font-medium">{c}</span>
              ))}
            </div>
            <Cta className="mt-8 w-full md:w-auto" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <figure className="relative">
              <img src={przed} alt="Mama schylona za maluchem" width={1024} height={1280} className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-soft" />
              <figcaption className="absolute left-3 top-3 rounded-full bg-card px-3 py-1 text-xs font-semibold">Przed</figcaption>
            </figure>
            <figure className="relative mt-8">
              <img src={hero} alt="Mama idzie wyprostowana, maluch w szelkach tuptusie" width={1024} height={1280} className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-soft" />
              <figcaption className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Po</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BRZMI ZNAJOMO */}
      <Section tone="cream">
        <Reveal>
          <H2>Brzmi znajomo?</H2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Schylasz się kilkadziesiąt razy dziennie", "Wieczorem plecy bolą bardziej niż po siłowni", "On chce chodzić bez końca, a ty nie dajesz rady", "Każdy spacer kończy się noszeniem na rękach"].map((t) => (
              <Card key={t} className="flex items-start gap-3"><span className="text-2xl">😮‍💨</span><p className="font-medium">{t}</p></Card>
            ))}
          </div>
          <p className="mt-10 text-center text-xl font-semibold">To nie ty jesteś słaba. <span className="text-primary">Nikt nie jest stworzony do chodzenia w pół.</span></p>
        </Reveal>
      </Section>

      {/* ROZWIĄZANIE */}
      <Section>
        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <img src={hero} alt="Spacer z szelkami tuptusie" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-soft" />
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Ty idziesz prosto.<br /><span className="text-primary">On stawia pierwsze kroki.</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">Szelki tuptusie mają długi, miękki uchwyt. Trzymasz go w dłoni na wysokości biodra i asekurujesz malucha bez schylania się. On ćwiczy kroki we własnym tempie, a ty wreszcie prostujesz plecy.</p>
            <Cta className="mt-8" />
          </div>
        </Reveal>
      </Section>

      {/* PRZED VS PO */}
      <Section tone="cream">
        <Reveal>
          <H2>Przed vs po</H2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/70">
              <h3 className="mb-4 text-lg font-bold text-muted-foreground">Bez szelek</h3>
              {["Ciągłe schylanie", "Ból pleców", "Łapanie w ostatniej chwili", "Krótkie spacery"].map((t) => (
                <p key={t} className="flex items-center gap-3 py-2 text-muted-foreground"><X className="h-5 w-5 shrink-0" />{t}</p>
              ))}
            </Card>
            <Card className="ring-2 ring-primary">
              <h3 className="mb-4 text-lg font-bold text-primary">Z szelkami tuptusie</h3>
              {["Idziesz wyprostowana", "Asekurujesz bez wysiłku", "Maluch ćwiczy we własnym tempie", "Dłuższe spacery"].map((t) => (
                <p key={t} className="flex items-center gap-3 py-2 font-medium"><Check className="h-5 w-5 shrink-0 text-primary" />{t}</p>
              ))}
            </Card>
          </div>
        </Reveal>
      </Section>

      {/* DLACZEGO */}
      <Section>
        <Reveal>
          <H2>Dlaczego tuptusie?</H2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              [Hand, "Długi uchwyt", "Trzymasz go bez schylania się"],
              [Shirt, "Miękka kamizelka", "Bawełna + oddychająca siateczka"],
              [Ruler, "Regulowane paski", "Na ramiona 24–42 cm"],
              [Scissors, "Odpinany dół", "Gdy maluch już pewniej chodzi"],
              [Timer, "Zapinanie w kilka sekund", "Proste plastikowe klamry"],
              [PawPrint, "4 wzory zwierzątek", "Sówka, Miś, Świnka, Piesek"],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Hand;
              return (
                <Card key={t as string} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent"><I className="h-6 w-6 text-primary" /></div>
                  <p className="font-semibold">{t as string}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Section>

      {/* JAK TO DZIAŁA */}
      <Section tone="cream">
        <Reveal>
          <H2>Jak to działa?</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {[["Zakładasz", "Kamizelka zapina się w kilka sekund."], ["Chwytasz uchwyt", "Na wygodnej wysokości, plecy proste."], ["Idziecie razem", "On stawia kroki, ty asekurujesz."]].map(([t, d], i) => (
              <Card key={t} className="flex items-center gap-4 md:flex-col md:text-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">{i + 1}</span>
                <div><p className="text-lg font-bold">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ROSNĄ */}
      <Section>
        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <img src={sowka} alt="Regulacja szelek tuptusie" loading="lazy" width={1024} height={1024} className="w-full rounded-[24px] bg-cream shadow-soft" />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Rosną z maluchem</h2>
            <ul className="mt-6 space-y-4">
              {[["Odpinany dół", "Odepnij, gdy maluch chodzi pewniej."], ["Regulowane ramiona", "Paski 24–42 cm – dopasujesz na miesiące."], ["Zapięcie w pasie", "Obwód klatki 54–70 cm."]].map(([t, d]) => (
                <li key={t} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div></li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* DLA KOGO */}
      <Section tone="cream">
        <Reveal>
          <H2>Dla kogo?</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {[[Heart, "Mamy z bólem pleców", "Bo schylanie się co chwilę daje w kość."], [Ruler, "Rodzice wysokiego wzrostu", "Im wyżej, tym głębiej trzeba się schylać."], [Users, "Babcie i dziadkowie", "Spokojne spacery z wnukiem bez nadwyrężania pleców."]].map(([Icon, t, d]) => {
              const I = Icon as typeof Heart;
              return <Card key={t as string}><I className="mb-3 h-7 w-7 text-primary" /><p className="font-bold">{t as string}</p><p className="mt-1 text-sm text-muted-foreground">{d as string}</p></Card>;
            })}
          </div>
        </Reveal>
      </Section>

      {/* KUP */}
      <Section id="kup" className="scroll-mt-10">
        <Reveal>
          <H2>Wybierz ulubieńca</H2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {VARIANTS.map((v) => {
              const active = v.id === selected;
              return (
                <button key={v.id} onClick={() => setSelected(v.id)} aria-pressed={active}
                  className={`relative rounded-[24px] bg-card p-3 text-left shadow-soft transition ${active ? "ring-[3px] ring-primary" : "ring-1 ring-border"}`}>
                  {active && <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-4 w-4" /></span>}
                  <img src={v.img} alt={`Szelki ${v.name}`} loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-[18px] bg-cream object-cover" />
                  <p className="mt-2 font-semibold">{v.name}</p>
                  {v.note && <p className="text-xs text-primary">{v.note}</p>}
                </button>
              );
            })}
          </div>
          <Card className="mx-auto mt-8 max-w-md text-center">
            <p className="text-sm text-muted-foreground">Wybrany wzór: <b className="text-foreground">{current.name}</b></p>
            <p className="my-2 text-4xl font-extrabold">{CONFIG.PRICE} zł</p>
            <a href={CONFIG.SHOPIFY_LINKS[selected]} className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary py-4 font-semibold text-primary-foreground shadow-cta transition active:scale-95">Kup teraz</a>
            <p className="mt-3 text-xs text-muted-foreground">↩️ 14 dni na zwrot · 🔒 Bezpieczne płatności</p>
          </Card>
        </Reveal>
      </Section>

      {/* WYMIARY */}
      <Section tone="cream">
        <Reveal>
          <H2>Wymiary</H2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-xs rounded-[24px] bg-card p-6 shadow-soft">
              <img src={sowka} alt="Wymiary szelek" loading="lazy" width={1024} height={1024} className="w-full" />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold text-primary">57–82 cm</span>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary">obwód 54–70 cm</span>
            </div>
            <Card className="p-0 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[["Wysokość całkowita", "57–82 cm"], ["Paski na ramiona", "24–42 cm"], ["Przód", "14 cm"], ["Część w kroku", "17–34 cm"], ["Obwód klatki", "54–70 cm"], ["Wiek", "7–24 mies."], ["Maks. waga", "15 kg"], ["Materiał", "bawełna + siateczka"]].map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-cream/50" : ""}><td className="px-5 py-3 text-muted-foreground">{k}</td><td className="px-5 py-3 text-right font-semibold">{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Wymiary mierzone ręcznie, możliwa różnica 2–3 cm.</p>
        </Reveal>
      </Section>

      {/* PREZENT */}
      <Section>
        <Reveal>
          <H2>Idealny prezent</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {[[Gift, "Na baby shower"], [Baby, "Na roczek"], [Heart, "Dla świeżo upieczonej mamy"]].map(([Icon, t]) => {
              const I = Icon as typeof Gift;
              return <Card key={t as string} className="flex items-center gap-4"><I className="h-7 w-7 text-primary" /><p className="font-semibold">{t as string}</p></Card>;
            })}
          </div>
        </Reveal>
      </Section>

      {/* WYSYŁKA */}
      <Section tone="cream">
        <Reveal>
          <H2>Wysyłka i zwroty</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {[[Package, "Zamówienie", "Składasz zamówienie w kilka minut."], [Truck, "Wysyłka", "Numer do śledzenia otrzymasz mailem."], [Check, "Dostawa", "14–30 dni roboczych."]].map(([Icon, t, d], i) => {
              const I = Icon as typeof Package;
              return <Card key={t as string} className="flex items-center gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground"><I className="h-5 w-5" /></span><div><p className="text-xs text-muted-foreground">Krok {i + 1}</p><p className="font-bold">{t as string}</p><p className="text-sm text-muted-foreground">{d as string}</p></div></Card>;
            })}
          </div>
          <Card className="mt-6 space-y-3">
            <p className="flex gap-3"><Truck className="h-5 w-5 shrink-0 text-primary" /><span><b>Czas dostawy: 14–30 dni roboczych.</b> Numer do śledzenia przesyłki otrzymasz mailem.</span></p>
            <p className="flex gap-3"><RotateCcw className="h-5 w-5 shrink-0 text-primary" />14 dni na zwrot bez podania przyczyny</p>
            <p className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-primary" />Bezpieczne płatności</p>
          </Card>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <Reveal>
          <H2>Pytania i odpowiedzi</H2>
          <div className="mx-auto max-w-2xl space-y-3">
            {FAQ.map(([q, a], i) => (
              <div key={q} className="rounded-[24px] bg-card shadow-soft">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold" aria-expanded={open === i}>
                  {q}<Plus className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-45" : ""}`} />
                </button>
                {open === i && <p className="px-6 pb-5 text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <Section tone="navy">
        <Reveal className="text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">Wyprostuj się, mamo 🦉</h2>
          <p className="mx-auto mt-4 max-w-md opacity-80">Maluch stawia pierwsze kroki, a ty idziesz obok – prosto, spokojnie, bez bólu pleców.</p>
          <Cta className="mt-8" />
        </Reveal>
      </Section>

      {/* FOOTER */}
      <footer className="bg-navy px-5 pb-10 pt-4 text-navy-foreground">
        <div className="mx-auto max-w-5xl border-t border-navy-foreground/15 pt-8 text-sm">
          <Logo light />
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 opacity-80">
            <a href={CONFIG.LINKS.regulamin}>Regulamin</a>
            <a href={CONFIG.LINKS.prywatnosc}>Polityka prywatności</a>
            <a href={CONFIG.LINKS.zwroty}>Zwroty i reklamacje</a>
            <a href={`mailto:${CONFIG.EMAIL}`}>Kontakt ({CONFIG.EMAIL})</a>
          </nav>
          <p className="mt-4 opacity-60">{CONFIG.COMPANY}</p>
          <p className="mt-6 text-xs opacity-60">Produkt pomaga w asekuracji i nie zastępuje stałego nadzoru osoby dorosłej. Przed każdym użyciem sprawdź klamry i szwy. Nie używaj w pobliżu schodów, wody i jezdni.</p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-background/90 p-3 backdrop-blur md:hidden">
        <Cta className="w-full" />
      </div>
    </div>
  );
}
