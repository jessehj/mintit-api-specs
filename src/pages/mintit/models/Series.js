const Series = {
  type: "object",
  required: ["generation"],
  properties: {
    generation: {
      type: "string",
      example: "갤럭시 S",
      description: "시리즈",
    },
  },
};

export default Series;
