import { useState } from "react";
import { Award, Trophy } from "lucide-react";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const timelineItems = [
    {
      id: 1,
      type: "experience",
      company: "Evolv",
      role: "Founder & ML Engineer - Swartz Center for Entrepreneurship",
      duration: "Jun 2025 - Curr",
      logo: "CMU",
      logoColor: "bg-blue-600",
      achievements: [
        "Designed and trained deep learning models (LSTMs, Transformers) to forecast long-term stock price trends, achieving 15–20% higher predictive accuracy in backtesting compared to ARIMA and baseline models.",
        "Built data pipelines processing 10M+ financial time-series records, implementing feature engineering (volatility measures, technical indicators, sentiment scores) for model input.",
        "Deployed ML models to AWS (S3, EC2, Lambda) with automated retraining, version control, and real-time inference APIs for investor-facing applications.",
        "Conducted hyperparameter optimization (Optuna, Bayesian search) to reduce model error rates by 12%, improving generalization on out-of-sample data.",
        "Applied explainable AI techniques (SHAP, feature attribution) to interpret model predictions, enhancing transparency for end-users and stakeholders."
      ]
    },
    {
      id: 2,
      type: "experience",
      company: "CMU Help Center",
      role: "Office Assistant",
      duration: "Jun 2025 - Curr",
      logo: "CMU",
      logoColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      achievements: [
        "Assisted 50+ walk-in clients, troubleshooting hardware, operating system, and application issues across Windows, macOS, and Linux platforms.",
        "Resolved 95%+ of technical issues on first contact, reducing downtime for students, faculty, and staff.",
        "Diagnosed and mitigated 100+ email spam/phishing cases, improving campus cybersecurity awareness and response efficiency.",
        "Evaluated and provided structured feedback for a team of 10+ technical consultants, leading to a 15% improvement in service quality scores.",
        "Delivered clear technical guidance in high-pressure environments, strengthening analytical, debugging, and communication skills."
      ]
    },
    {
      id: 3,
      type: "experience",
      company: "Plus Tutors",
      role: "Math Tutor",
      duration: "Jun 2025 - Curr",
      logo: "CMU",
      logoColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      achievements: [
        "Tutored 50+ middle school students weekly in algebra, geometry, and problem-solving strategies, fostering stronger mathematical reasoning.",
        "Designed individualized lesson plans tailored to each student’s learning style, leading to an average improvement of one letter grade within a semester.",
        "Applied diverse teaching methods (guided practice, mini-lessons, and real-world examples) to strengthen conceptual understanding and retention.",
        "Mentored students to build confidence in tackling complex problems, enhancing critical thinking and analytical skills transferable to quantitative fields."
      ]
    },
    {
      id: 4,
      type: "award",
      title: "2nd Place",
      organization: "15-112 Hackathon",
      duration: "Mar 2024",
      logo: "🏆",
      logoColor: "bg-emerald-500",
      achievements: [
        "Collaborated with a 4-person team to design and deploy an interactive AI-powered language learning game within 24 hours, simulating real-world conversational scenarios.",
        "Implemented a Neural Machine Translation (NMT) pipeline to analyze spoken input and generate accurate outputs, enhancing user immersion and feedback quality.",
        "Integrated Google Translate API to support 130+ languages, enabling real-time speech recognition, translation, and accuracy evaluation.",
        "Applied principles of natural language processing (NLP), algorithm design, and rapid prototyping to deliver a functional application recognized as 2nd place among 30+ competing teams.",
        "Addressed cultural and linguistic diversity by incorporating immigrant perspectives, highlighting inclusive design in technical innovation."
      ]
    },
    {
      id: 5,
      type: "experience",
      company: "American Marketing Association",
      role: "Member of For-Profit Committee",
      duration: "January 2024 - May 2025",
      logo: "AMA",
      logoColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      achievements: [
        "Consulted with Carlin Fit, LLC and the Fit4Friends app, delivering strategic branding solutions that reached 500+ target users during rollout.",
        "Led a 4-person subteam to design and implement brand and logo guidelines, increasing brand consistency by 30% across digital and print assets.",
        "Conducted market analysis of 3+ competitors, identifying positioning opportunities that improved client differentiation in a competitive fitness tech space.",
        "Translated marketing theory into practice through hands-on consulting, enhancing professional expertise while delivering tangible business outcomes for clients."
      ]
    },
    {
      id: 6,
      type: "award",
      title: "1st Place",
      organization: "PwC x 180 Degrees Social Impact Scopeathon",
      duration: "Nov 2023",
      logo: "🏆",
      logoColor: "bg-emerald-500",
      achievements: [
        "Led and coordinated a 5-person team to design an innovative solution for reducing homelessness in Pittsburgh, advancing to the Top 5 finalists out of 16 groups in under one week.",
        "Proposed a recycling initiative repurposing unused shipping containers into sustainable housing and resource centers, addressing both environmental and social challenges.",
        "Delivered a strategic presentation to PwC executives, combining quantitative market analysis, cost modeling, and community impact projections to demonstrate feasibility.",
        "Secured 1st place recognition by outperforming peers through creative problem-solving, rigorous analysis, and persuasive communication under time constraints."
      ]
    },
    {
      id: 7,
      type: "award",
      title: "2nd Place",
      organization: "AMA Academy Final Presentation",
      duration: "Nov 2023",
      logo: "🏆",
      logoColor: "bg-emerald-500",
      achievements: [
        "Recognized for developing an innovative AI-powered code analysis tool",
        "Selected from over 500 submissions across 20+ universities",
        "Received mentorship opportunity with industry professionals",
        "Featured in TechCrunch article about student innovations"
      ]
    },
    {
      id: 8,
      type: "experience",
      company: "DMX Consulting",
      role: "Intern",
      duration: "Jan 2022 - Apr 2022",
      logo: "DMX",
      logoColor: "bg-blue-600",
      achievements: [
        "Processed and analyzed business datasets from 25+ companies, applying regression analysis and basic forecasting models to evaluate growth potential and revenue trends",
        "Built visual dashboards (Excel/Python) to track KPIs, enabling consultants to identify inefficiencies with 30% faster turnaround in decision-making",
        "Applied clustering techniques to segment 50+ potential client businesses by size, industry, and financial health, improving outreach prioritization accuracy by 40%",
        "Contributed to data-driven consulting strategies by translating raw business metrics into KPIs, benchmarking against industry standards, and highlighting areas for optimization",
        "Learned and applied start-up consulting practices with a technical focus on data analysis, process automation, and visualization to support scalable recommendations"
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