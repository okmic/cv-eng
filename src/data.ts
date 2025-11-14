import { Award, Cloud, Code2, Container, Cpu, Database, GitBranch, Network, Settings, Shield, Star, Target, Terminal, Users, Zap } from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2017
}
export const siteData = {
  navItems: [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ],
  hero: {
    title: "MICHAEL OKHTOV",
    buttonValue: "Hire Me",
    subtitle: "Fullstack Developer",
    description: "Transforming complex business challenges into elegant technical solutions. Specializing in AI-powered cases, high-load applications, and microservices architecture.",
    stats: [
      { number: '40+', label: 'projects' },
      { number: '8', label: 'years of experience' },
      { number: '100%', label: 'result' }
    ]
  },
  about: {
    title: "ADVANTAGES",
    title1: "Technical",
    subTitle1: "expertise",
    subSubTitle1: "and team",
    subSubSubTitle1: "synergy",
    title2: "Combining technical expertise with exceptional teamwork skills —",
    subTitle2: "the success formula for ambitious projects",
    items: [
      {
        title: "Reliability",
        description: "Systems with 99.9% uptime and automatic recovery. Implementing fault-tolerant solutions with well-thought-out architecture and 24/7 monitoring. Your applications will run smoothly even under peak loads.",
        metric: "99.9% UPTIME",
        gradient: "from-emerald-500 to-cyan-500",
        icon: Shield,
        features: ["Automatic recovery", "24/7 monitoring", "Fault-tolerant architecture"]
      },
      {
        title: "Speed",
        description: "Optimized solutions with response times under 100ms. Using modern technologies and best practices for maximum performance. Fast loading and responsive interface are key to your product's success.",
        metric: "<100MS RESPONSE",
        gradient: "from-purple-500 to-pink-500",
        icon: Zap,
        features: ["Optimized loading", "Modern technologies", "Best practices"]
      },
      {
        title: "Team Integration",
        description: "I'll become friends with your team. I quickly integrate into workflows, respect existing practices, and contribute to the overall dynamics. Creating a positive environment for productive collaboration and effective interaction.",
        metric: "TEAM PLAYER",
        gradient: "from-blue-500 to-indigo-500",
        icon: Users,
        features: ["Quick adaptation", "Respect for processes", "Positive environment"]
      }
    ],
    stats: [
            { 
              number: "40+", 
              label: "Successful Projects", 
              suffix: "",
              gradient: "from-purple-500 to-pink-500",
              delay: "0s"
            },
            { 
              number: "8", 
              label: "Years of Commercial Experience", 
              suffix: "years",
              gradient: "from-blue-500 to-cyan-500",
              delay: "0.1s"
            },
            { 
              number: "100", 
              label: "Result Guarantee", 
              suffix: "%",
              gradient: "from-green-500 to-emerald-500",
              delay: "0.2s"
            },
            { 
              number: "24/7", 
              label: "Technical Support", 
              suffix: "",
              gradient: "from-orange-500 to-red-500",
              delay: "0.3s"
            }
          ],
  },
  experience: {
    title: "CAREER PATH",
    selectionTitle1: "Professional",
    selectionSubTitle1: "Experience",
    selectionTitle2: "Key Achievements:",
    subtitle: "8 years delivering exceptional results across diverse industries",
    stats: [
      { number: `${getExperienceYears()}+`, label: 'Years of Experience', icon: Award, gradient: 'from-blue-500 to-cyan-500' },
      { number: '40+', label: 'Projects', icon: Target, gradient: 'from-purple-500 to-pink-500' },
      { number: '100%', label: 'Result', icon: Star, gradient: 'from-green-500 to-emerald-500' },
      { number: '15+', label: 'Technologies', icon: Zap, gradient: 'from-orange-500 to-red-500' }
    ],
    items: [
      {
        period: "2025 - Present",
        title: "Lead Fullstack Developer • Freelance",
        company: "Various Clients",
        achievements: [
          "Developed 40+ outsourced projects across various domains",
          "Achieved 99.9% client satisfaction with timely delivery",
          "Mentored 5+ junior developers in advanced architectural patterns"
        ],
        tech: ["Node.js", "React", "Kubernetes", "Microservices"]
      },
      {
        period: "2022 - 2025",
        title: "Fullstack Engineer • ConvertMe",
        company: "Digital Transformation Agency",
        achievements: [
          "Architected microservices platform",
          "Reduced infrastructure costs by 40% through optimization",
        ],
        tech: ["TypeScript", "Fastify", "Docker", "MySql", "Redis"]
      },
      {
        period: "2021 - 2022",
        title: "Software Engineer • SKGA",
        company: "Education Technology",
        achievements: [
          "Automated internal processes saving 200+ hours monthly",
          "Trained 50+ staff members in database management",
          "Implemented secure network infrastructure"
        ],
        tech: ["Python", "Node.js", "Linux", "SQL", "Automation"]
      }
    ]
  },
  skills: {
    title: "SKILLS & TECHNOLOGIES",
    title1: "TECHNICAL MASTERY",
    subtitle1: "Deep expertise across the full technology stack",
    skillIcons: {
      "Node.js": Terminal,
      "Microservices": Network,
      "API Design": GitBranch,
      "System Architecture": Settings,
      "React": Code2,
      "TypeScript": Zap,
      "Performance": Settings,
      "UX/UI": Settings,
      "Docker": Container,
      "Kubernetes": Cloud,
      "AWS/GCP": Cloud,
      "CI/CD": GitBranch,
      "PostgreSQL": Database,
      "Redis": Cpu,
      "Message Queues": Network,
      "MongoDB": Database
    },
    categories: [
      {
        category: "Backend Engineering",
        level: "Expert",
        skills: [
          { name: "Node.js", level: 95 },
          { name: "Microservices", level: 90 },
          { name: "API Design", level: 92 },
          { name: "System Architecture", level: 88 }
        ]
      },
      {
        category: "Frontend Development",
        level: "Advanced",
        skills: [
          { name: "React", level: 88 },
          { name: "TypeScript", level: 85 },
          { name: "Performance", level: 82 },
          { name: "UX/UI", level: 78 }
        ]
      },
      {
        category: "DevOps & Infrastructure",
        level: "Advanced",
        skills: [
          { name: "Docker", level: 90 },
          { name: "Kubernetes", level: 70 },
          { name: "AWS/GCP", level: 80 },
          { name: "CI/CD", level: 70 }
        ]
      },
      {
        category: "Data & Databases",
        level: "Advanced",
        skills: [
          { name: "MySql", level: 90 },
          { name: "PostgreSQL", level: 70 },
          { name: "MongoDB", level: 78 },
          { name: "Message Queues", level: 80 }
        ]
      }
    ],
    stats: {
      title1: "Modern Stack",
      subTitle1: "Current technologies",
      title2: "Continuous Development",
      subTitle2: "Learning new tools",
      title3: "Full Cycle",
      subTitle3: "From idea to production",
    }
  },
  contacts: {
    title: "CONTACTS",
    title1: "READY FOR COLLABORATION",
    title2: "Get in",
    title3: "touch",
    title4: "Let's discuss your project and find the best solution",
    footerTitle1: "Quick Response",
    footerSubTitle1: "Within 15 minutes",
    footerTitle2: "Confidential",
    footerSubTitle2: "NDA if needed",
    footerTitle3: "Professional",
    footerSubTitle3: `${getExperienceYears()} years of experience`,
    footerTitle: "Ready for new challenges",
    footer: `© MICHAEL Okhtov ${new Date().getFullYear()} • Fullstack Developer`,
    items: [
      {
        platform: "Telegram",
        label: "@dev_okmic",
        url: "https://t.me/dev_okmic",
        icon: "Telegram",
        status: "Online",
        description: 'Instant communication for quick questions',
      },
      {
        platform: "WhatsApp",
        label: "+7 918 466 5096",
        url: "https://wa.me/79184665096",
        icon: "WhatsApp",
        status: "Available",
        description: 'Calls and messages anytime',
      },
      {
        platform: "Email",
        label: "okmic.dev@gmail.com",
        url: "mailto:okmic.dev@gmail.com",
        icon: "Email",
        description: 'Detailed project discussions',
        status: "Quick Response"
      },
      {
        platform: "GitHub",
        label: "github.com/okmic",
        url: "https://github.com/okmic",
        icon: "GitHub",
        status: "Active",
        description: 'Source code and projects',
      }
    ]
  }
}