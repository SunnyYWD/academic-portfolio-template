// Fictional sample content. Replace both language blocks with your own details.
// Empty URLs hide their links; empty arrays hide their sections.
export const site = {
  defaultLanguage: "en",
  avatar: `${import.meta.env.BASE_URL}avatar.svg`,
  github: "",
  email: ""
};

export const content = {
  en: {
    name: "Your Name",
    role: "Researcher & Developer",
    institution: "Your Institution",
    location: "Your City",
    language: "中文",
    navigation: {
      about: "About",
      publications: "Publications",
      news: "News",
      experience: "Experience",
      projects: "Projects"
    },
    labels: {
      education: "Education",
      github: "GitHub",
      paper: "Paper",
      code: "Code",
      details: "Details",
      contact: "Contact"
    },
    about: [
      "Write a short introduction to your work, interests, and current position. Keep it specific enough for visitors to understand what you do.",
      "Use this space to explain the questions that motivate your research or the kinds of products you build. Replace every example on this page before publishing your own site."
    ],
    education: [
      { period: "20XX — Present", degree: "Graduate degree in Your Field", school: "Your University · Your Department" },
      { period: "20XX — 20XX", degree: "Undergraduate degree in Your Field", school: "Another University · Your Department" }
    ],
    publications: [
      {
        status: "Example",
        title: "A Clear and Descriptive Example Paper Title",
        authorName: "Your Name",
        coauthors: ", Collaborator One, Collaborator Two",
        venue: "Example venue · 20XX",
        summary: "Summarize the problem, your contribution, and the result in two or three sentences. This entry is fictional sample content.",
        metrics: [{ value: "01", label: "Example result" }, { value: "02", label: "Another result" }],
        paperUrl: "",
        codeUrl: ""
      }
    ],
    news: [
      { date: "20XX.06", text: "Add a recent publication, award, release, or career update here." },
      { date: "20XX.01", text: "Keep this list short and current, or remove entries you do not need." }
    ],
    experience: [
      { period: "20XX — 20XX", title: "Research Intern", organization: "Example Organization", details: "Research · Engineering" },
      { period: "20XX — 20XX", title: "Software Developer", organization: "Another Organization", details: "Product · Development" }
    ],
    projects: [
      {
        title: "Project Alpha",
        category: "Research · Open Source",
        summary: "Describe what the project does, who it helps, and what you contributed.",
        tags: ["Research", "React", "Open Source"],
        url: ""
      },
      {
        title: "Project Beta",
        category: "Product · Design",
        summary: "Highlight a second project with a concise, outcome-focused description.",
        tags: ["Product", "Design", "Web"],
        url: ""
      }
    ],
    contact: "Add your email and GitHub URL in src/content.js so visitors can reach you.",
    footer: "© Your Name. All rights reserved."
  },
  zh: {
    name: "你的名字",
    role: "研究者 · 开发者",
    institution: "你的学校或机构",
    location: "你的城市",
    language: "EN",
    navigation: {
      about: "关于",
      publications: "论文",
      news: "动态",
      experience: "经历",
      projects: "项目"
    },
    labels: {
      education: "教育经历",
      github: "GitHub",
      paper: "论文",
      code: "代码",
      details: "查看详情",
      contact: "联系"
    },
    about: [
      "在这里介绍你的研究方向、目前的身份和关注的问题。建议用具体语言说明你正在做什么。",
      "这一段可以补充你感兴趣的研究问题或产品方向。发布个人主页之前，请替换页面上的所有示例内容。"
    ],
    education: [
      { period: "20XX — 至今", degree: "你的专业 · 研究生", school: "你的大学｜你的学院" },
      { period: "20XX — 20XX", degree: "你的专业 · 本科", school: "另一所大学｜你的学院" }
    ],
    publications: [
      {
        status: "示例",
        title: "一篇示例论文的清晰标题",
        authorName: "你的名字",
        coauthors: "、合作者甲、合作者乙",
        venue: "示例会议 · 20XX",
        summary: "用两三句话说明研究问题、你的贡献和结果。这是一条虚构的示例内容。",
        metrics: [{ value: "01", label: "示例结果" }, { value: "02", label: "其他结果" }],
        paperUrl: "",
        codeUrl: ""
      }
    ],
    news: [
      { date: "20XX.06", text: "在这里添加论文、获奖、项目发布或职业动态。" },
      { date: "20XX.01", text: "保持动态简短且及时；不需要时可以删除整个列表。" }
    ],
    experience: [
      { period: "20XX — 20XX", title: "研究实习生", organization: "示例机构", details: "研究 · 工程" },
      { period: "20XX — 20XX", title: "软件开发者", organization: "另一家机构", details: "产品 · 开发" }
    ],
    projects: [
      {
        title: "项目甲",
        category: "研究 · 开源",
        summary: "说明项目解决什么问题、面向谁，以及你负责的部分。",
        tags: ["研究", "React", "开源"],
        url: ""
      },
      {
        title: "项目乙",
        category: "产品 · 设计",
        summary: "用简洁的文字介绍另一个项目及其成果。",
        tags: ["产品", "设计", "网页"],
        url: ""
      }
    ],
    contact: "在 src/content.js 中填写邮箱和 GitHub 地址，方便访客联系你。",
    footer: "© 你的名字。保留所有权利。"
  }
};
