const Series = {
  type: "object",
  require: ["generation"],
  properties: {
    series_nm: {
      type: "string",
      example: "갤럭시 S",
      description: "시리즈",
    },
  },
};

export default Series;
