// gen:mayoverwrite
import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printKwoptarg: NodePrinter<nodes.Kwoptarg> = (path, options, print) => {
  const node = path.getValue();
  console.log(`-Kwoptarg-`);
  return `❗️Kwoptarg`;
}

export default printKwoptarg;
