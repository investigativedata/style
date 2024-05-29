import { AspectRatioOwnerState } from "@mui/joy";
import { ButtonOwnerState, buttonClasses } from "@mui/joy/Button";
import { CardOwnerState } from "@mui/joy/Card";
import { ChipOwnerState } from "@mui/joy/Chip";
import { linkClasses } from "@mui/joy/Link";
import { TypographyOwnerState } from "@mui/joy/Typography";
import { BACKGROUNDS, BLACK } from "./colors";

export const FONT_SIZES = {
  lg: "clamp(1.5rem, 7vw, 2.5rem)",
  md: "clamp(1rem, 7vw, 1.5rem)",
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
        ...(ownerState.level === "body-md" && {
          paddingBottom: "1rem",
        }),
      }),
    },
  },
  JoyList: {
    defaultProps: {
      size: "lg",
    },
  },
  JoyListItem: {
    // defaultProps: {
    //   slots: {
    //     root: UnorderedListItem,
    //   },
    // },
    styleOverrides: {
      root: {
        color: BLACK,
      },
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
        fontSize: FONT_SIZES[ownerState.size || "lg"],
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
      anchor: "right",
      slotProps: {
        content: {
          sx: {
            color: BLACK,
            // bgcolor: "#1DE9B6", // FIXME
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
  JoyChip: {
    defaultProps: {
      size: "sm",
      variant: "soft",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: ChipOwnerState }) => ({
        color: BLACK,
        fontWeight: 400,
        lineHeight: "130%",
        ...(ownerState.size === "sm" && {
          padding: "0.25rem 1rem",
          borderRadius: "1rem",
          fontSize: "1rem",
        }),
        ...(ownerState.size === "md" && {
          padding: "0.25rem 1rem",
          fontSize: "1.5rem",
          borderRadius: "1.5rem",
        }),
        ...(ownerState.size === "lg" && {
          padding: "0.25rem 1rem",
          fontSize: "2.0rem",
          borderRadius: "2rem",
        }),
      }),
    },
  },
  JoyAspectRatio: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: AspectRatioOwnerState }) => ({
        border: 0,
        boxShadow: 0,
        borderRadius: 0,
        ...(ownerState.variant === "outlined" && {
          border: "4px solid",
          borderColor: BLACK,
          borderRadius: 0,
          boxShadow: `4px 4px 0px 0px ${BLACK}`,
        }),
      }),
      content: {
        border: 0,
      },
    },
  },
  JoyAlert: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
};
