// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Server Actions",
    href: "server-actions",
    items: [
      { title: "getSession", href: "/getSession" },
      { title: "getToken", href: "/getToken" },
      { title: "getRole", href: "/getRole" },
      { title: "getuser", href: "/getUser" },
      { title: "accordion", href: "/accordion" },
    ],
  },
  {
    title: "React Hooks",
    href: "react-hooks",
    items: [
      { title: "useAuth", href: "/use-auth" },
      { title: "useSettings", href: "/use-settings" },
      { title: "useAnalytics", href: "/use-analytics" },
      { title: "useTheme", href: "/use-theme" },
    ],
  },
  {
    title: "Components",
    href: "components",
    items: [
      { title: "Avatar app", href: "/avatar-app" },
      { title: "Board app", href: "/board-app" },
    ],
  },
  {
    title: "Design System",
    href: "design-system",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Primitives", href: "/primitives" },
      { title: "Prop Types", href: "/prop-types" },
    ],
  },
  {
    title: "Web Architecture",
    href: "web-architecture",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "RADIO Framework", href: "/radio-framework" },
      { title: "Optimization", href: "/optimization" },
      { title: "Render Patterns", href: "/render-patterns" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
