import { nodes } from "lib-ruby-parser";
import { Doc, doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

const printCSend: NodePrinter<nodes.CSend> = (path, options, print) => {
  const node = path.getValue();
  let argWraps: [Doc, Doc];
  if (node.args.length) {
    argWraps = node.begin_l ? ["(", ")"] : [b.line, ""];
  } else {
    argWraps = ["", ""];
  }
  const recv = path.call(print, "recv");
  return b.group([
    recv,
    ["&", "."],
    node.method_name.replace("=", " ="),
    b.ifBreak("(", argWraps[0]),
    b.indent([b.softline, b.join([",", b.line], path.map(print, "args"))]),
    b.softline,
    b.ifBreak(")", argWraps[1]),
  ]);
};

export default printCSend;
