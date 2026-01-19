

const GallerySection = () => {
  const images = [
    { src: "https://iili.io/fkMupja.jpg", caption: "Tigers roaming freely in Bandhavgarh" },
    { src: "https://iili.io/fkMuDyF.jpg", caption: "Transporting agricultural residue for biochar making" },
    { src: "https://iili.io/fkEi4AQ.jpg", caption: "Open-pit biochar production using crop waste" },
    { src: "https://iili.io/fkEirHx.jpg", caption: "Farmers holding freshly produced biochar" },
    { src: "https://iili.io/fkEiUSj.jpg", caption: "Processed biochar stored in containers" },
    { src: "https://iili.io/fkEiScb.jpg", caption: "Bulk biochar ready for soil application" },
    { src: "https://iili.io/fkEi8Ku.jpg", caption: "Community demonstration of biochar production" },
    { src: "https://iili.io/fe7dutf.jpg", caption: "Collected agricultural biomass for biochar preparation" },
    { src: "https://iili.io/fe5y8CB.jpg", caption: "Farmer holding freshly produced biochar pellets" },
    { src: "https://iili.io/fe5mnaa.jpg", caption: "Flame-cone kiln in action for biochar production" },
    { src: "https://iili.io/fOZpEdb.png", caption: "Large biochar heap cooling after production" },
    { src: "https://iili.io/fOZpnqX.png", caption: "Field-scale biochar production activity by farmers" },
    { src: "https://iili.io/fOZwmYv.jpg", caption: "Agricultural residue storage and transport area" },
    { src: "https://iili.io/fOZwt4a.jpg", caption: "Farmers gathered around a biochar production unit" },
    { src: "https://iili.io/fOZaE9s.jpg", caption: "Biochar pile ready for storage and soil application" },
    { src: "https://iili.io/fOZaH8u.jpg", caption: "Project team and farmers during biochar field demonstration" },
  ];


  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block">Gallery</span>
          <h2 className="headline-section text-foreground mb-6">Watch ClimeGrove at Work</h2>
          <p className="body-large text-muted-foreground">Real moments from the field.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 right-4 text-sm text-foreground">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
