const Model = {
  type: "object",
  require: ["model_nm", "model_no"],
  properties: {
    model_nm: {
      type: "string",
      example: "갤럭시 S21 울트라 256G",
      description: "모델명",
    },
    model_no: {
      type: "string",
      example: "SM-G998-256G",
      description: "모델코드",
    },
  },
};

export default Model;
