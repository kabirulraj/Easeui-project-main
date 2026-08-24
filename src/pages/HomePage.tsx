import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { useNavigate } from "react-router";

const components = [
  {
    title: "Button",
    description: "Animated, accessible buttons with multiple variants and hover effects.",
    path: "components/button",
  },
  {
    title: "Card",
    description: "Flexible card component with image support, variants, and GSAP animations.",
    path: "components/card",
  },
  {
    title: "Input",
    description: "Rich input collection: animated, floating label, password, icon, and more.",
    path: "components/input",
  },
  {
    title: "Modal",
    description: "Accessible modal dialog with smooth entrance and exit animations.",
    path: "components/modal",
  },
  {
    title: "Navbar",
    description: "Responsive navbar with glass, dark, light, and primary variants.",
    path: "components/navbar",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6">
        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full border border-indigo-200 text-indigo-600 bg-indigo-50">
          Open Source · React · TypeScript
        </span>
        <h1 className="text-5xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Build faster with{" "}
          <span className="text-indigo-600">EaseUI</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          A collection of animated, accessible, and customizable React components
          powered by GSAP and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            animation="scaleIn"
            hoverAnimation="bounce"
            size="lg"
            onClick={() => navigate("components/button")}
          >
            Browse Components
          </Button>
          <Button
            animation="fadeIn"
            hoverAnimation="scale"
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            GitHub
          </Button>
        </div>
      </section>

      {/* Components Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold" style={{ color: "var(--text-color)" }}>
            Components
          </h2>
          <p className="text-gray-500">Everything you need to build modern UIs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((comp) => (
            <Card
              key={comp.title}
              title={comp.title}
              description={comp.description}
              hoverAnimation="lift"
              footer={
                <Button
                  variant="ghost"
                  size="sm"
                  hoverAnimation="none"
                  animation="none"
                  onClick={() => navigate(comp.path)}
                >
                  View docs →
                </Button>
              }
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4 py-12 rounded-2xl border border-indigo-100 bg-indigo-50">
        <h2 className="text-3xl font-bold text-indigo-700">Ready to get started?</h2>
        <p className="text-gray-500">Drop EaseUI into your project and start building.</p>
        <code className="block mx-auto w-fit bg-white border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-700 shadow-sm">
          npm install easeui
        </code>
        <Button animation="bounceIn" hoverAnimation="jiggle" onClick={() => navigate("components/button")}>
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
