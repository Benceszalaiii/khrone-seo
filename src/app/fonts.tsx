import { Raleway } from "next/font/google";
import localFont from "next/font/local";

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const clashDisplay = localFont({
  src: "./ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});
