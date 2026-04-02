import { Linkedin } from "lucide-react";
import galleryImage from "@/assets/gallery-09.jpg";
import { useState } from "react";

const teamMembers =  [
  { name: "Ajay Miglani", designation: "Director & Board of Advisors", description: "Ajay Miglani is a senior professional with extensive experience in leadership, strategy, and advisory roles. As Director and Board Advisor, he provides strategic guidance, governance oversight, and industry insights to support the organization’s long-term vision and growth.", linkedinUrl: "https://www.linkedin.com/in/mig928/", emission2025: 11.2, offset2025: 12.4, image:'https://media.licdn.com/dms/image/v2/C4E03AQHZ1zRs1qTD6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1570609000549?e=2147483647&v=beta&t=dX_T-imBCJpfxeV6JTXAKIG3DGhcVYxxyfYvDa8pEVU' },
  { name: "Ankit Singh", designation: "Supervisor – Operations", description: "Ankit Singh supports operational execution by supervising field activities and assisting with coordination across teams. His role ensures timely implementation, process adherence, and effective management of day-to-day operational requirements.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 8.2, offset2025: 9.2 },
  // { name: "Dr. Abhinav Shukla", designation: "District Owner & Biochar Producer", description: "Dr. Abhinav Shukla is a District Owner and Biochar Producer with a strong focus on sustainable practices and climate-positive solutions. He supports the execution of biochar projects that promote soil health, carbon sequestration, and long-term environmental impact at the regional level.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 7.4, offset2025: 8.6, image:'https://i.postimg.cc/Xv4BfQCP/Whats-App-Image-2026-01-06-at-5-29-42-PM.jpg' },
 {
    name: "Deepak Kumar Kushwaha",
    designation: "Intern",
    description: "Deepak Kumar Kushwaha is researching CSR as a tool to restore depleted soil organic carbon in Indian agricultural landscapes. His work evaluates how corporate initiatives can promote regenerative agriculture, improve soil fertility, and contribute to long-term environmental sustainability.",
    linkedinUrl: "https://www.linkedin.com/company/climescore/",
    emission2025: "",
    offset2025: "",
    image: ""
  },
  { name: "Gautam Shiknis", designation: "Founder & Chairman", description: "Gautam Shiknis is the architect of the NettZero Suite and its hands-on driving force. He brings nearly 30 years of entrepreneurial experience to this venture and has been a Climate Champion for over 20 years. Actively involved in greenhouse gas (GHG) accounting since 2008, Gautam combines strategic vision with on-ground execution to advance credible climate action and sustainability solutions. Under his leadership, the organization focuses on delivering transparent, data-driven climate solutions that enable measurable progress toward carbon neutrality. Gautam plays a key role in advancing initiatives related to carbon accounting, sustainability platforms, and biochar-based carbon removal. His approach emphasizes practical implementation, scalability, and long-term environmental impact.", linkedinUrl: "https://www.linkedin.com/in/shiknis/", emission2025: 14.2, offset2025: 15.8, image:'https://media.licdn.com/dms/image/v2/C4D03AQGwwJl0D_-OPw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1636129095656?e=2147483647&v=beta&t=CsmI_HoWJCNFGS3WuQ1kpdLpCaEFYqH6snv6_kyKZsc' },
  {
    name: "Harsh Bharti",
    designation: "Intern",
    description: "Harsh Bharti is developing a macro framework for the use of biomass as a fuel in Indian industry. His project examines policy, economic viability, and environmental impact, aiming to reduce fossil fuel dependence and promote sustainable energy adoption.",
    linkedinUrl: "https://www.linkedin.com/company/climescore/",
    emission2025: "",
    offset2025: "",
    image: ""
  },
   {
    name: "Ipshita Dwivedi",
    designation: "Intern",
    description: "Ipshita Dwivedi is exploring the application of climate finance in sustainability, focusing on funding mechanisms, investment flows, and policy frameworks. Her work highlights opportunities and challenges in implementing climate finance in emerging economies like India.",
    linkedinUrl: "https://www.linkedin.com/company/climescore/",
    emission2025: "",
    offset2025: "",
    image: ""
  },
   {
    name: "Lohit Verma",
    designation: "Intern",
    description: "Lohit Verma is analyzing the challenges in mobilizing farmer networks for biomass rehabilitation. His research focuses on logistical, financial, and awareness barriers, while identifying strategies to improve participation and promote sustainable biomass management.",
    linkedinUrl: "https://www.linkedin.com/company/climescore/",
    emission2025: "",
    offset2025: "",
    image: ""
  },
  { name: "Mukesh Kevad", designation: "Supervisor – Operations", description: "Mukesh Kevad works as a Supervisor in Operations, overseeing on-ground activities, coordinating teams, and ensuring smooth execution of projects. He plays a key role in maintaining operational efficiency, quality control, and adherence to processes across field operations.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 8.1, offset2025: 9.2 },
  { name: "Neelesh Kevat", designation: "Biochar Producer", description: "Neelesh Kevat is a Biochar Producer involved in sustainable biochar production processes that support carbon sequestration and climate-positive outcomes. He contributes to biomass conversion activities and on-ground production efforts aligned with long-term environmental impact goals.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 6.9, offset2025: 7.5, image:'https://i.postimg.cc/3wY0Xnv6/img123.jpg' },
  {
    name: "Pavani Sambangi",
    designation: "Intern",
    description: "Pavani Sambangi is working on the application of GHG accounting and GRI reporting for key Indian sectors. She focuses on measuring, monitoring, and reporting emissions in line with global sustainability practices, while also exploring how GRI standards improve transparency, compliance, and sustainability disclosures.",
    linkedinUrl: "https://www.linkedin.com/company/climescore/",
    emission2025: "",
    offset2025: "",
    image: ""
  },
  { name: "Pratyusha Priyanka", designation: "District Owner & Biochar Producer", description: "Pratyusha Priyanka is a District Owner and Biochar Producer, actively involved in decentralized biochar production and sustainable waste-to-resource initiatives. She supports local climate action by managing district-level operations and contributing to carbon sequestration through biochar projects.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 6.5, offset2025: 7.3, image:'https://i.postimg.cc/zf8HC0g6/Whats-App-Image-2026-01-06-at-4-48-48-PM.jpg' },
  { name: "Priyanka Giri Shiknis", designation: "Board of Directors", description: "Priyanka Giri Shiknis serves as a Board of Directors, contributing to strategic decision-making, governance, and organizational oversight. She supports the leadership team by providing guidance on long-term vision, policy alignment, and sustainable growth of climate-focused initiatives.", linkedinUrl: "https://www.linkedin.com/in/priyanka-giri-shiknis-212b8b321/", emission2025: 10.5, offset2025: 11.7, image:'https://iili.io/q5mBwzB.jpg' },
  { name: "Rajeev Singh", designation: "District Owner & Biochar Producer", description: "Rajeev Singh oversees district-level biochar production operations, contributing to sustainable agriculture and carbon removal initiatives. His role focuses on implementation, coordination, and ensuring efficient biochar production aligned with environmental and climate goals.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 6.8, offset2025: 7.6, image:'https://i.postimg.cc/C5q2Vj4p/Whats-App-Image-2026-01-06-at-5-05-52-PM.jpg' },
  { name: "Rutuja Gaikwad", designation: "Research Analyst & Data Manager", description: "Rutuja Gaikwad works as a Research Analyst and Data Manager, supporting sustainability and climate initiatives through in-depth research, structured data management, and accurate documentation. She plays a key role in managing emissions data, supporting reports, and ensuring data integrity for GHG accounting and impact assessments..", linkedinUrl: "https://www.linkedin.com/in/rutuja-gaikwad-84b6b0286/", emission2025: 8.5, offset2025: 9.2, image:'https://iili.io/q5mKRRV.jpg' },
  { name: "Sapna Bisht", designation: "Head of ClimeSchool", description: "Sapna Bisht leads ClimeSchool, focusing on climate education, capacity building, and knowledge dissemination. She plays a pivotalrole in designing learning programs, training modules, andawareness initiatives that empower individuals and organizations tounderstand climate action, sustainability practices, and carbonmanagement.", linkedinUrl: "https://www.linkedin.com/in/sapna-bisht-813964104/", emission2025: 10.3, offset2025: 11.6, image:'https://iili.io/q5mJ7dN.png' },
  { name: "Sanjay Singh Rajput", designation: "Biochar Producer", description: "Sanjay Singh is a Biochar Producer involved in sustainable biochar production processes that support carbon sequestration and climate-positive outcomes. He contributes to biomass conversion activities and on-ground production efforts aligned with long-term environmental impact goals.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 6.7, offset2025: 7.4, image:'https://i.postimg.cc/5tbQBnCD/Whats-App-Image-2026-01-06-at-5-09-30-PM.jpg' },
  { name: "Swapnil Chavan", designation: "Full Stack Engineer", description: "Swapnil Chavan is a Full Stack Engineer responsible for developing, maintaining, and optimizing the organization’s digital platforms. He ensures smooth system functionality, scalability, and user-friendly interfaces, supporting the technical backbone of sustainability and climate-focused digital solutions.", linkedinUrl: "https://www.linkedin.com/in/swapnil-chavan-951103230/", emission2025: 9.9, offset2025: 11.4, image:'https://iili.io/q5bDybf.jpg' },
  {
    name: "Urfi Ali",
    designation: "Intern",
    description: "Urfi Ali is working on applying B2B2C financing models for carbon credits in Indian corporate and services sectors. The project focuses on enabling carbon-neutral supply chains, addressing Scope 3 emissions, and encouraging stakeholder participation in decarbonization.",
    linkedinUrl: "https://www.linkedin.com/company/climescore/",
    emission2025: "",
    offset2025: "",
    image: ""
  },
  { name: "Varun Hooja", designation: "Co-Founder", description: "Varun Hooja is the Co-Founder and plays a key role in shaping the organization’s vision and growth strategy. He contributes to business development, partnerships, and sustainability initiatives, ensuring alignment with the organization’s climate action objectives.", linkedinUrl: "https://www.linkedin.com/in/varun-hooja/", emission2025: 11.6, offset2025: 12.2, image:'https://iili.io/q5bP1pV.jpg' },
  { name: "Vidhi Gaur", designation: "GHG Assessor", description: "Vidhi Gaur is a GHG Assessor with expertise in greenhouse gas accounting and emissions assessment. She supports projects and clients by conducting accurate emissions calculations, ensuring compliance with relevant standards, and contributing to transparent and reliable sustainability reporting.", linkedinUrl: "https://www.linkedin.com/in/vidhigaur1/", emission2025: 9.4, offset2025: 9.8, image:'https://iili.io/q5bQNVI.jpg' },
  { name: "Vishal Kashyap", designation: "Biochar Producer", description: "Vishal Kashyap is a Biochar Producer involved in sustainable biochar production processes. He contributes to climate mitigation efforts by supporting biomass conversion, production activities, and initiatives focused on long-term carbon sequestration.", linkedinUrl: "https://www.linkedin.com/company/climescore/", emission2025: 7.9, offset2025: 8.8, image:'https://i.postimg.cc/43P7BV65/Whats-App-Image-2026-01-06-at-5-29-20-PM.jpg' },
 
  

];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  return (
    <section id="team" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={galleryImage}
          alt="Team background"
          className="image-cinematic opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,hsl(var(--background)/0.75)_85%)]" />
      </div>

      <div className="relative z-10 section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="label-text text-terracotta mb-4 block">
            Our People
          </span>
          <h2 className="headline-section text-foreground mb-6">
            The Team Behind ClimeGrove
          </h2>
          <p className="body-large text-muted-foreground">
            People building climate infrastructure with their hands, hearts,
            and decades of commitment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
  key={index}
  onClick={() => setSelectedMember(member)}
  className="cursor-pointer bg-background/40 backdrop-blur-sm border border-border/30 rounded-lg p-4 text-center hover:scale-105 transition"
>
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-secondary/50 overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl">👤</span>
                )}
              </div>

              {/* Name */}
              {member.name && (
                <h4 className="font-bold text-foreground text-sm mb-1">
                  {member.name}
                </h4>
              )}

              {/* Designation */}
              {member.designation && (
                <p className="text-xs text-terracotta mb-2">
                  {member.designation}
                </p>
              )}

              {/* Description */}
              {member.description && (
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {member.description}
                </p>
              )}

              {/* Emissions */}
              {(member.emission2025 || member.offset2025) && (
                <div className="flex justify-between text-xs mb-3">
                  {member.emission2025 && (
                    <span className="text-destructive">
                      -{member.emission2025}t
                    </span>
                  )}
                  {member.offset2025 && (
                    <span className="text-sage">
                      +{member.offset2025}t
                    </span>
                  )}
                </div>
              )}

              {/* LinkedIn */}
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
        {selectedMember && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    
    <div className="bg-background rounded-2xl p-6 max-w-md w-full relative shadow-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setSelectedMember(null)}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
      >
        ✖
      </button>

      {/* Image */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-secondary/50 flex items-center justify-center">
        {selectedMember.image ? (
          <img
            src={selectedMember.image}
            alt={selectedMember.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl">👤</span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-center mb-1">
        {selectedMember.name}
      </h3>

      {/* Role */}
      <p className="text-sm text-terracotta text-center mb-3">
        {selectedMember.designation}
      </p>

      {/* Description */}
      <p className="text-sm text-muted-foreground text-center mb-4">
        {selectedMember.description}
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-4 text-sm mb-4">
        <span className="text-destructive">
          -{selectedMember.emission2025}t
        </span>
        <span className="text-sage">
          +{selectedMember.offset2025}t
        </span>
      </div>

      {/* LinkedIn */}
      <div className="text-center">
        <a
          href={selectedMember.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Linkedin className="w-4 h-4" /> View Profile
        </a>
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default TeamSection;
