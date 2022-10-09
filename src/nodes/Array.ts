import { nodes } from "lib-ruby-parser";
import { doc } from "prettier";
import { NodePrinter } from "../";
const { builders: b } = doc;

// %i[ ]	Non-interpolated Array of symbols, separated by whitespace (after Ruby 2.0)
// %I[ ]	Interpolated Array of symbols, separated by whitespace (after Ruby 2.0)
// %w[ ]	Non-interpolated Array of words, separated by whitespace
// %W[ ]	Interpolated Array of words, separated by whitespace

const printArray: NodePrinter<nodes.Array> = (path, options, print) => {
  const node = path.getValue();
  let brackets: [string, string] = ["[", "]"];
  let delimiter = ",";

  // array modifiers don't have their own node type, but we can collect the
  // from the original text
  if (node.begin_l && node.end_l) {
    brackets = [
      options.originalText.substring(node.begin_l.begin, node.begin_l.end),
      options.originalText.substring(node.end_l.begin, node.end_l.end),
    ];
  }

  // a string/symbol inside of %w, %i and the like should know they do not need
  // to quote themselves or prefix with ":"
  if (brackets[0] !== "[") {
    options.enclosingArrayNodeWithModifier = node;
    options.enclosingArrayNodeWithModifierBrackets = brackets;
    delimiter = "";
  }

  const doc = b.group([
    brackets[0],
    b.indent([
      b.softline,
      b.join([delimiter, b.line], path.map(print, "elements")),
    ]),
    b.softline,
    brackets[1],
  ]);

  delete options.enclosingArrayNodeWithModifier;
  delete options.enclosingArrayNodeWithModifierBrackets;

  return doc;
};

export default printArray;
