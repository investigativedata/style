import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

interface ISectionHeader {
  readonly tagLine?: string;
  readonly title: string;
}

export default function SectionHeader({ tagLine, title }: ISectionHeader) {
  return (
    <Box>
      {tagLine && (
        <Typography level="h3" sx={{ p: 0 }}>
          {tagLine}
        </Typography>
      )}
      <Typography level="h1">{title}</Typography>
    </Box>
  );
}
