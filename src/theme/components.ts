import { ButtonOwnerState, buttonClasses } from "@mui/joy/Button";
import { BACKGROUNDS, BLACK } from "./colors";
import { linkClasses } from "@mui/joy/Link";
import { TypographyOwnerState } from "@mui/joy/Typography";
import { CardOwnerState } from "@mui/joy/Card";

const SIZES = {
  lg: "35px",
  md: "24px",
  sm: "1rem",
};

const FORM_INPUT = {
  defaultProps: {
    size: "md",
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      padding: "10px",
      borderRadius: "0",
      borderWidth: "3px",
      color: BLACK,
      borderColor: BLACK,
    },
  },
};

export const components = {
  JoyLink: {
    styleOverrides: {
      root: {
        color: "inherit",
        textDecoration: "underline",
        [`${linkClasses.root}:hover`]: {
          color: "inherit",
          textDecoration: "inherit",
        },
      },
    },
  },
  JoyTypography: {
    defaultProps: {
      level: "body-lg",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: TypographyOwnerState }) => ({
        margin: 0,
        padding: 0,
        paddingBotton: "1rem",
        ...(ownerState.level === "h1" && {
          paddingBottom: "2rem",
        }),
        ...(ownerState.level === "h2" && {
          paddingBottom: "2rem",
        }),
        ...(ownerState.level === "body-lg" && {
          paddingBottom: "2rem",
        }),
      }),
    },
  },
  JoyInput: FORM_INPUT,
  JoySelect: FORM_INPUT,
  JoyTextarea: FORM_INPUT,
  JoyFormLabel: {
    styleOverrides: {
      root: {
        fontSize: "24px",
      },
    },
  },
  JoyButton: {
    defaultProps: {
      size: "lg",
      variant: "outlined",
      color: "neutral",
      styleOverrides: {
        root: {
          margin: 0,
          paddingTop: 0,
          paddingBottom: "48px",
        },
      },
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: ButtonOwnerState }) => ({
        fontSize: SIZES[ownerState.size || "lg"],
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%" /* 42px */,
        letterSpacing: "-0.7px",
        padding: "10px 20px",
        borderRadius: "40px",
        borderWidth: "4px",
        color: BLACK,
        borderColor: BLACK,
        backgroundColor: BACKGROUNDS[ownerState.color || "neutral"],
        [`&.${buttonClasses.root}:hover`]: {
          boxShadow: `2px 2px 0px 0px ${BLACK}`,
          backgroundColor: BACKGROUNDS[ownerState.color || "neutral"],
        },
        [`&.${buttonClasses.root}:active`]: {
          color: BACKGROUNDS[ownerState.color || "neutral"],
          backgroundColor: BLACK,
        },
      }),
    },
  },
  JoyIconButton: {
    defaultProps: {
      size: "lg",
    },
  },
  JoyCard: {
    defaultProps: {
      size: "md",
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: CardOwnerState }) => ({
        color: BLACK,
        padding: "3rem 3rem 4rem 3rem",
        borderWidth: "4px",
        borderColor: BLACK,
        borderRadius: "2rem",
        backgroundColor: BACKGROUNDS[ownerState.color || "neutral"],
      }),
    },
  },
  JoyDivider: {
    styleOverrides: {
      root: {
        borderTop: `4px solid ${BLACK}`,
      },
    },
  },
  JoyModalClose: {
    defaultProps: {
      size: "lg",
      color: "neutral",
      sx: {
        "&:hover": {
          color: "inherit",
          bgcolor: "inherit",
        },
        "& svg": {
          width: "52px",
          height: "52px",
          stroke: 0,
          fill: BLACK,
        },
      },
    },
  },
  JoyDrawer: {
    defaultProps: {
      slotProps: {
        content: {
          sx: {
            color: BLACK,
            bgcolor: "#1DE9B6", // FIXME
            padding: "10rem 4rem",
            boxShadow: `-4px 4px 0px 0px ${BLACK}`,
          },
        },
      },
    },
  },
  JoyBreadcrumbs: {
    defaultProps: {
      size: "sm",
      sx: {
        "& li": {
          color: BLACK,
        },
      },
    },
  },
};
