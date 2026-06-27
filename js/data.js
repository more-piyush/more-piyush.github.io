const DATA = {
  projects: [
    {
      title: "Audio Scene State Observer",
      description: "A real-time system that listens to the acoustic environment, classifies it into one of 10 urban scene categories using a trained GMM + HMM pipeline, and automatically applies a scene-appropriate IIR filter to suppress background noise and enhance speech intelligibility.",
      tags: ["ML", "Signal Processing"],
      github: "https://github.com/more-piyush/audio-scene-observer",
      featured: true
    },

    {
      title: "PGM State Observer",
      description: "A probabilistic state observer for web-automation AI agents, with a full reinforcement-learning benchmark that quantifies the value of belief-based state estimation over raw observation signals. The observer sits between a browser (Playwright) and a decision-making agent, maintaining a Dynamic Bayesian Network (DBN) belief over the latent state of a web page and gating actions until the page is confidently 'READY'.",
      tags: ["ML", "RL", "Agentic-AI"],
      github: "https://github.com/more-piyush/State-Observer",
      featured: true
    },

    {
      title: "Portfolio Website",
      description: "A minimalist personal portfolio built with plain HTML, CSS, and JavaScript. No frameworks, no build step — just clean, fast static pages.",
      tags: ["Web"],
      github: "https://github.com/more-piyush/more-piyush.github.io",
      live: "https://more-piyush.github.io",
      featured: true
    },

    
  ],

  blogPosts: [
    {
      slug: "explainable-ai-xai-what-why-how",
      title: "Explainable AI (XAI): What It Is, Why It Matters, and How It Works",
      date: "2026-05-29",
      excerpt: "A deep dive into Explainable AI — the concepts, taxonomy, and challenges behind making AI models transparent and trustworthy.",
      tags: ["AI/ML", "Research"]
    }
  ],

  skills: [
    {
      category: "Languages",
      items: ["Python", "Matlab"]
    },
    {
      category: "Frameworks",
      items: ["Data Warehousing", "PySpark", "OpenCV" , "Tensorflow" , "PyTorch" , "Keras" , "NLTK" ]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Linux", "Docker"]
    },
    {
      category: "Libraries",
      items: [" Numpy", "Pandas", "Matplotlib", "Seaborn" , "Scikit Learn"]
    }
  ],

  experience: [
    {
      title: "Research Intern",
      company: "IIT Delhi",
      date: "Jan 2026 — Present",
      description: "'Building internal tools and working on the frontend with React. Contributing to code reviews and writing unit tests.'"
    },
    {
      title: "Research Intern",
      company: "Monash University",
      date: "Jun 2025 — Dec 2025",
      description: "Designed and developed websites for local businesses. Focused on responsive design and performance optimization."
    }
  ],

  education: [
    {
      title: "Masters in Electrical Engineering",
      company: "New York University",
      date: "2025 - 2027",
      description: ""
    },

    {
      title: "Bachelor of Engineering, Electronics and Telecommunication (with Honors in AI ML)",
      company: "SCTR's Pune Institute of Compute Technology",
      date: "2021 — 2025",
      description: ""
    }
  ]
};
