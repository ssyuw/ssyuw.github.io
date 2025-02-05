module.exports = {
  // pathPrefix: "/gatsby-theme-academic",
  siteUrl: 'https://ssyuw.github.io/',
  title: "Stephanie Wang",
  description: "Personal Website of Stephanie Wang",
  author: "Stephanie Wang",
  // authorAlternative: "Stephanie Wang",
  introduction: [
    "Hi! I'm Stephanie, a Junior at the University of California, San Diego, majoring in Data Science with minors in Mathematics and Cognitive Science. My academic journey combines analytical rigor, mathematical precision, and a deep curiosity about human cognition and behavior.",
    "I'm passionate about uncovering insights from data, solving complex problems, and leveraging technology to make meaningful impacts. My interests lie at the intersection of data science and cognitive science, particularly in understanding how data-driven solutions can improve decision-making and user experiences.",
    "When I'm not immersed in my studies, I enjoy traveling and reading, which inspire me to explore new perspectives and broaden my understanding of the world. I also love tackling real-world data challenges, experimenting with new tools and algorithms, and collaborating on innovative projects that make a meaningful impact. Feel free to explore my portfolio to learn more about my work, or reach out if you'd like to connect!",
  ],
  avatar: "/avatar.png",
  professions: [
    {
      name: "UCSD - Data Science Student", 
      url: "https://datascience.ucsd.edu/"
    },
    // {
    //   name: "TRAIS",
    //   url: "https://github.com/TRAIS-Lab"
    // },
    // {
    //   name: "SJTU-XAI",
    //   url: "https://sjtu-xai-lab.github.io/"
    // },
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  // birthday: "xxxx",
  location: 'California',
  email: 'ssyuw0418@gmail.com',
  postsForArchivePage: 3,
  defaultLanguage: "en",
  disqusScript:
    process.env.DISQUS_SCRIPT || "https://tc-imba.disqus.com/embed.js",
  pages: {
    home: "/",
    posts: "posts",
    contact: "contact",
    resume: "resume",
    tags: "tags",
    research: "research",
    project: "project",
    contact: "contact",
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/ssyuw',
      icon: ['fab', 'github'],
    }, {
      url: 'https://www.linkedin.com/in/stephanie-wang-2594b9259/',
      icon: ['fab', 'linkedin'],
    },
    {
      name: 'email',
      icon: ['fas', 'envelope'],
      url: 'mailto:ssyuw0418@gmail.com',
    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  wakatime: {
    username: "tcimba",
    activity: "7add4047-08f9-4da8-b649-aa114503678f",
    language: "460a84ab-722a-4b80-b896-cabaa13ad7eb",
    editor: "d851639a-28d8-4884-949f-d338a858f7e9",
    os: "caf7d0d1-8fd2-4595-a991-363c8583fea9",
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    "https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451",
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "G-ZK3P43DY6M",
  education: [
    {
      date: 'Sept. 2022 -  (expect) Mar. 2026',
      icon: 'university',
      title: 'Bachelor of Science in Data Science',
      location: 'University of California, San Diego',
    },
  ],
  interests: [
    {
      name: 'Interest1',
      icon: ['fas', 'cubes'],
      title: 'Data-Centric AI, Model Optimization'
    }, {
      icon: 'layer-group',
      title: 'Interpretable AI & Explainability in ML',
    }, {
      icon: ['fab', 'linux'],
      // icon: 'linux',
      title: 'AI-Driven Design & Creativity',
    }
  ],
  experience: [
    {
      title: 'Chuling Information Technology Co., Ltd.',
      position: 'left',
      data: [
        {
          date: 'Jul. 2024 – Sept. 2024',
          title: 'Data Scientist Intern',
          description: 'Analyzed and cleaned internal sales data to improve data quality and insights. Developed predictive models using GBDT and time series analysis to forecast customer behavior. Built interactive dashboards with Python to visualize key business metrics and support data-driven decisions.',
        },
      ],
    },
    // {
    //   title: "Teaching & Tutoring",
    //   position: "right",
    //   data: [
    //     {
    //       date: "June 2024",
    //       title: " Group Tutor of Advanced Mathematics",
    //       location: "Shanghai Jiao Tong University, China",
    //     },
    //     {
    //       date: "Dec 2023",
    //       title:
    //         "Personal Tutor of CS2612, Programming Languages and Compilers ",
    //       location: "Shanghai Jiao Tong University, China",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteer",
    //   position: "left",
    //   data: [
    //     {
    //       date: "2022 ~ 2024",
    //       title: "Volunteer of Shanghai Marathon",
    //       location: "Shanghai, China",
    //     },
    //   ],
    // },
  ],
  awards: [
    {
      date: "2024",
      title: "National Scholarship (Top 0.2% nationwide)",
    },
    {
      date: "2023",
      title: "Rui Yuan Hong Shan Scholarship (Top 2%, SJTU)",
    },
    {
      date: "2022",
      title: "Shao Qiu Scholarship (Top 4%, SJTU)",
    },
    {
      date: "2022",
      title: "Meritorious Winner of MCM/ICM",
    },
  ],
  tagColors: [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ],
  tags: [
    {
      id: "javascript",
      name: "javascript",
      description:
        "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
      color: "#f0da50",
    },
    {
      id: "nodejs",
      name: "Node.js",
      description:
        "Node.js is a tool for executing JavaScript in a variety of environments.",
      color: "#90c53f",
    },
    {
      id: "rxjs",
      name: "RxJS",
      description:
        "RxJS is a library for reactive programming using Observables, for asynchronous operations.",
      color: "#eb428e",
    },
    {
      id: "typescript",
      name: "typescript",
      description:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      color: "#257acc",
    },
    {
      id: "reactjs",
      name: "reactjs",
      description:
        "React is an open source JavaScript library used for designing user interfaces.",
      color: "#61dbfa",
    },
    {
      id: "gatsby",
      name: "Gatsby.js",
      description:
        "A framework built over ReactJS to generate static page web application.  ",
      color: "#6f309f",
    },
    {
      id: "html",
      name: "HTML",
      description:
        "A markup language that powers the web. All websites use HTML for structuring the content.",
      color: "#dd3431",
    },
    {
      id: "css",
      name: "css",
      description:
        "CSS is used to style the HTML element and to give a very fancy look for the web application.",
      color: "#43ace0",
    },
    {
      id: "python",
      name: "python",
      description:
        "A general purpose programming language that is widely used for developing various applications.",
      color: "#f9c646",
    },
  ],
};
