import contactImage from "@/assets/contact-community.jpg";

const ContactSection = () => {
  const options = [
    {
      title: "Carbon Buyers",
      description: "High-permanence removal credits backed by verified, on-ground work.",
      cta: "Discuss Credits"
    },
    {
      title: "Farmers & Suppliers",
      description: "Turn agricultural residue into income. Join our biomass network.",
      cta: "Partner With Us"
    },
    {
      title: "Institutions",
      description: "Research partnerships, policy collaboration, and impact investment.",
      cta: "Explore Partnership"
    },
    {
      title: "Long-Term Collaborators",
      description: "Aligned on decades, not quarters. Building climate infrastructure together.",
      cta: "Start Conversation"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Background Image with Vignette */}
      <div className="absolute inset-0">
        <img 
          src={contactImage} 
          alt="Community of farmers and workers" 
          className="image-cinematic opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block opacity-0 animate-fade-in">
            Work With Us
          </span>
          <h2 className="headline-section text-foreground mb-6 opacity-0 animate-fade-in-up delay-100">
            The work is serious. So is our commitment.
          </h2>
          <p className="body-large text-muted-foreground opacity-0 animate-fade-in-up delay-200">
            Whether you're seeking verified carbon removal, looking to monetise biomass, 
            or building for the long term — we'd welcome a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {options.map((option, index) => (
            <div 
              key={option.title}
              className="group p-8 bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg hover:border-terracotta/50 transition-colors opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
            >
              <h3 className="headline-subsection text-foreground mb-3">{option.title}</h3>
              <p className="body-text text-muted-foreground mb-6">{option.description}</p>
              <button className="text-terracotta font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                {option.cta}
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Direct Contact */}
        <div className="text-center mt-16 pt-16 border-t border-border/50">
          <p className="text-muted-foreground mb-4">Or reach us directly</p>
          <a 
            href="mailto:connect@climegrove.com" 
            className="font-display text-2xl font-bold text-foreground hover:text-terracotta transition-colors"
          >
            partnership@nettzero.world
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
