import { DefaultTheme } from "styled-components";
import { Theme } from "./index";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
