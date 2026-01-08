import { Linkedin } from "lucide-react";
import galleryImage from "@/assets/gallery-09.jpg";

const TeamSection = () => {
  const teamMembers = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Team Member ${i + 1}`,
    designation: i < 4 ? "Leadership" : i < 8 ? "Operations" : i < 12 ? "Field Team" : "Technical",
    linkedin: "#",
    description: "Passionate about climate action and sustainable agriculture. Building carbon infrastructure for India's future.",
    annualEmission: `${(Math.random() * 3 + 2).toFixed(1)}`,
    annualRemoval: `${(Math.random() * 5 + 3).toFixed(1)}`,
  }));

  return (
    <section id="team" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={galleryImage} alt="Team background" className="image-cinematic opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.75)_85%)]" />
      </div>

      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block">Our People</span>
          <h2 className="headline-section text-foreground mb-6">The Team Behind ClimeGrove</h2>
          <p className="body-large text-muted-foreground">
            People building climate infrastructure with their hands, hearts, and decades of commitment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-4 text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-secondary/50 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-bold text-foreground text-sm mb-1">{member.name}</h4>
              <p className="text-xs text-terracotta mb-2">{member.designation}</p>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{member.description}</p>
              <div className="flex justify-between text-xs mb-3">
                <span className="text-destructive">-{member.annualEmission}t</span>
                <span className="text-sage">+{member.annualRemoval}t</span>
              </div>
              <a href={member.linkedin} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                <Linkedin className="w-3 h-3" /> LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
