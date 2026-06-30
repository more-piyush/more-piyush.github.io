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
      company: "New York University",
      date: "Jun 2026 - Present",
      description:
                    "<ul>" +
                    "<li>Leading research on making applications with LIDAR Point Clouds computation efficient under Prof. Debra Laefer and Prof. Kevin Mcilhany.</li>" +
                    "</ul>"
    },
    {
      title: "Research Intern",
      company: "Monash University",
      date: "Jul 2024 - Sept 2025",
      description:
                    "<ul>" +
                    "<li>Leading research on incremental learning and continual learning under Prof. Arghya Pal, developing models for efficient compression and recurrence generation in time series and sequential data.</li>" +
                    "<li>Designing learning frameworks to improve local performance and mitigate forgetting in sequential data processing. </li>" +
                    "<li>Contributing to the development of codebook-based approaches for quick searches and efficient data compression, optimizing performance in input-dependent tasks.</li>" +
                    "</ul>"
    },
    {
      title: "Research Intern",
      company: "IIT Patna",
      date: "May 2024 - July 2025",
      description:
                    "<ul>" +
                    "<li>Collaborating on advanced research in Self-Supervised Contrastive Learning under Prof. Maheshkumar Kolekar to enhance representation learning for deep learning models.</li>" +
                    "<li>Designing models to address shape bias by manipulating low-level texture representation while preserving semantic content for improved generalization. </li>" +
                    "<li>Implemented and optimized these projects on Linux-based High-Performance Computing (HPC) clusters, leveraging parallelization and distributed training for large-scale experimentation. </li>" +
                    "</ul>"
    },
    {
      title: "Research Intern",
      company: "IIT Delhi",
      date: "Feb 2025 - May 2025",
      description:
                    "<ul>" +
                    "<li>Conducted advanced research in Computer Vision, focusing on Federated Semi-Supervised Learning, Multimodal Self Supervised Learning, and the integration of Robotics with Gaussian Splatting. </li>" +
                    "<li>Analyzed model generalization under out-of-distribution conditions (COCO-O, MAUD) and evaluated robotic manipulation performance with noisy, incomplete data.  </li>" +
                    "<li>Enhancing model performance for better transferability by focusing on semantic consistency and optimizing learning outcomes in complex deep learning systems. </li>" +
                    "</ul>"
    },
  ],

  education: [
    {
      title: "Masters in Electrical Engineering",
      company: "New York University",
      date: "2025 - 2027",
      description: "Coursework:" +
                   "Fall 2025: Machine Learning, Real-Time Embedded System, Digital Signal Processing"+
                   "Spring 2026: Machine Learning Operations, Digital Signal Processing Laboratory, Probability and Stochastic Processes"
    },

    {
      title: "Bachelor of Engineering, Electronics and Telecommunication (with Honors in AI ML)",
      company: "SCTR's Pune Institute of Compute Technology",
      date: "2021 — 2025",
      description: ""
    }
  ]
};
