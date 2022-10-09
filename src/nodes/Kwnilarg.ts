// gen:mayoverwrite
import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printKwnilarg: NodePrinter<nodes.Kwnilarg> = (path, options, print) => {
  const node = path.getValue();
  console.log(`-Kwnilarg-`);
  return `❗️Kwnilarg`;
}

export default printKwnilarg;
