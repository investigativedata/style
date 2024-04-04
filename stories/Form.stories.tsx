import type { Meta, StoryObj } from "@storybook/react";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const Form = () => (
  <Stack
    spacing={4}
    sx={{
      display: "flex",
      maxWidth: "1000px",
      mx: "auto",
      px: { xs: 2, md: 6 },
      py: { xs: 2, md: 3 },
    }}
  >
    <Card>
      <Box sx={{ mb: 1 }}>
        <Typography level="h2">Your account</Typography>
        <Typography level="body-md">
          Please enter your contact details. These settings are necessary for
          initial signup. You can change the contact accounts for your
          organization at any time later.
        </Typography>
      </Box>
      <Divider />
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
      >
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Stack spacing={1}>
            <FormLabel>Name</FormLabel>
            <FormControl
              sx={{
                display: { sm: "flex-column", md: "flex-row" },
                gap: 2,
              }}
            >
              <Input placeholder="First name" required name="first_name" />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Last name"
                sx={{ flexGrow: 1 }}
                name="last_name"
              />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={2}>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input placeholder="Editor in chief" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email@newsroom.org"
                sx={{ flexGrow: 1 }}
                required
                name="email"
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Timezone</FormLabel>
            <Select
              startDecorator={<AccessTimeFilledRoundedIcon />}
              defaultValue="1"
            >
              <Option value="1">
                Indochina Time (Bangkok){" "}
                <Typography
                  level="body-md"
                  textColor="text.tertiary"
                  ml={0.5}
                  p={0}
                >
                  — GMT+07:00
                </Typography>
              </Option>
              <Option value="2">
                Indochina Time (Ho Chi Minh City){" "}
                <Typography
                  level="body-md"
                  textColor="text.tertiary"
                  ml={0.5}
                  p={0}
                >
                  — GMT+07:00
                </Typography>
              </Option>
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Divider />
      <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
        <Button size="md" color="success">
          Save
        </Button>
        <Button size="md" type="reset" disabled={true}>
          Reset
        </Button>
        <Button size="md" color="warning">
          Cancel
        </Button>
      </CardActions>
    </Card>
  </Stack>
);

const meta = {
  title: "Examples/Form",
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
