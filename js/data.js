const DATA = {
  projects: [
    {
      title: "SpendSense",
      description: "SpendSense is an MLOps platform that extends Firefly III with automated transaction categorization and spending trend/anomaly detection, covering the full lifecycle from data ingestion through training, canary-gated serving, and continuous feedback-driven retraining on Kubernetes.",
      tags: ["MLOPs"],
      github: "https://github.com/more-piyush/SpendSense",
      featured: true
    },
    {
      title: "Audio Scene State Observer",
      description: "A real-time system that listens to the acoustic environment, classifies it into one of 10 urban scene categories using a trained GMM + HMM pipeline, and automatically applies a scene-appropriate IIR filter to suppress background noise and enhance speech intelligibility.",
      tags: ["ML", "Signal Processing"],
      github: "https://github.com/more-piyush/audio-scene-observer",
      featured: true
    },

    {
      title: "STAMP-RI",
      description: "A deep learning pipeline for Diabetic Retinopathy (DR) grading that addresses CNN texture bias through multi-stage texture manipulation, contrastive learning, and online negative mining. The system learns shape-invariant retinal image representations that generalize across clinical sites and imaging conditions.",
      tags: ["ML"],
      github: "https://github.com/more-piyush/STAMP-RI",
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
      description: "Personal Portfolio Website",
      tags: ["Web"],
      github: "https://github.com/more-piyush/more-piyush.github.io",
      live: "https://more-piyush.github.io",
      featured: true
    },

    
  ],

  blogPosts: [
    {
      slug: "zero-shot-task-transfer",
      title: "Zero-Shot Task Transfer",
      date: "2026-09-03",
      excerpt: "Notes on TTNet — a meta-learning algorithm that regresses model parameters for zero-shot tasks with no ground truth, by learning from the parameters of known tasks and the correlation between them.",
      tags: ["AI/ML", "Meta-Learning", "Research"],
      category: "Technical"
    },
    {
      slug: "deep-omni-supervised-learning-rib-fracture-detection",
      title: "Deep Omni-Supervised Learning for Rib Fracture Detection",
      date: "2026-09-03",
      excerpt: "Notes on ORF-Netv2 — an omni-supervised object detection network that unifies fully-labeled, weakly-labeled, and unlabeled data for rib fracture detection, using a co-training based dynamic label assignment strategy.",
      tags: ["AI/ML", "Medical Imaging", "Research"],
      category: "Technical"
    },
    {
      slug: "llms-for-asr-systems",
      title: "LLMs for ASR Systems",
      date: "2026-09-03",
      excerpt: "Notes on three papers exploring how Large Language Models can be integrated into Automatic Speech Recognition systems — from in-context error correction to prompting LLMs with audio embeddings and noise-robust generative error correction.",
      tags: ["AI/ML", "ASR", "Research"],
      category: "Technical"
    },
    {
      slug: "notes-on-evolutionary-psychology",
      title: "Notes on Evolutionary Psychology",
      date: "2026-08-28",
      excerpt: "Notes on the four key questions that organize evolutionary psychology — and how the field ties together findings from across the sciences of the mind.",
      tags: ["Psychology", "Notes"],
      category: "Non-Technical"
    },
    {
      slug: "knowledge-execution-loop",
      title: "The Knowledge–Execution Loop",
      date: "2026-08-27",
      excerpt: "Knowledge only becomes valuable when it turns into execution — on putting your work out, building ordinary habits over an extraordinary number of times, and engineering your luck.",
      tags: ["Growth", "Reflection"],
      category: "Non-Technical"
    },
    {
      slug: "explainable-ai-xai-what-why-how",
      title: "Explainable AI (XAI): What It Is, Why It Matters, and How It Works",
      date: "2026-05-29",
      excerpt: "A deep dive into Explainable AI — the concepts, taxonomy, and challenges behind making AI models transparent and trustworthy.",
      tags: ["AI/ML", "Research"],
      category: "Technical"
    },
    {
      slug: "true-leadership",
      title: "True Leadership",
      date: "2026-08-07",
      excerpt: "On trust and accountability — the four things real leaders do: share the credit and absorb the pressure.",
      tags: ["Leadership", "Reflection"],
      category: "Non-Technical"
    },
    {
      slug: "strategy-vs-tactics",
      title: "Strategy vs. Tactics",
      date: "2026-08-03",
      excerpt: "On the difference between strategy and tactics — and why you need both to actually reach your goals.",
      tags: ["Strategy", "Reflection"],
      category: "Non-Technical"
    },
    {
      slug: "silence-has-a-voice",
      title: "Silence Has a Voice",
      date: "2026-08-03",
      excerpt: "A poem on solitude, stillness, and the quiet peace of self-reflection.",
      tags: ["Poetry"],
      category: "Creative Writing"
    },
    {
      slug: "life-is-strange",
      title: "Life is Strange!",
      date: "2026-07-03",
      excerpt: "A poem on pursuit, presence, and the quiet marks that define us.",
      tags: ["Poetry"],
      category: "Creative Writing"
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
                    "<li>Conducted advanced research in Aerial LiDAR Point Clouds, under Prof. Debra Laefer, NYU CUSP and Prof. Kevin Mcilhany, USNA.</li>" +
                    "<li>Engineered an end-to-end LiDAR point-cloud processing pipeline, handling 1M+ points via multi-scale spacial partitioning, sparse block-adjacency graph, and reordering for efficient computation at scale.</li>" +
                    "<li>Designed an unsupervised geometric analysis layer applying graph signal processing for object segmentation, edge detection without labelled data.</li>" +
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
      description: "<ul>" +
                   "<li>Coursework:</li>" +
                   "<li>Fall 2025: Machine Learning, Real-Time Embedded System, Digital Signal Processing</li>"+
                   "<li>Spring 2026: Machine Learning Operations, Digital Signal Processing Laboratory, Probability and Stochastic Processes</li>" +
                   "</ul>"
    },

    {
      title: "Bachelor of Engineering, Electronics and Telecommunication" +
             "<br>Honors in Artificial Intelligence and Machine Learning</br>",
      company: "SCTR's Pune Institute of Compute Technology" + "</ul>",
      date: "2021 — 2025",
      description: ""
    }
  ]
};

