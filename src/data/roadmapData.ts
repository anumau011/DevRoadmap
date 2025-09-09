// Data structures for DSA and Development roadmaps

export interface RoadmapStep {
  topic: string;
  duration: string;
  resourceId: string;
}

export interface RoadmapYear {
  year: string;
  title: string;
  steps: RoadmapStep[];
}

export const cppdsa: RoadmapYear[] = [
  {
    year: "Step 1",
    title: "C++ Basics",
    steps: [
      {
        topic: "C++ Syntax, Variables, Data Types",
        duration: "2 Weeks",
        resourceId: "cppbasics",
      },
      {
        topic: "Control Structures (Loops, Conditionals)",
        duration: "1 Week",
        resourceId: "cppbasics",
      },
      {
        topic: "Functions & Pointers",
        duration: "2 Weeks",
        resourceId: "cppbasics",
      },
      {
        topic: "Arrays & Strings in C++",
        duration: "2 Weeks",
        resourceId: "cppbasics",
      },
      {
        topic: "Solve 50 Beginner Problems",
        duration: "Ongoing",
        resourceId: "coredsa",
      },
    ],
  },
  {
    year: "Step 2",
    title: "C++ STL & Core DSA",
    steps: [
      {
        topic: "STL Basics (Vector, Pair, Set, Map, Stack, Queue)",
        duration: "3 Weeks",
        resourceId: "cpp-stl",
      },
      {
        topic: "Linked List (Singly, Doubly, Circular)",
        duration: "3 Weeks",
        resourceId: "coredsa",
      },
      {
        topic: "Recursion & Backtracking",
        duration: "3 Weeks",
        resourceId: "coredsa",
      },
      {
        topic: "Trees & Binary Search Trees",
        duration: "4 Weeks",
        resourceId: "coredsa",
      },
      {
        topic: "Solve 200+ Problems on Arrays, Strings, Linked List",
        duration: "Ongoing",
        resourceId: "coredsa",
      },
    ],
  },
  {
    year: "Step 3",
    title: "Advanced DSA in C++",
    steps: [
      {
        topic: "Heap, Priority Queue, Hashing",
        duration: "3 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Graphs & Graph Algorithms (BFS, DFS, Dijkstra, MST)",
        duration: "5 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Dynamic Programming (Knapsack, LIS, DP on Trees)",
        duration: "6 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Advanced Trees (Segment Tree, Fenwick Tree, Trie)",
        duration: "4 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Solve 500+ Problems (LeetCode/Codeforces)",
        duration: "Ongoing",
        resourceId: "advanced-dsa",
      },
    ],
  },
  {
    year: "Step 4",
    title: "Mastery & Competitive Programming",
    steps: [
      {
        topic: "Number Theory, Modular Arithmetic, Bit Manipulation",
        duration: "4 Weeks",
        resourceId: "competitive-programming",
      },
      {
        topic: "Advanced Graphs (Flows, Bridges, SCC, DSU)",
        duration: "4 Weeks",
        resourceId: "competitive-programming",
      },
      {
        topic:
          "Competitive Programming Practice (Codeforces, AtCoder, CodeChef)",
        duration: "Ongoing",
        resourceId: "competitive-programming",
      },
      {
        topic: "Mock Interviews & System Design Basics",
        duration: "Ongoing",
        resourceId: "interview-prep",
      },
      {
        topic: "Contribute to Open Source / Teach DSA in C++",
        duration: "Ongoing",
        resourceId: "open-source",
      },
    ],
  },
];

