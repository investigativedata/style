import { buttonClasses } from "@mui/joy/Button";
import { BACKGROUNDS, BLACK } from "./colors";
import { linkClasses } from "@mui/joy/Link";

interface IPropsColorOverrides {
  primary: true;
  neutral: true;
  green: true;
  orange: true;
  purple: true;
  yellow: true;
}

declare module "@mui/joy/Button" {
  interface ButtonPropsColorOverrides extends IPropsColorOverrides {}
}

declare module "@mui/joy/Card" {
  interface CardPropsColorOverrides extends IPropsColorOverrides {}
}

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
      root: {
        margin: 0,
        paddingTop: 0,
        paddingBottom: "48px",
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
    },
    styleOverrides: {
      root: ({ ownerState }) => {
        return {
          fontSize: SIZES[ownerState.size],
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "120%" /* 42px */,
          letterSpacing: "-0.7px",
          padding: "10px 20px",
          borderRadius: "40px",
          borderWidth: "4px",
          color: BLACK,
          borderColor: BLACK,
          backgroundColor: BACKGROUNDS[ownerState.color],
          [`&.${buttonClasses.root}:hover`]: {
            boxShadow: `2px 2px 0px 0px ${BLACK}`,
            backgroundColor: BACKGROUNDS[ownerState.color],
          },
          [`&.${buttonClasses.root}:active`]: {
            color: BACKGROUNDS[ownerState.color],
            backgroundColor: BLACK,
          },
        };
      },
    },
  },
  JoyCard: {
    defaultProps: {
      size: "md",
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        color: BLACK,
        padding: "3rem 3rem 4rem 3rem",
        borderWidth: "4px",
        borderColor: BLACK,
        borderRadius: "2rem",
        backgroundColor: BACKGROUNDS[ownerState.color],
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
};
