import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const lightCode = `import { Navbar } from "@/components/navbar"

<Navbar variant="light" animation="fadeIn" />`;

  const darkCode = `<Navbar variant="dark" animation="slideUp" />`;

  const primaryCode = `<Navbar variant="primary" animation="scaleIn" />`;

  const glassCode = `<Navbar variant="glass" animation="bounceIn" />`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style variant of the navbar",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Controls the height of the navbar",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Entrance animation when the navbar mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "lift" | "none"',
      default: '"none"',
      description: "Animation triggered on mouse hover",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Renders as a child element using Radix Slot",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Navbar
        </p>
        <p className="text-lg text-gray-600">
          A responsive navigation bar with multiple variants and GSAP-powered animations.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Light</h2>
        <ComponentDemo code={lightCode}>
          <div className="w-full">
            <Navbar variant="light" animation="fadeIn" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark</h2>
        <ComponentDemo code={darkCode}>
          <div className="w-full">
            <Navbar variant="dark" animation="slideUp" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Primary</h2>
        <ComponentDemo code={primaryCode}>
          <div className="w-full">
            <Navbar variant="primary" animation="scaleIn" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Glass</h2>
        <ComponentDemo code={glassCode}>
          <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg">
            <Navbar variant="glass" animation="bounceIn" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