export const javadsa: RoadmapYear[] = [
  {
    year: "Step 1",
    title: "Java Basics",
    steps: [
      {
        topic: "Java Syntax, Variables, Data Types",
        duration: "2 Weeks",
        resourceId: "java-basics",
      },
      {
        topic: "Control Structures (Loops, Conditionals)",
        duration: "1 Week",
        resourceId: "java-basics",
      },
      {
        topic: "Methods, OOP (Classes, Objects, Inheritance, Polymorphism)",
        duration: "3 Weeks",
        resourceId: "java-basics",
      },
      {
        topic: "Arrays & Strings in Java",
        duration: "2 Weeks",
        resourceId: "java-basics",
      },
      {
        topic: "Solve 50 Beginner Problems",
        duration: "Ongoing",
        resourceId: "core-dsa",
      },
    ],
  },
  {
    year: "Step 2",
    title: "Java Collections & Core DSA",
    steps: [
      {
        topic:
          "Java Collections Framework (ArrayList, LinkedList, HashSet, HashMap, Stack, Queue)",
        duration: "3 Weeks",
        resourceId: "java-collections",
      },
      {
        topic: "Linked List (Singly, Doubly, Circular)",
        duration: "3 Weeks",
        resourceId: "core-dsa",
      },
      {
        topic: "Recursion & Backtracking",
        duration: "3 Weeks",
        resourceId: "core-dsa",
      },
      {
        topic: "Trees & Binary Search Trees",
        duration: "4 Weeks",
        resourceId: "core-dsa",
      },
      {
        topic: "Solve 200+ Problems on Arrays, Strings, Linked List",
        duration: "Ongoing",
        resourceId: "core-dsa",
      },
    ],
  },
  {
    year: "Step 3",
    title: "Advanced DSA in Java",
    steps: [
      {
        topic: "Heap, PriorityQueue, HashMap Advanced Usage",
        duration: "3 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Graphs & Graph Algorithms (BFS, DFS, Dijkstra, Kruskal, Prim)",
        duration: "5 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Dynamic Programming (Knapsack, LIS, DP on Trees)",
        duration: "6 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Advanced Trees (Segment Tree, Fenwick Tree, Trie)",
        duration: "4 Weeks",
        resourceId: "advanced-dsa",
      },
      {
        topic: "Solve 500+ Problems (LeetCode, GFG, InterviewBit)",
        duration: "Ongoing",
        resourceId: "advanced-dsa",
      },
    ],
  },
  {
    year: "Step 4",
    title: "Mastery & Competitive Programming in Java",
    steps: [
      {
        topic: "Number Theory, Modular Arithmetic, Bit Manipulation",
        duration: "4 Weeks",
        resourceId: "competitive-programming",
      },
      {
        topic: "Advanced Graphs (Flows, Bridges, SCC, DSU)",
        duration: "4 Weeks",
        resourceId: "competitive-programming",
      },
      {
        topic:
          "Competitive Programming Practice (LeetCode, Codeforces, AtCoder)",
        duration: "Ongoing",
        resourceId: "competitive-programming",
      },
      {
        topic: "Mock Interviews & System Design Basics",
        duration: "Ongoing",
        resourceId: "interview-prep",
      },
      {
        topic: "Contribute to Open Source / Teach DSA in Java",
        duration: "Ongoing",
        resourceId: "open-source",
      },
    ],
  },
];

export const pythondsa: RoadmapYear[] = [
  {
    year: "Step 1",
    title: "Python Basics",
    steps: [
      {
        topic: "Learn Python",
        duration: "2 Weeks",
        resourceId: "python-basics",
      },
      { 
        topic: "Practice", 
        duration: "Ongoing", 
        resourceId: "core-dsa" 
      },
    ],
  },
  {
    year: "Step 2",
    title: "Core DSA",
    steps: [
      {
        topic: "OOPS(OBJECT ORIENTED PROGRAMMING)",
        duration: "2 Weeks",
        resourceId: "core-dsa-python-opps",
      },
      {
        topic: "Learn Data Structure",
        duration: "3 Weeks",
        resourceId: "core-dsa-python-ds",
      },
      {
        topic: "Solve Problems On Data Structure",
        duration: "Ongoing",
        resourceId: "core-dsa-python-pro",
      },
    ],
  },
  {
    year: "Step 3",
    title: "Problem Solving Using Data Structure",
    steps: [
      {
        topic: "Follow Stiver A2Z Sheet",
        duration: "20 Weeks",
        resourceId: "advanced-dsa-py1",
      },
      {
        topic: "Solve Striver Sheet",
        duration: "Ongoing",
        resourceId: "advanced-dsa-py2",
      },
    ],
  },
  {
    year: "Step 4",
    title: "Contest On Vairious Platform",
    steps: [
      {
        topic: "Leetcode",
        duration: "SUNDAY MORNIGN 8:00 AM",
        resourceId: "python-cp",
      },
      {
        topic: "CodeChef",
        duration: "Wednesday Evening 9:00 PM",
        resourceId: "python-cp",
      },
      {
        topic: "CodeForces",
        duration: "Randomly",
        resourceId: "python-cp",
      },
      {
        topic: "Hacker Rank",
        duration: "Randomly",
        resourceId: "python-cp",
      },
    ],
  },
];

