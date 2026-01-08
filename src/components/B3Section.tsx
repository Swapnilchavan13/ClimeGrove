import b3Image from "@/assets/b3-soil.jpg";
import b3Packaging from "@/assets/b3-packaging.png";

const B3Section = () => {
  const benefits = [
    "Increases soil organic carbon",
    "Enhances water retention capacity",
    "Supports beneficial microbial life",
    "Reduces chemical fertiliser dependence",
    "Improves long-term soil structure"
  ];

  return (
    <section id="b3" className="relative min-h-screen py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Lighter Vignette */}
      <div className="absolute inset-0">
        <img 
          src={b3Image} 
          alt="Hands holding biochar-enriched soil" 
          className="image-cinematic opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.7)_85%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
              Bhoomi Bio Booster
            </span>
            <h2 className="headline-section text-foreground mb-8 opacity-0 animate-fade-in-up delay-100">
              India's soils are being exhausted. B3 is how we restore what decades of extraction have removed.
            </h2>

            <p className="body-text text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
              B3 — Bhoomi Bio Booster — is not just a product. It is a civilisational intervention. 
              A biochar-infused soil conditioner designed to rebuild the carbon foundation that 
              intensive agriculture has depleted.
            </p>

            <div className="space-y-3 mb-10 opacity-0 animate-fade-in-up delay-300">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg opacity-0 animate-fade-in-up delay-400">
              <p className="font-display text-lg font-bold text-foreground italic">
                "B3 is how carbon removal returns value to the land — 
                not as an offset, but as restoration."
              </p>
            </div>
          </div>

          {/* Product Image */}
          <div className="opacity-0 animate-fade-in-up delay-500">
            <div className="relative">
              <div className="bg-background/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src={b3Packaging} 
                  alt="Bhoomi Bio Booster B3 Product"
                  className="max-w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-terracotta text-cream px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-bold">Premium Biochar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B3Section;
