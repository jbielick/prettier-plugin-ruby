// gen:mayoverwrite
import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printSuper: NodePrinter<nodes.Super> = (path, options, print) => {
  const node = path.getValue();
  console.log(`-Super-`);
  return `❗️Super`;
}

export default printSuper;
