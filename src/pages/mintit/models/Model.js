const Model = {
  type: "object",
  required: ["model_no", "cate03_name"],
  properties: {
    model_no: {
      type: "string",
      example: "갤럭시S20",
      description: "모델명",
    },
    cate03_name: {
      type: "string",
      example: "SM-G981",
      description: "모델코드",
    },
  },
};

export default Model;
