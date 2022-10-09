// gen:mayoverwrite
import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printFloat: NodePrinter<nodes.Float> = (path, options, print) => {
  const node = path.getValue();
  console.log(`-Float-`);
  return `❗️Float`;
}

export default printFloat;
