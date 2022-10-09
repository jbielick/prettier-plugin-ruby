// gen:mayoverwrite
import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printCvasgn: NodePrinter<nodes.Cvasgn> = (path, options, print) => {
  const node = path.getValue();
  console.log(`-Cvasgn-`);
  return `❗️Cvasgn`;
}

export default printCvasgn;
