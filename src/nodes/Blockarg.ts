import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printBlockarg: NodePrinter<nodes.Blockarg> = (path, options, print) => {
  const node = path.getValue();
  console.log(`-Blockarg-`);
  return `❗️Blockarg`;
};

export default printBlockarg;
