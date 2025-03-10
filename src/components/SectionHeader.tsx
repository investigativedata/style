import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

export interface ISectionHeader {
  readonly tagLine?: string;
  readonly title: string;
  readonly titleLevel?: "h1" | "h2";
}

export default function SectionHeader({
  tagLine,
  title,
  titleLevel = "h2",
}: ISectionHeader) {
  return (
    <Box>
      {tagLine && (
        <Typography level="h3" sx={{ p: 0, fontSize: "clamp(0.8rem, 7vw, 1.2rem)" }}>
          {tagLine}
        </Typography>
      )}
      <Typography level={titleLevel}>{title}</Typography>
    </Box>
  );
}
