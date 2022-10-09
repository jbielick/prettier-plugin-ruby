import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printArg: NodePrinter<nodes.Arg> = (path, options, print) => {
  const node = path.getValue();
  console.log("-Arg-");
  return node.name;
};

export default printArg;
