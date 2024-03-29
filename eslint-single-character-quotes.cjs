module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce single quotes for single characters",
      category: "Stylistic Issues",
      recommended: false,
      url: "https://your-custom-rule-documentation-url",
    },
    schema: [],
    messages: {
      singleQuotes: "Use single quotes for single characters",
    },
  },
  create: (context) => {
    return {
      Literal(node) {
        if (typeof node.value === "string" && node.value.length === 1) {
          if (node.raw[0] !== "'") {
            context.report({
              node,
              messageId: "singleQuotes",
            });
          }
        }
      }
    };
  },
};
