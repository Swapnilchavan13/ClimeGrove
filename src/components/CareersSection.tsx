import galleryImage from "@/assets/gallery-12.jpg";

const CareersSection = () => {
  const jobs = [
    { title: "Field Operations Manager", location: "Madhya Pradesh", description: "Lead on-ground biochar production and farmer engagement across Central India sites.", experience: "5+" },
    { title: "Carbon Credit Analyst", location: "Remote / Delhi NCR", description: "Manage MRV processes, registry submissions, and carbon credit documentation.", experience: "3+" },
    { title: "Agricultural Scientist", location: "Multiple Locations", description: "Research biochar applications, soil health monitoring, and crop yield optimization.", experience: "4+" },
    { title: "Community Liaison Officer", location: "Karnataka", description: "Build relationships with farming communities and coordinate biomass collection networks.", experience: "2+" },
  ];

  return (
    <section id="careers" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={galleryImage} alt="Careers background" className="image-cinematic opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.75)_85%)]" />
      </div>

      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block">Join Us</span>
          <h2 className="headline-section text-foreground mb-6">Work With ClimeGrove</h2>
          <p className="body-large text-muted-foreground">Build your career while building climate infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div key={job.title} className="bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-terracotta/50 transition-colors">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{job.title}</h3>
              <div className="flex gap-4 mb-4">
                <span className="text-xs px-2 py-1 bg-secondary/50 rounded">{job.location}</span>
                <span className="text-xs px-2 py-1 bg-terracotta/20 text-terracotta rounded">{job.experience} yrs exp</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
              <button className="text-terracotta font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Apply Now <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
