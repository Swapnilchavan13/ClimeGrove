import biocharImage from "@/assets/biochar-production.jpg";

const BiocharSection = () => {
  const benefits = [
    {
      title: "Stops Open Burning",
      subtitle: "Improves AQI",
      description: "Diverts agricultural residue from burning, directly reducing particulate matter and toxic emissions."
    },
    {
      title: "Locks Carbon",
      subtitle: "Permanent Removal",
      description: "Biochar sequesters carbon for centuries, creating durable carbon dioxide removal."
    },
    {
      title: "Rebuilds Soil",
      subtitle: "Organic Matter",
      description: "Restores depleted soil carbon, improves water retention, and supports microbial ecosystems."
    },
    {
      title: "Creates Income",
      subtitle: "Farmer Livelihood",
      description: "Transforms waste into value, generating new revenue streams for agricultural communities."
    }
  ];

  const processSteps = [
    { step: "01", title: "Collect", description: "Agricultural and forestry residues gathered from farms", text:"Over 500,000 kgs of rice straw rehabilitated." },
    { step: "02", title: "Convert", description: "Controlled pyrolysis transforms biomass to biochar", text:"Over 125,000 kilos of carbon locked for 1000+ years." },
    { step: "03", title: "Stabilise", description: "Carbon locked in stable form for centuries", text:"Over 250,000 kgs of organic fertiliser created." },
    { step: "04", title: "Apply", description: "Biochar returned to land as soil amendment", text:"Over 2000 acres of soils noirished." }
  ];

  return (
    <section id="biochar" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={biocharImage} 
          alt="Biochar kiln in operation" 
          className="image-cinematic opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.75)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Our Proven Engine
          </span>
          <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
            Biochar is not a concept for us. It is already working.
          </h2>
          <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            While others model future scenarios, ClimeGrove by NettZero operates kilns, engages farmers, processes biomass, and returns carbon to land — today.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-24">
          <h3 className="headline-subsection text-foreground mb-12 text-center opacity-0 animate-fade-in-up delay-300">
            What We Do on the Ground
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div 
                key={item.step}
                className="relative p-6 bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100 + 300}ms` }}
              >
                <span className="stat-number text-terracotta/30 absolute -top-4 -left-2 text-7xl">
                  {item.step}
                </span>
                <div className="relative z-10 pt-8">
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <h4
  className="bg-background/40"
  style={{ color: "rgba(103, 54, 34, 1)" }}
>
  {item.text}
</h4>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <h3 className="headline-subsection text-foreground mb-12 text-center opacity-0 animate-fade-in-up delay-500">
            What This Solves — Simultaneously
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-6 bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100 + 500}ms` }}
              >
                <h4 className="font-display text-xl font-bold text-foreground mb-1">{benefit.title}</h4>
                <span className="text-xs uppercase tracking-widest text-terracotta mb-4 block">
                  {benefit.subtitle}
                </span>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiocharSection;
