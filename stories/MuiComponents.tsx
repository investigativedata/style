// Necessary to render mui props in storybook docs
// Somehow this doesnt work by default:
// https://github.com/storybookjs/storybook/issues/24563

import React from "react";
import MuiButton, { ButtonProps } from "@mui/joy/Button";
import MuiChip, { ChipProps } from "@mui/joy/Chip";

type TButton = Pick<
  ButtonProps,
  "color" | "disabled" | "size" | "variant" | "loading"
>;

export function Button(props: React.PropsWithChildren<TButton>) {
  return <MuiButton {...props} />;
}

type TChip = Pick<ChipProps, "color" | "size" | "variant">;

export function Chip(props: React.PropsWithChildren<TChip>) {
  return <MuiChip {...props} />;
}
