const projects = [
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description:
      "Optimized performance using lazy loading and TanStack Query caching",
    tech: ["React", "Router", "TanStack Query", "Context API", "Tailwind CSS"],
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

  {
    id: "job-portal",
    title: "Job Portal Dashboard",
    description:
      "Built a modern job portal with authentication, protected routes, filtering, and optimized frontend state management.",

    tech: [
      "React.js",
      "React Router DOM",
      "TanStack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Context API",
      "MockAPI",
    ],

    liveUrl: "https://job-dashboard-eight-puce.vercel.app/",

    githubUrl: "https://github.com/abhi11626",

    caseStudy: {
      problem:
        "The application required authentication-based job applications, dynamic job listings, filtering, and protected user flows. Managing modal behavior, authentication state, and scalable UI components became challenging as features increased.",

      solution:
        "Implemented Context API authentication with protected routes and conditional UI rendering. Added authentication checks before opening the apply modal to improve user experience and security flow. Built reusable UI components using shadcn/ui and Tailwind CSS for consistency and scalability.",

      architecture:
        "Designed the application using a component-driven architecture with reusable layouts, protected route wrappers, modular pages, and centralized authentication state management. Integrated TanStack Query for scalable server-state handling and MockAPI for simulating backend APIs during frontend development.",

      impact:
        "Improved overall application scalability, cleaner authentication flow, and better user experience. The modular architecture allows easy feature expansion such as saved jobs, recruiter dashboards, and real backend integration in the future.",
    },
  },

  {
    id: "taskflow-dashboard",

    title: "TaskFlow - Task Management Dashboard",

    description:
      "Modern Task Management Dashboard built with React 19, TypeScript, Tailwind CSS, TanStack Query, and AI-assisted development.",

    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Axios",
      "Tailwind CSS v4",
      "React Router",
      "Local Storage",
      "React Hooks",
    ],

    liveUrl: "https://react-task-dashboard-rnnl.vercel.app/",

    githubUrl: "https://github.com/abhi11626/React-Task-Dashboard",

    caseStudy: {
      problem:
        "Task management applications often become difficult to maintain as features such as search, filtering, pagination, bulk actions, and state synchronization grow in complexity. The challenge was to build a scalable dashboard that delivers a smooth user experience while keeping the codebase maintainable and extensible.",

      solution:
        "Developed TaskFlow using a feature-driven architecture with React 19 and TypeScript. Implemented task CRUD operations, debounced search, advanced filtering, sorting, client-side pagination, bulk actions, dark mode, and local storage persistence. Leveraged TanStack Query with optimistic updates to provide instant UI feedback and improve perceived performance.",

      architecture:
        "Designed the application around feature encapsulation, separating tasks into dedicated modules containing pages, components, hooks, APIs, and types. Integrated TanStack Query for server-state management, Axios for API communication, reusable custom hooks for debouncing and persistence, and route-level code splitting using React.lazy. Applied TypeScript strict mode and accessibility best practices to improve reliability and maintainability.",

      impact:
        "Delivered a highly responsive and scalable dashboard with faster task discovery through debounced search and filtering, improved user experience through optimistic updates, and better long-term maintainability through modular architecture. The foundation supports future enhancements such as real backend integration, team collaboration, server-side pagination, and automated testing.",
    },
  },

  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Game",
    description:
      "Interactive 2-player game with win detection and reset functionality",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://tic-tac-toe-iota-nine-37.vercel.app/",
    githubUrl: "https://github.com/abhi11626/Tic-Tac-Toe-",
    caseStudy: {
      problem:
        "Building game logic for detecting win conditions, handling player turns, and managing game state in a clean and reusable way was challenging in a component-based structure.",

      solution:
        "Implemented a structured state management approach to track game board state, player turns, and game status. Created reusable functions for move handling and win condition checks.",

      architecture:
        "Built using a component-based React architecture with centralized game state logic. Separated UI rendering from game logic for better readability and maintainability.",

      impact:
        "Delivered a fully interactive browser-based game with smooth state transitions, accurate win detection, and a clean user experience.",
    },
  },

  {
    id: "stock-screener",
    title: "Stock Screener",
    description:
      "Real-time stock filtering with debounced search and optimized API handling",
    tech: ["React", "Next.js", "API Integration", "JavaScript", "CSS"],
    liveUrl: "https://stock-screener-beta-cyan.vercel.app/",
    githubUrl: "https://www.github.com/abhi11626",
    caseStudy: {
      problem:
        "Frequent API calls triggered by user input (search and filters) caused unnecessary network requests and UI lag. Managing dynamic stock data with multiple filters also increased complexity in state handling and rendering performance.",

      solution:
        "Implemented a debouncing mechanism for search and filter inputs to limit API calls and prevent excessive re-renders. Structured state updates efficiently to ensure smooth UI performance while handling real-time stock data.",

      architecture:
        "Built with a modular React architecture separating concerns between data fetching, filtering logic, and UI. Introduced debounced input handling and reusable components for filters and stock display, ensuring scalability and maintainability.",

      impact:
        "Reduced unnecessary API calls and improved application responsiveness. Achieved smoother user interactions with optimized rendering, making the stock screening experience faster and more efficient.",
    },
  },
];

export default projects;
