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
