import mrvImage from "@/assets/mrv-verification.jpg";

const MRVSection = () => {
  const steps = [
    { id: "01", title: "Field Operations", description: "Biomass collected and processed at kiln sites" },
    { id: "02", title: "Biochar Production", description: "Controlled pyrolysis with quality monitoring" },
    { id: "03", title: "Soil Application", description: "Biochar returned to agricultural land" },
    { id: "04", title: "Measurement", description: "Quantified carbon content and permanence" },
    { id: "05", title: "Verification", description: "Third-party validation and registry alignment" }
  ];

  return (
    <section className="relative min-h-screen py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img 
          src={mrvImage} 
          alt="Biochar measurement and verification process" 
          className="image-cinematic opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            From Field to Credit
          </span>
          <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
            Carbon credits are created only after physical reality.
          </h2>
          <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            We practice conservative MRV (Measurement, Reporting, Verification), aligned with registry methodologies and focused on long-term permanence. Credits follow work, never precede it.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border/50 hidden md:block" />

          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-terracotta text-cream flex items-center justify-center mx-auto mb-4 relative z-10 font-display font-bold">
                  {step.id}
                </div>
                <h4 className="font-bold text-foreground mb-2 text-sm">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MRVSection;
