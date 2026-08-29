import { Carousel } from "@/components/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const slides = [
  <div className="flex flex-col items-center justify-center h-48 bg-indigo-50 text-indigo-700 text-2xl font-bold">
    Slide 1 — Welcome
  </div>,
  <div className="flex flex-col items-center justify-center h-48 bg-purple-50 text-purple-700 text-2xl font-bold">
    Slide 2 — Explore
  </div>,
  <div className="flex flex-col items-center justify-center h-48 bg-pink-50 text-pink-700 text-2xl font-bold">
    Slide 3 — Build
  </div>,
];

const darkSlides = [
  <div className="flex flex-col items-center justify-center h-48 text-white text-2xl font-bold">
    Dark Slide 1
  </div>,
  <div className="flex flex-col items-center justify-center h-48 text-indigo-300 text-2xl font-bold">
    Dark Slide 2
  </div>,
  <div className="flex flex-col items-center justify-center h-48 text-purple-300 text-2xl font-bold">
    Dark Slide 3
  </div>,
];

const CarouselPage = () => {
  const defaultCode = `import { Carousel } from "@/components/Carousel"

<Carousel
  variant="default"
  items={[
    <div className="h-48 flex items-center justify-center">Slide 1</div>,
    <div className="h-48 flex items-center justify-center">Slide 2</div>,
    <div className="h-48 flex items-center justify-center">Slide 3</div>,
  ]}
/>`;

  const darkCode = `<Carousel variant="dark" items={slides} />`;

  const outlineCode = `<Carousel variant="outline" items={slides} />`;

  const autoPlayCode = `<Carousel autoPlay interval={2500} items={slides} />`;

  const noArrowsCode = `<Carousel showArrows={false} items={slides} />`;

  const propsData = [
    {
      prop: "items",
      type: "React.ReactNode[]",
      default: "—",
      description: "Array of slide content to render",
    },
    {
      prop: "variant",
      type: '"default" | "dark" | "outline"',
      default: '"default"',
      description: "Visual style of the carousel wrapper",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically advances slides on an interval",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "Milliseconds between auto-advances when autoPlay is true",
    },
    {
      prop: "showDots",
      type: "boolean",
      default: "true",
      description: "Show dot indicators below the carousel",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Show previous / next arrow buttons",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Carousel
        </p>
        <p className="text-lg text-gray-600">
          An animated slide carousel with autoplay, dot indicators, and arrow navigation powered by GSAP.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Default</h2>
        <ComponentDemo code={defaultCode}>
          <div className="w-full max-w-lg">
            <Carousel variant="default" items={slides} />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark</h2>
        <ComponentDemo code={darkCode}>
          <div className="w-full max-w-lg">
            <Carousel variant="dark" items={darkSlides} />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Outline</h2>
        <ComponentDemo code={outlineCode}>
          <div className="w-full max-w-lg">
            <Carousel variant="outline" items={slides} />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">AutoPlay</h2>
        <ComponentDemo code={autoPlayCode}>
          <div className="w-full max-w-lg">
            <Carousel autoPlay interval={2500} items={slides} />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dots Only (No Arrows)</h2>
        <ComponentDemo code={noArrowsCode}>
          <div className="w-full max-w-lg">
            <Carousel showArrows={false} items={slides} />
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

export default CarouselPage;