// spring boot
export const springbootData: RoadmapYear[] = [
  {
    year: "Step 1",
    title: "Foundation",
    steps: [
      {
        topic: "Core Java (OOP, Collections, Exception Handling)",
        duration: "6 Weeks",
        resourceId: "java-basics",
      },
      {
        topic: "JDBC & Servlets/JSP Basics",
        duration: "3 Weeks",
        resourceId: "java-web",
      },
      {
        topic: "Git & GitHub for Version Control",
        duration: "2 Weeks",
        resourceId: "tools",
      },
    ],
  },
  {
    year: "Step 2",
    title: "Core Development",
    steps: [
      {
        topic: "Spring Core, Spring MVC",
        duration: "4 Weeks",
        resourceId: "spring-framework",
      },
      {
        topic: "Spring Boot Basics (REST APIs, Annotations)",
        duration: "5 Weeks",
        resourceId: "spring-boot",
      },
      {
        topic: "Databases with Spring Data JPA (MySQL, PostgreSQL)",
        duration: "4 Weeks",
        resourceId: "databases",
      },
      {
        topic: "Build a RESTful API Project",
        duration: "Ongoing",
        resourceId: "spring-projects",
      },
    ],
  },
  {
    year: "Step 3",
    title: "Advanced Development",
    steps: [
      {
        topic: "Spring Security (JWT, OAuth2)",
        duration: "4 Weeks",
        resourceId: "spring-security",
      },
      {
        topic: "Microservices with Spring Cloud",
        duration: "5 Weeks",
        resourceId: "system-design",
      },
      {
        topic: "Testing (JUnit, Mockito)",
        duration: "3 Weeks",
        resourceId: "testing",
      },
      {
        topic: "Build a Full-Stack Project (React + Spring Boot)",
        duration: "Ongoing",
        resourceId: "spring-projects",
      },
    ],
  },
  {
    year: "Step 4",
    title: "Professional Level",
    steps: [
      {
        topic: "DevOps (Docker, Kubernetes, CI/CD)",
        duration: "6 Weeks",
        resourceId: "devops",
      },
      {
        topic: "Scalability & Performance Tuning",
        duration: "4 Weeks",
        resourceId: "system-design",
      },
      {
        topic: "System Design & Architecture",
        duration: "5 Weeks",
        resourceId: "system-design",
      },
      {
        topic: "Contribute to Open Source / Lead Team Project",
        duration: "Ongoing",
        resourceId: "open-source",
      },
    ],
  },
];

// mern

