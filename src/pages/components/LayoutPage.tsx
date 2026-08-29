import { Stack, Grid, SidebarLayout, Split } from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const Box = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-lg bg-indigo-100 text-indigo-700 font-medium text-sm flex items-center justify-center p-4 ${className}`}>
    {children}
  </div>
);

const LayoutPage = () => {
  const stackCode = `import { Stack } from "@/components/Layout"

// Vertical (default)
<Stack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

// Horizontal
<Stack direction="horizontal" gap="md" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`;

  const gridCode = `import { Grid } from "@/components/Layout"

<Grid cols={3} gap="md">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Grid>`;

  const sidebarCode = `import { SidebarLayout } from "@/components/Layout"

<SidebarLayout sidebar={<div>Sidebar</div>} side="left">
  <div>Main content</div>
</SidebarLayout>`;

  const splitCode = `import { Split } from "@/components/Layout"

<Split ratio="1/2" gap="md">
  <div>Left</div>
  <div>Right</div>
</Split>`;

  const stackProps = [
    { prop: "direction", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Flex direction of the stack" },
    { prop: "gap", type: '"sm" | "md" | "lg"', default: '"md"', description: "Gap between children" },
    { prop: "align", type: '"start" | "center" | "end" | "stretch"', default: '"stretch"', description: "Cross-axis alignment (items-*)" },
    { prop: "justify", type: '"start" | "center" | "end" | "between"', default: '"start"', description: "Main-axis justification (justify-*)" },
  ];

  const gridProps = [
    { prop: "cols", type: "1 | 2 | 3 | 4", default: "3", description: "Number of grid columns" },
    { prop: "gap", type: '"sm" | "md" | "lg"', default: '"md"', description: "Gap between grid cells" },
  ];

  const sidebarProps = [
    { prop: "sidebar", type: "React.ReactNode", default: "—", description: "Content rendered in the sidebar" },
    { prop: "sidebarWidth", type: "string", default: '"w-56"', description: "Tailwind width class for the sidebar" },
    { prop: "side", type: '"left" | "right"', default: '"left"', description: "Which side the sidebar appears on" },
  ];

  const splitProps = [
    { prop: "ratio", type: '"1/2" | "1/3" | "2/3"', default: '"1/2"', description: "Width ratio between the two panes" },
    { prop: "gap", type: '"sm" | "md" | "lg"', default: '"md"', description: "Gap between the two panes" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-16">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Layout
        </p>
        <p className="text-lg text-gray-600">
          Composable layout primitives — Stack, Grid, SidebarLayout, and Split — for building structured UIs without writing flex/grid boilerplate.
        </p>
      </header>

      {/* Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stack</h2>
        <p className="text-gray-500">A flex container for stacking children vertically or horizontally.</p>
        <ComponentDemo code={stackCode}>
          <div className="w-full space-y-6">
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center">Vertical</p>
              <Stack gap="md" className="max-w-xs mx-auto">
                <Box>Item 1</Box>
                <Box>Item 2</Box>
                <Box>Item 3</Box>
              </Stack>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center">Horizontal</p>
              <Stack direction="horizontal" gap="md" align="center" justify="center">
                <Box>Item 1</Box>
                <Box>Item 2</Box>
                <Box>Item 3</Box>
              </Stack>
            </div>
          </div>
        </ComponentDemo>
        <h3 className="text-lg font-semibold pt-2">Stack Props</h3>
        <PropsTable data={stackProps} />
      </section>

      {/* Grid */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Grid</h2>
        <p className="text-gray-500">A CSS grid wrapper with configurable columns and gap.</p>
        <ComponentDemo code={gridCode}>
          <div className="w-full space-y-4">
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center">3 columns</p>
              <Grid cols={3} gap="md">
                {[1, 2, 3, 4, 5, 6].map((n) => <Box key={n}>{n}</Box>)}
              </Grid>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center">2 columns</p>
              <Grid cols={2} gap="sm">
                {[1, 2, 3, 4].map((n) => <Box key={n}>{n}</Box>)}
              </Grid>
            </div>
          </div>
        </ComponentDemo>
        <h3 className="text-lg font-semibold pt-2">Grid Props</h3>
        <PropsTable data={gridProps} />
      </section>

      {/* SidebarLayout */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">SidebarLayout</h2>
        <p className="text-gray-500">A two-column layout with a fixed-width sidebar and a flexible main area.</p>
        <ComponentDemo code={sidebarCode}>
          <div className="w-full space-y-4">
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center">Left sidebar</p>
              <SidebarLayout
                sidebar={<Box className="h-full min-h-24">Sidebar</Box>}
                side="left"
              >
                <Box className="h-full min-h-24">Main Content</Box>
              </SidebarLayout>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 text-center">Right sidebar</p>
              <SidebarLayout
                sidebar={<Box className="h-full min-h-24">Sidebar</Box>}
                side="right"
              >
                <Box className="h-full min-h-24">Main Content</Box>
              </SidebarLayout>
            </div>
          </div>
        </ComponentDemo>
        <h3 className="text-lg font-semibold pt-2">SidebarLayout Props</h3>
        <PropsTable data={sidebarProps} />
      </section>

      {/* Split */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Split</h2>
        <p className="text-gray-500">Divides space between two panes with a configurable ratio.</p>
        <ComponentDemo code={splitCode}>
          <div className="w-full space-y-4">
            {(["1/2", "1/3", "2/3"] as const).map((ratio) => (
              <div key={ratio}>
                <p className="text-xs text-gray-400 mb-2 text-center">ratio="{ratio}"</p>
                <Split ratio={ratio} gap="md">
                  <Box>Left</Box>
                  <Box>Right</Box>
                </Split>
              </div>
            ))}
          </div>
        </ComponentDemo>
        <h3 className="text-lg font-semibold pt-2">Split Props</h3>
        <PropsTable data={splitProps} />
      </section>
    </div>
  );
};

export default LayoutPage;
