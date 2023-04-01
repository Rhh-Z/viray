import run from "../utils/run";
import { projRoot } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${projRoot}/dist`);
};
export default series(publishComponent);