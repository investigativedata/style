import type { Meta, StoryObj } from "@storybook/react";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";

const Paragraph = `
    Doloribus voluptas qui quisquam vel laudantium est. Possimus iste
    repellendus quis excepturi voluptas ab. Autem facilis dolor quia nemo. Sequi
    ut est reprehenderit sed dolorum. Saepe labore aliquid perferendis in.
`;

const Ensemble = () => (
  <>
    <Typography level="h1">I am the biggest headline</Typography>
    <Typography>{Paragraph}</Typography>
    <Typography level="h3">I am a small tag line</Typography>
    <Typography level="h2">I am headline 2</Typography>
    <Typography>{Paragraph}</Typography>
  </>
);

const meta = {
  title: "Examples/Typography",
  component: Ensemble,
  decorators: [
    (Story) => (
      <Container style={{ maxWidth: "xl" }}>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