export const mernData: RoadmapYear[] = [
  {
    year: "Step 1",
    title: "Foundation",
    steps: [
      {
        topic: "HTML, CSS, JavaScript (ES6+)",
        duration: "6 Weeks",
        resourceId: "frontend-basics",
      },
      {
        topic: "Git & GitHub for Version Control",
        duration: "2 Weeks",
        resourceId: "tools",
      },
      {
        topic: "Build a Portfolio Website",
        duration: "3 Weeks",
        resourceId: "frontend-projects",
      },
    ],
  },
  {
    year: "Step 2",
    title: "Core Development",
    steps: [
      {
        topic: "React Basics (Hooks, Components, Props)",
        duration: "5 Weeks",
        resourceId: "frontend-frameworks",
      },
      {
        topic: "Node.js & Express Fundamentals",
        duration: "5 Weeks",
        resourceId: "backend-frameworks",
      },
      {
        topic: "MongoDB + Mongoose",
        duration: "4 Weeks",
        resourceId: "databases",
      },
      {
        topic: "Build a Blog/To-Do MERN App",
        duration: "Ongoing",
        resourceId: "mern-projects",
      },
    ],
  },
  {
    year: "Step 3",
    title: "Advanced Development",
    steps: [
      {
        topic: "State Management (Redux, Context API)",
        duration: "4 Weeks",
        resourceId: "frontend-frameworks",
      },
      {
        topic: "REST APIs & GraphQL",
        duration: "5 Weeks",
        resourceId: "backend-frameworks",
      },
      {
        topic: "Authentication & Authorization (JWT, OAuth)",
        duration: "4 Weeks",
        resourceId: "auth",
      },
      {
        topic: "Build an E-commerce MERN App",
        duration: "Ongoing",
        resourceId: "mern-projects",
      },
    ],
  },
  {
    year: "Step 4",
    title: "Professional Level",
    steps: [
      {
        topic: "Testing (Jest, Mocha, Cypress)",
        duration: "4 Weeks",
        resourceId: "testing",
      },
      {
        topic: "DevOps (Docker, CI/CD, Cloud Hosting)",
        duration: "6 Weeks",
        resourceId: "devops",
      },
      {
        topic: "Microservices & Scalable Architecture",
        duration: "5 Weeks",
        resourceId: "system-design",
      },
      {
        topic: "Open Source & Hackathons",
        duration: "Ongoing",
        resourceId: "open-source",
      },
    ],
  },
];

//python

export const pythonData: RoadmapYear[] = [
  {
    year: "Step 1",
    title: "Foundation",
    steps: [
      {
        topic: "Python Basics (Syntax, Data Types, Functions)",
        duration: "6 Weeks",
        resourceId: "python-basics",
      },
      {
        topic: "Git & GitHub for Version Control",
        duration: "2 Weeks",
        resourceId: "tools",
      },
      {
        topic: "Build Mini Scripts (Calculator, File Automation)",
        duration: "3 Weeks",
        resourceId: "python-projects",
      },
    ],
  },
  {
    year: "Step 2",
    title: "Core Development",
    steps: [
      {
        topic: "Flask or Django Basics (Routing, Templates)",
        duration: "5 Weeks",
        resourceId: "python-backend",
      },
      {
        topic: "Databases (SQLite, PostgreSQL, SQLAlchemy/ORM)",
        duration: "4 Weeks",
        resourceId: "databases",
      },
      {
        topic: "REST APIs with Flask/Django REST Framework",
        duration: "4 Weeks",
        resourceId: "python-backend",
      },
      {
        topic: "Build a Blog or API Project",
        duration: "Ongoing",
        resourceId: "python-projects",
      },
    ],
  },
  {
    year: "Step 3",
    title: "Advanced Development",
    steps: [
      {
        topic: "Authentication & Authorization (JWT, OAuth)",
        duration: "4 Weeks",
        resourceId: "auth",
      },
      {
        topic: "Asynchronous Programming (Asyncio, FastAPI)",
        duration: "5 Weeks",
        resourceId: "python-backend",
      },
      {
        topic: "Testing (PyTest, UnitTest)",
        duration: "3 Weeks",
        resourceId: "testing",
      },
      {
        topic: "Build a Full-Stack App (React + Django/Flask)",
        duration: "Ongoing",
        resourceId: "python-projects",
      },
    ],
  },
  {
    year: "Step 4",
    title: "Professional Level",
    steps: [
      {
        topic: "DevOps (Docker, CI/CD, Cloud Deployment)",
        duration: "6 Weeks",
        resourceId: "devops",
      },
      {
        topic: "System Design Basics",
        duration: "5 Weeks",
        resourceId: "system-design",
      },
      {
        topic: "Performance Optimization & Scaling",
        duration: "4 Weeks",
        resourceId: "system-design",
      },
      {
        topic: "Contribute to Open Source / Freelancing",
        duration: "Ongoing",
        resourceId: "open-source",
      },
    ],
  },
];
