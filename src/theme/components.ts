import { AspectRatioOwnerState } from "@mui/joy/AspectRatio";
import { ButtonOwnerState, buttonClasses } from "@mui/joy/Button";
import { CardOwnerState } from "@mui/joy/Card";
import { ChipOwnerState } from "@mui/joy/Chip";
import { DrawerOwnerState } from "@mui/joy/Drawer";
import { linkClasses } from "@mui/joy/Link";
import { TypographyOwnerState } from "@mui/joy/Typography";
import { BACKGROUNDS, BLACK } from "./colors";
import { FONT_SIZES, STROKE_WIDTH } from "./vars";

const FORM_INPUT = {
  defaultProps: {
    size: "md",
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      padding: "8px",
      borderRadius: "0",
      borderWidth: STROKE_WIDTH,
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
          paddingBottom: "1.6rem",
        }),
        ...(ownerState.level === "h2" && {
          paddingBottom: "1.6rem",
        }),
        ...(ownerState.level === "h3" && {
          paddingBottom: "1rem",
        }),
        ...(ownerState.level === "body-lg" && {
          paddingBottom: "1.6rem",
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
        fontSize: FONT_SIZES.md,
      },
    },
  },
  JoyButton: {
    defaultProps: {
      size: "lg",
      variant: "outlined",
      color: "neutral",
    },
    styleOverrides: {
      root: ({ ownerState }: { ownerState: ButtonOwnerState }) => ({
        margin: 0,
        fontSize: FONT_SIZES[ownerState.size || "lg"],
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%" /* 42px */,
        letterSpacing: "-0.7px",
        padding: "8px 16px",
        borderRadius: "32px",
        borderWidth: STROKE_WIDTH,
        alignSelf: "flex-start",
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
        padding: "2.4rem 2.4rem 3.2rem 2.4rem",
        borderWidth: STROKE_WIDTH,
        borderColor: BLACK,
        borderRadius: "2rem",
        backgroundColor: BACKGROUNDS[ownerState.color || "neutral"],
      }),
    },
  },
  JoyDivider: {
    styleOverrides: {
      root: {
        borderTop: `${STROKE_WIDTH} solid ${BLACK}`,
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
          width: "2.6rem",
          height: "2.6rem",
          stroke: 0,
          fill: BLACK,
        },
      },
    },
  },
  JoyDrawer: {
    defaultProps: {
      anchor: "right",
    },
    styleOverrides: {
      content: ({ ownerState }: { ownerState: DrawerOwnerState }) => ({
        color: BLACK,
        padding: "6rem 3rem",
        [`border${
          {
            bottom: "Top",
            left: "Right",
            right: "Left",
            top: "Bottom",
          }[ownerState.anchor || "right"]
        }`]: `${STROKE_WIDTH} solid ${BLACK}`,
      }),
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
          fontSize: FONT_SIZES.sm,
        }),
        ...(ownerState.size === "md" && {
          padding: "0.25rem 1rem",
          fontSize: FONT_SIZES.md,
          borderRadius: "1.5rem",
        }),
        ...(ownerState.size === "lg" && {
          padding: "0.25rem 1rem",
          fontSize: FONT_SIZES.lg,
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
          border: `${STROKE_WIDTH} solid`,
          borderColor: BLACK,
          borderRadius: 0,
          boxShadow: `${STROKE_WIDTH} ${STROKE_WIDTH} 0px 0px ${BLACK}`,
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
