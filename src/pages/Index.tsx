import React from "react";
import { CarFront, ChevronRight, Clock, MapPin, Menu, MoonStar, Phone, Wrench } from "lucide-react";

import nightHero from "@/assets/night-mechanic-hero.webp";
import logo from "/logo.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n/context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const getStructuredData = (t: typeof translations.nl) => ({
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: t.brandName,
  description: t.hero.description,
  url: "https://nachtautoservice.be/",
  telephone: "+32-466-19-56-22",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dendermondesteenweg 428",
    addressLocality: "Sint-Amandsberg",
    postalCode: "9040",
    addressRegion: "Oost-Vlaanderen",
    addressCountry: "BE",
  },
  areaServed: ["Gent", "Destelbergen", "Merelbeke", "Sint-Amandsberg", "Wondelgem"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:00",
      closes: "07:00",
    },
  ],
});

const Index: React.FC = () => {
  const { toast } = useToast();
  const { t, language } = useI18n();

  const handleScrollTo = (sectionId: string) => (event?: React.MouseEvent<HTMLElement>) => {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    toast({
      title: t.contact.toast.title,
      description: t.contact.toast.description,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate overflow-hidden">
        {/* Ambient neon glow */}
        <div className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 transform-gpu overflow-hidden blur-3xl will-change-transform">
          <div className="relative left-1/2 aspect-[1108/632] w-[80rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)] opacity-40" />
        </div>

        <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between gap-2 sm:gap-4">
            <button
              type="button"
              onClick={handleScrollTo("hero")}
              className="flex shrink-0 items-center gap-2 sm:gap-3 focus-visible:outline-none"
            >
              <img
                src={logo}
                alt={t.brandName}
                className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
                width="40"
                height="40"
                fetchPriority="high"
                loading="eager"
              />
              <div className="hidden flex-col leading-tight text-left sm:flex">
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">{t.location}</span>
                <span className="font-display text-xs font-semibold text-foreground sm:text-sm">{t.brandName}</span>
              </div>
              <div className="flex sm:hidden">
                <span className="font-display text-sm font-semibold text-foreground">{t.brandNameShort}</span>
              </div>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
              <nav className="hidden items-center gap-4 text-sm text-muted-foreground lg:flex lg:gap-6 xl:gap-8">
                <button
                  type="button"
                  onClick={handleScrollTo("diensten")}
                  className="whitespace-nowrap hover:text-foreground"
                >
                  {t.nav.diensten}
                </button>
                <button
                  type="button"
                  onClick={handleScrollTo("werkwijze")}
                  className="whitespace-nowrap hover:text-foreground"
                >
                  {t.nav.werkwijze}
                </button>
                <button type="button" onClick={handleScrollTo("regio")} className="whitespace-nowrap hover:text-foreground">
                  {t.nav.regio}
                </button>
                <button type="button" onClick={handleScrollTo("faq")} className="whitespace-nowrap hover:text-foreground">
                  {t.nav.faq}
                </button>
                <button type="button" onClick={handleScrollTo("contact")} className="whitespace-nowrap hover:text-foreground">
                  {t.nav.contact}
                </button>
              </nav>

              {/* Desktop CTA's */}
              <div className="hidden items-center gap-1.5 lg:flex lg:gap-2">
                <LanguageSwitcher />
                <Button variant="ghost" size="sm" type="button" onClick={handleScrollTo("diensten")} className="hidden xl:inline-flex">
                  {t.nav.bekijkDiensten}
                </Button>
                <Button variant="hero" size="sm" asChild className="hidden xl:inline-flex">
                  <a href="tel:+32466195622" aria-label={t.nav.belNu}>
                    <Phone className="mr-1.5 h-4 w-4" />
                    {t.nav.belNu}
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild className="xl:hidden">
                  <a href="tel:+32466195622" aria-label={t.nav.belNu}>
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Mobile menu */}
              <div className="flex items-center gap-1.5 lg:hidden">
                <LanguageSwitcher />
                <Button variant="outline" size="icon" asChild aria-label={t.nav.belNu} className="h-9 w-9">
                  <a href="tel:+32466195622">
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Open navigatie" className="h-9 w-9">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col justify-between bg-background/95">
                    <div className="space-y-6 pt-8">
                      <div className="flex items-center gap-3">
                        <img
                          src={logo}
                          alt={t.brandName}
                          className="h-8 w-8 shrink-0 object-contain"
                          width="32"
                          height="32"
                          loading="eager"
                        />
                        <div className="flex flex-col leading-tight">
                          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                            {language === "nl" ? "Gent" : language === "en" ? "Ghent" : "Gand"}
                          </span>
                          <span className="font-display text-sm font-semibold text-foreground">{t.brandNameShort}</span>
                        </div>
                      </div>

                      <nav className="flex flex-col gap-3 text-sm">
                        <SheetClose asChild>
                          <button
                            type="button"
                            onClick={handleScrollTo("diensten")}
                            className="py-1 text-left text-foreground"
                          >
                            {t.nav.diensten}
                          </button>
                        </SheetClose>
                        <SheetClose asChild>
                          <button
                            type="button"
                            onClick={handleScrollTo("werkwijze")}
                            className="py-1 text-left text-foreground"
                          >
                            {t.nav.werkwijze}
                          </button>
                        </SheetClose>
                        <SheetClose asChild>
                          <button
                            type="button"
                            onClick={handleScrollTo("regio")}
                            className="py-1 text-left text-foreground"
                          >
                            {t.nav.regio}
                          </button>
                        </SheetClose>
                        <SheetClose asChild>
                          <button type="button" onClick={handleScrollTo("faq")} className="py-1 text-left text-foreground">
                            {t.nav.faq}
                          </button>
                        </SheetClose>
                        <SheetClose asChild>
                          <button
                            type="button"
                            onClick={handleScrollTo("contact")}
                            className="py-1 text-left text-foreground"
                          >
                            {t.nav.contact}
                          </button>
                        </SheetClose>
                      </nav>
                    </div>

                    <div className="space-y-3 border-t border-border/60 pt-4 text-sm">
                      <Button variant="hero" className="w-full" asChild>
                        <a href="tel:+32466195622">
                          <Phone className="mr-1.5 h-4 w-4" /> {t.nav.belNu}
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        type="button"
                        onClick={handleScrollTo("contact")}
                      >
                        {t.contact.form.submit}
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section id="hero" className="relative overflow-hidden pb-16 pt-10 md:pt-16 lg:pb-24">
            <div className="container grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
              <div className="space-y-8">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-[0.65rem] font-medium text-secondary-foreground">
                    24/7
                  </span>
                  <span className="whitespace-normal">
                    <span className="hidden sm:inline">{t.hero.badge}</span>
                    <span className="sm:hidden">{t.hero.badgeMobile}</span>
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                    {t.hero.title}
                  </h1>
                  <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                    {t.hero.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:+32466195622">
                      <Phone className="mr-2 h-4 w-4" /> {t.hero.callToAction}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    type="button"
                    onClick={handleScrollTo("contact")}
                    className="inline-flex items-center"
                  >
                    {t.hero.formCta}
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>

                <dl className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                  <div className="space-y-1">
                    <dt className="flex items-center gap-1.5 font-medium text-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {t.hero.features.hours}
                    </dt>
                    <dd>{t.hero.features.hoursDesc}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="flex items-center gap-1.5 font-medium text-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {t.hero.features.region}
                    </dt>
                    <dd>{t.hero.features.regionDesc}</dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="flex items-center gap-1.5 font-medium text-foreground">
                      <Wrench className="h-4 w-4 text-primary" />
                      {t.hero.features.experience}
                    </dt>
                    <dd>{t.hero.features.experienceDesc}</dd>
                  </div>
                </dl>
              </div>

              <div className="relative mx-auto max-w-xl md:max-w-none">
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,_hsl(var(--accent))_0,_transparent_55%)] opacity-70" />
                <div className="pointer-events-none absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,_hsl(var(--secondary))_0,_transparent_60%)] opacity-60" />

                <Card className="group relative overflow-hidden border-border/70 bg-[radial-gradient(circle_at_top,_hsl(var(--hero-gradient-from))_0,_hsl(var(--surface-elevated))_55%,_hsl(var(--background))_100%)]/90 shadow-[0_24px_80px_hsl(var(--shadow-soft-color)/0.65)] backdrop-blur-xl">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={nightHero}
                        alt={t.hero.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    </div>
                    <div className="flex items-center justify-between gap-4 px-5 pb-4 pt-3 text-sm">
                      <div>
                        <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          <MoonStar className="h-3 w-3" />
                          {t.hero.nightShift}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {t.hero.nightShiftDesc}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                        <CarFront className="h-3.5 w-3.5 text-primary" />
                        <span>{t.hero.quickIntervention}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* DIENSTEN */}
          <section id="diensten" className="border-t border-border/60 bg-background/70 py-16 md:py-24">
            <div className="container space-y-10">
              <div className="max-w-2xl space-y-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t.services.badge}
                </p>
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold md:text-4xl">{t.services.title}</h2>
                  <p className="text-muted-foreground">
                    {t.services.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="relative overflow-hidden border-border/70 bg-card/90 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)] transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{t.services.items.diagnosis.title}</CardTitle>
                    <CardDescription>
                      {t.services.items.diagnosis.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative overflow-hidden border-border/70 bg-card/90 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)] transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CarFront className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{t.services.items.breakdown.title}</CardTitle>
                    <CardDescription>
                      {t.services.items.breakdown.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative overflow-hidden border-border/70 bg-card/90 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)] transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Clock className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{t.services.items.preparation.title}</CardTitle>
                    <CardDescription>
                      {t.services.items.preparation.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative overflow-hidden border-border/70 bg-card/90 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)] transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <MoonStar className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{t.services.items.maintenance.title}</CardTitle>
                    <CardDescription>
                      {t.services.items.maintenance.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative overflow-hidden border-border/70 bg-card/90 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)] transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{t.services.items.onLocation.title}</CardTitle>
                    <CardDescription>
                      {t.services.items.onLocation.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative overflow-hidden border-dashed border-primary/40 bg-card/60 transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{t.services.items.unsure.title}</CardTitle>
                    <CardDescription>
                      {t.services.items.unsure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="tel:+32466195622" className="inline-flex items-center">
                        <Phone className="mr-1.5 h-4 w-4" />
                        {t.services.items.unsure.button}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* WERKWIJZE */}
          <section id="werkwijze" className="py-16 md:py-24">
            <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t.process.badge}
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">{t.process.title}</h2>
                <p className="text-muted-foreground">
                  {t.process.description}
                </p>

                <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{t.process.steps.step1.title}</p>
                      <p>
                        {t.process.steps.step1.description}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{t.process.steps.step2.title}</p>
                      <p>
                        {t.process.steps.step2.description}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{t.process.steps.step3.title}</p>
                      <p>
                        {t.process.steps.step3.description}
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <Card className="border-border/70 bg-card/90 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)]">
                <CardHeader>
                  <CardTitle className="text-xl">{t.process.ideal.title}</CardTitle>
                  <CardDescription>
                    {t.process.ideal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {t.process.ideal.benefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* REGIO */}
          <section id="regio" className="border-y border-border/60 bg-background/80 py-16 md:py-24">
            <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-center">
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {t.region.badge}
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">{t.region.title}</h2>
                <p className="text-muted-foreground">
                  {t.region.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  {["Gent-centrum", "Sint-Amandsberg", "Wondelgem", "Destelbergen", "Merelbeke", "Ledeberg", "Zwijnaarde"].map(
                    (wijk) => (
                      <span
                        key={wijk}
                        className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card/80 px-3 py-1 text-muted-foreground"
                      >
                        <MapPin className="h-3 w-3 text-primary" />
                        {wijk}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <Card className="relative overflow-hidden border-border/70 bg-card/90">
                <CardHeader>
                  <CardTitle className="text-lg">{t.region.situations.title}</CardTitle>
                  <CardDescription>
                    {t.region.situations.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {t.region.situations.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs">
                    {t.region.situations.note}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-16 md:py-24">
            <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t.faq.badge}
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">{t.faq.title}</h2>
                <p className="text-muted-foreground">
                  {t.faq.description}
                </p>
              </div>

              <div>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="tarieven" className="border-border/70">
                    <AccordionTrigger>{t.faq.items.pricing.question}</AccordionTrigger>
                    <AccordionContent>
                      {t.faq.items.pricing.answer}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="betaling" className="border-border/70">
                    <AccordionTrigger>{t.faq.items.payment.question}</AccordionTrigger>
                    <AccordionContent>
                      {t.faq.items.payment.answer}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="bereik" className="border-border/70">
                    <AccordionTrigger>{t.faq.items.response.question}</AccordionTrigger>
                    <AccordionContent>
                      {t.faq.items.response.answer}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="voertuigen" className="border-border/70">
                    <AccordionTrigger>{t.faq.items.vehicles.question}</AccordionTrigger>
                    <AccordionContent>
                      {t.faq.items.vehicles.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="border-t border-border/60 bg-background/85 pb-16 pt-16 md:pb-24">
            <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t.contact.badge}
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">{t.contact.title}</h2>
                <p className="text-muted-foreground">
                  {t.contact.description}
                </p>

                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.contact.phone}</p>
                      <a href="tel:+32466195622" className="text-sm font-medium text-foreground">
                        0466 19 56 22
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.contact.hours}</p>
                      <p className="text-sm">{t.contact.hoursDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.contact.address}</p>
                      <p className="text-sm whitespace-pre-line">{t.contact.addressValue}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.contact.region}</p>
                      <p className="text-sm">{t.contact.regionDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-border/70 bg-card/95 shadow-[0_18px_60px_hsl(var(--shadow-soft-color)/0.5)]">
                <CardHeader>
                  <CardTitle className="text-lg">{t.contact.form.title}</CardTitle>
                  <CardDescription>
                    {t.contact.form.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="naam">{t.contact.form.name}</Label>
                        <Input id="naam" name="naam" placeholder={t.contact.form.namePlaceholder} required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input id="email" name="email" type="email" placeholder={t.contact.form.emailPlaceholder} required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="telefoon">{t.contact.form.phone}</Label>
                        <Input id="telefoon" name="telefoon" type="tel" placeholder={t.contact.form.phonePlaceholder} required />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="locatie">{t.contact.form.location}</Label>
                      <Input id="locatie" name="locatie" placeholder={t.contact.form.locationPlaceholder} />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="boodschap">{t.contact.form.message}</Label>
                      <Textarea
                        id="boodschap"
                        name="boodschap"
                        rows={4}
                        placeholder={t.contact.form.messagePlaceholder}
                        required
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {t.contact.form.note}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button type="submit" variant="hero">
                        {t.contact.form.submit}
                      </Button>
                      <Button variant="ghost" type="button" asChild>
                        <a href="tel:+32466195622" className="inline-flex items-center">
                          <Phone className="mr-1.5 h-4 w-4" />
                          {t.contact.form.callInstead}
                        </a>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(t)) }}
            />
          </section>
        </main>

        <footer className="border-t border-border/70 bg-background/95 py-6 text-xs text-muted-foreground">
          <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>{t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <MoonStar className="h-3 w-3 text-primary" /> {t.footer.tagline}
              </span>
              <button
                type="button"
                onClick={handleScrollTo("hero")}
                className="inline-flex items-center gap-1 hover:text-foreground"
              >
                {t.footer.backToTop} <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
