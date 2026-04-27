const projects = [
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description:
      "Optimized performance using lazy loading and TanStack Query caching",
    tech: ["React", "Router", "TanStack Query"],
    liveUrl: "https://e-commerce-frontend-one-lemon.vercel.app",
    githubUrl: "https://www.github.com/abhi11626",
    caseStudy: {
      problem:
        "Managing complex UI state such as cart, product listings, and filters led to tightly coupled components and reduced scalability as the application grew.",

      solution:
        "Designed a modular architecture with reusable components and structured state handling. Decoupled UI from business logic to improve maintainability and scalability.",

      architecture:
        "Implemented a component-driven architecture with clear separation of concerns between UI, state, and data. Used dynamic routing and reusable components for scalable development.",

      impact:
        "Improved code maintainability and scalability, enabling easier feature expansion and better developer experience.",
    },
  },
  {
    id: "food-court",
    title: "Food Court",
    description:
      "Improved performance by 40% using memoization and virtualization",
    tech: ["React", "Hooks"],
    liveUrl: "https://food-order-project-06-7uwd.vercel.app/",
    githubUrl: "https://www.github.com/abhi11626",
    caseStudy: {
      problem:
        "Rendering large restaurant menus caused performance bottlenecks, leading to slow UI updates and poor user experience. Frequent cart updates also triggered unnecessary re-renders.",

      solution:
        "Implemented memoization techniques and optimized component rendering to minimize unnecessary updates. Structured the application using reusable components and efficient state handling for cart interactions.",

      architecture:
        "Built using a modular component-based architecture with React Hooks. State was managed efficiently for cart and UI updates, ensuring predictable rendering and scalability for large datasets.",

      impact:
        "Significantly improved rendering performance and reduced unnecessary re-renders, resulting in smoother user interactions and better responsiveness across the application.",
    },
  },
];

export default projects;
