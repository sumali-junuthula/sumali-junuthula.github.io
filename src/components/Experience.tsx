import { useState } from "react";
import { Award, Trophy } from "lucide-react";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const timelineItems = [
    {
      id: 1,
      type: "experience",
      company: "Microsoft Learn Student Ambassadors SRM",
      role: "Student Ambassador",
      duration: "January 2024 - Present",
      logo: "MS",
      logoColor: "bg-blue-600",
      achievements: [
        "Led technical workshops for 200+ students on cloud computing and web development",
        "Organized hackathons and coding bootcamps with 90% completion rates",
        "Mentored junior developers in React.js and Azure cloud services",
        "Collaborated with university faculty to integrate modern tech curriculum"
      ]
    },
    {
      id: 2,
      type: "experience",
      company: "Apollo Tyres R&D",
      role: "Project Trainee",
      duration: "February 2024 - May 2024",
      logo: "A",
      logoColor: "bg-emerald-500",
      achievements: [
        "Architected a robust backend using Django and PostgreSQL to handle over 200 concurrent simulations, resulting in a 40% improvement in system performance and data retrieval efficiency.",
        "Designed an interactive Chart.js dashboard for managers to track job assignments, completion rates, and real-time engineer performance across 300+ projects.",
        "Streamlined task management for a system handling over 1,000 tasks daily.",
        "Developed a web application that optimized the simulation workflow for Apollo Tyres, enhancing task allocation efficiency by approximately 30%."
      ]
    },
    {
      id: 3,
      type: "award",
      title: "Best Innovation Project",
      organization: "Tech Excellence Awards 2024",
      duration: "March 2024",
      logo: "🏆",
      logoColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      achievements: [
        "Recognized for developing an innovative AI-powered code analysis tool",
        "Selected from over 500 submissions across 20+ universities",
        "Received mentorship opportunity with industry professionals",
        "Featured in TechCrunch article about student innovations"
      ]
    },
    {
      id: 4,
      type: "experience",
      company: "Social Winter of Code",
      role: "Open Source Contributor", 
      duration: "December 2023 - February 2024",
      logo: "SW",
      logoColor: "bg-purple-600",
      achievements: [
        "Contributed to 5+ open source projects focused on social impact and community development",
        "Implemented responsive UI components using React and Tailwind CSS",
        "Fixed critical bugs and improved code quality across multiple repositories",
        "Collaborated with international developers through GitHub and Discord"
      ]
    },
    {
      id: 5,
      type: "award",
      title: "Outstanding Student Developer",
      organization: "Developer Community Awards",
      duration: "January 2024",
      logo: "⭐",
      logoColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      achievements: [
        "Awarded for exceptional contributions to open source community",
        "Recognized leadership in organizing coding workshops",
        "Honored for mentoring junior developers",
        "Certificate of excellence in software development practices"
      ]
    },
    {
      id: 6,
      type: "experience",
      company: "EduSkills Foundation",
      role: "Technical Intern",
      duration: "June 2023 - August 2023", 
      logo: "ES",
      logoColor: "bg-orange-500",
      achievements: [
        "Developed educational web applications for K-12 students using MERN stack",
        "Created interactive learning modules with gamification features",
        "Optimized database queries resulting in 50% faster page load times",
        "Conducted user testing sessions with 100+ students to improve UX"
      ]
    },
    {
      id: 7,
      type: "experience",
      company: "MathWorks",
      role: "Student Developer",
      duration: "September 2023 - November 2023",
      logo: "MW", 
      logoColor: "bg-red-600",
      achievements: [
        "Built MATLAB simulation tools for engineering analysis and data visualization",
        "Developed custom algorithms for signal processing and machine learning applications",
        "Created documentation and tutorials for student community of 500+ members",
        "Presented technical solutions at virtual conferences and workshops"
      ]
    },
    {
      id: 8,
      type: "award",
      title: "Hackathon Winner",
      organization: "CodeFest 2023",
      duration: "October 2023",
      logo: "🥇",
      logoColor: "bg-gradient-to-r from-green-400 to-blue-500",
      achievements: [
        "First place in 48-hour hackathon with 200+ participants",
        "Built a sustainable transportation app using React Native",
        "Implemented real-time route optimization algorithms",
        "Won $5000 prize and internship opportunity"
      ]
    }
  ];

  const currentItem = timelineItems.find(item => item.id === selectedItem);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Experience</span>{" "}
            <span className="font-mono text-gradient-code">& Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and recognition through internships, projects, and achievements.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Sidebar - Timeline */}
          <div className="lg:col-span-2 space-y-2">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline connector line */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-4 top-12 w-0.5 h-8 bg-border"></div>
                )}
                
                <button
                  onClick={() => setSelectedItem(item.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative ${
                    selectedItem === item.id
                      ? 'bg-primary/10 border-l-4 border-primary text-foreground shadow-lg'
                      : 'bg-muted/50 hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-4 w-3 h-3 rounded-full border-2 border-background ${
                    selectedItem === item.id ? 'bg-primary' : 'bg-muted-foreground'
                  }`}></div>
                  
                  <div className="ml-8">
                    <div className="flex items-center gap-2 mb-1">
                      {item.type === 'award' && (
                        <Trophy className="h-4 w-4 text-yellow-500" />
                      )}
                      <div className="font-mono text-sm font-medium">
                        {item.type === 'experience' ? item.company : item.title}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.type === 'experience' ? item.role : item.organization}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right Content - Details */}
          <div className="lg:col-span-3">
            {currentItem && (
              <div className="bg-card rounded-lg border border-border p-8 min-h-[500px]">
                {/* Header with Logo */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`${currentItem.logoColor} text-white font-bold text-xl w-16 h-16 rounded-xl flex items-center justify-center text-2xl`}>
                    {currentItem.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {currentItem.type === 'award' && (
                        <Award className="h-5 w-5 text-yellow-500" />
                      )}
                      <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                        {currentItem.type}
                      </span>
                    </div>
                    
                    {currentItem.type === 'experience' ? (
                      <>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {currentItem.role}{" "}
                          <span className="text-primary">@</span>
                        </h3>
                        <div className="text-xl font-semibold text-primary mb-2">
                          {currentItem.company}
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {currentItem.title}
                        </h3>
                        <div className="text-xl font-semibold text-primary mb-2">
                          {currentItem.organization}
                        </div>
                      </>
                    )}
                    
                    <div className="text-muted-foreground font-mono text-sm">
                      {currentItem.duration}
                    </div>
                  </div>
                </div>

                {/* Achievements with bullet points */}
                <div className="space-y-4">
                  {currentItem.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;