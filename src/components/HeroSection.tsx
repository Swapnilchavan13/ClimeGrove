import heroImage from "@/assets/hero-burning-fields.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Crop residue burning in Indian fields at dusk" 
          className="image-cinematic opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="mb-8 opacity-0 animate-fade-in">
            <span className="label-text text-terracotta">
              Climate Infrastructure for India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="headline-display text-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
            When land degrades, air chokes, and farmers burn what once sustained them — 
            <span className="text-terracotta"> carbon is only part of the problem.</span>
          </h1>

          {/* Sub-headline */}
          {/* <p className="body-large text-muted-foreground max-w-2xl mb-12 opacity-0 animate-fade-in-up delay-400">
            ClimeGrove by NettZero works at the intersection of soil collapse, air pollution, 
            biomass waste, and climate change — restoring balance through proven, 
            on-ground systems.
          </p> */}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-500">
            <a 
              href="#biochar" 
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream font-medium rounded-md hover:bg-terracotta-light transition-colors"
            >
              See Our Work
            </a>
            <a 
              href="#crisis" 
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
            >
              Understand the Crisis
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-1000">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-terracotta to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
