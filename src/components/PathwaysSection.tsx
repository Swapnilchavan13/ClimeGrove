import pathwaysImage from "@/assets/pathways-infrastructure.jpg";

const PathwaysSection = () => {
  const pathways = [
    {
      name: "Biochar",
      status: "Core — Active",
      description: "Our proven engine. Agricultural and forestry residue converted to stable carbon, returned to soil.",
      maturity: 100
    },
    {
      name: "Enhanced Rock Weathering",
      status: "Pilots & Scale-up",
      description: "Accelerating natural mineral weathering to capture atmospheric CO₂ while improving soil health.",
      maturity: 40
    },
    {
      name: "Methane Capture",
      status: "Development",
      description: "Addressing methane emissions from rice paddies and gaushalas — potent near-term climate action.",
      maturity: 25
    },
    {
      name: "Distributed DAC",
      status: "Research Phase",
      description: "Consumer-scale direct air capture — exploring distributed carbon removal for the future.",
      maturity: 10
    }
  ];

  return (
    <section id="pathways" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img 
          src={pathwaysImage} 
          alt="Multiple biochar kilns at scale" 
          className="image-cinematic opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Expanding Pathways
          </span>
          <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
            Once systems are built, expansion becomes responsible — not speculative.
          </h2>
          <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            Biochar earned us the right to think bigger. These pathways follow the same discipline: prove it first, scale it second.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pathways.map((pathway, index) => (
            <div 
              key={pathway.name}
              className={`p-8 bg-background/60 backdrop-blur-sm border rounded-lg opacity-0 animate-fade-in-up ${
                index === 0 ? "border-terracotta/50" : "border-border/50"
              }`}
              style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="headline-subsection text-foreground mb-1">{pathway.name}</h3>
                  <span className={`text-xs uppercase tracking-widest ${
                    index === 0 ? "text-terracotta" : "text-muted-foreground"
                  }`}>
                    {pathway.status}
                  </span>
                </div>
              </div>

              <p className="body-text text-muted-foreground mb-6">{pathway.description}</p>

              {/* Maturity Bar */}
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Maturity</span>
                  <span>{pathway.maturity}%</span>
                </div>
                <div className="h-1.5 bg-border/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      index === 0 ? "bg-terracotta" : "bg-sage-muted"
                    }`}
                    style={{ width: `${pathway.maturity}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
