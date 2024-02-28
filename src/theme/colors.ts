// ||)·|() COLOR PALETTE

// 50...900
export const GREENS = [
  "#F1FFF8",
  "#DAFFEC",
  "#BEFFDF",
  "#9DFFD0",
  "#83FFC3",
  "#69FEB5",
  "#63EEAA",
  "#58D99A",
  "#51C68C",
  "#43A473",
];

export const ORANGES = [
  "#FAEAE8",
  "#FECEC0",
  "#FEAE98",
  "#FE8F6F",
  "#FE764F",
  "#FF5F33",
  "#F4592F",
  "#E6522A",
  "#D74C26",
  "#BD401F",
];

export const PURPLES = [
  "#EDE7F6",
  "#D1C4E9",
  "#B39DDB",
  "#9575CD",
  "#7E57C2",
  "#673AB7",
  "#5E35B1",
  "#512DA8",
  "#4527A0",
  "#311B92",
];

export const YELLOWS = [
  "#FFFEE8",
  "#FFFAC5",
  "#FFF69E",
  "#FEF177",
  "#FCEC57",
  "#F9E737",
  "#FFDD3B",
  "#FFC533",
  "#FDAD2B",
  "#F9841C",
];

export const GRAYS = [
  "#F9F9F9",
  "#F2F2F2",
  "#E8E8E8",
  "#D8D8D8",
  "#B4B4B4",
  "#949494",
  "#6C6C6C",
  "#595959",
  "#3A3A3A",
  "#1A1A1A",
];

export const BLACK = GRAYS[9];
export const WHITE = "#FFF8F1";

export const TRANSP = "rgba(0,0,0,0)";

type Colors =
  | typeof GREENS
  | typeof YELLOWS
  | typeof PURPLES
  | typeof ORANGES
  | typeof GRAYS;

interface ColorMap {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// FIXME
const keys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const toObject = (c: Colors): ColorMap =>
  Object.fromEntries(keys.map((k, i) => [k, c[i]])) as unknown as ColorMap;

export const PALETTE = {
  greens: toObject(GREENS),
  oranges: toObject(ORANGES),
  yellows: toObject(YELLOWS),
  purples: toObject(PURPLES),
  grays: toObject(GRAYS),
};

interface IBackgrounds {
  readonly [key: string]: string;
}

export const BACKGROUNDS: IBackgrounds = {
  default: WHITE,
  green: PALETTE.greens[300],
  orange: PALETTE.oranges[400],
  yellow: PALETTE.yellows[100],
  purple: PALETTE.purples[200],
  // FIXME
  neutral: WHITE,
  primary: PALETTE.oranges[400],
  warning: PALETTE.yellows[100],
  success: PALETTE.greens[300],
  danger: PALETTE.purples[200],
};

export const BACKGROUND_VARS: IBackgrounds = {
  neutral: "background.body",
  primary: "primary.400",
  warning: "warning.100",
  success: "success.300",
  danger: "danger.200",
};
