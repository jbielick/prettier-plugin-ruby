import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printFor: NodePrinter<nodes.For> = (path, options, print) => {
  const node = path.getValue();
  return [
    "for ",
    path.call(print, "iterator"),
    " in ",
    path.call(print, "iteratee"),
    " ",
    b.ifBreak("do", "{"),
    b.indent([b.line, path.call(print, "body")]),
    b.line,
    b.ifBreak("end", "}"),
  ];
};

export default printFor;
