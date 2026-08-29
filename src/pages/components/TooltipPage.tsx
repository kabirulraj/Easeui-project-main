import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const placementCode = `import { Tooltip } from "@/components/Tooltip"

<Tooltip content="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip content="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip content="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>`;

  const variantCode = `<Tooltip content="Dark tooltip" variant="dark">
  <Button variant="dark">Dark</Button>
</Tooltip>
<Tooltip content="Light tooltip" variant="light">
  <Button variant="outline">Light</Button>
</Tooltip>
<Tooltip content="Primary tooltip" variant="primary">
  <Button variant="primary">Primary</Button>
</Tooltip>
<Tooltip content="Danger tooltip" variant="danger">
  <Button variant="destructive">Danger</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "—",
      description: "Text displayed inside the tooltip",
    },
    {
      prop: "placement",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Position of the tooltip relative to the trigger",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "danger"',
      default: '"dark"',
      description: "Visual style of the tooltip",
    },
    {
      prop: "children",
      type: "React.ReactElement",
      default: "—",
      description: "The trigger element that activates the tooltip on hover",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          A lightweight hover tooltip with GSAP-powered fade and scale animations, four placements, and four variants.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Placement</h2>
        <ComponentDemo code={placementCode}>
          <div className="flex gap-6 flex-wrap items-center justify-center py-6">
            <Tooltip content="Top tooltip" placement="top">
              <Button animation="none" hoverAnimation="none">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button animation="none" hoverAnimation="none">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <Button animation="none" hoverAnimation="none">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button animation="none" hoverAnimation="none">Right</Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <ComponentDemo code={variantCode}>
          <div className="flex gap-6 flex-wrap items-center justify-center py-6">
            <Tooltip content="Dark tooltip" variant="dark">
              <Button animation="none" hoverAnimation="none" variant="dark">Dark</Button>
            </Tooltip>
            <Tooltip content="Light tooltip" variant="light">
              <Button animation="none" hoverAnimation="none" variant="outline">Light</Button>
            </Tooltip>
            <Tooltip content="Primary tooltip" variant="primary">
              <Button animation="none" hoverAnimation="none" variant="primary">Primary</Button>
            </Tooltip>
            <Tooltip content="Danger tooltip" variant="danger">
              <Button animation="none" hoverAnimation="none" variant="destructive">Danger</Button>
            </Tooltip>
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

export default TooltipPage;
