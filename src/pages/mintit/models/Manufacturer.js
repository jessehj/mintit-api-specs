const Manufacturer = {
  type: "object",
  required: ["model", "model_name"],
  properties: {
    model: {
      type: "integer",
      example: 1207,
      description: "제조사 코드",
    },
    model_name: {
      type: "string",
      example: "삼성전자",
      description: "제조사",
    },
  },
};

export default Manufacturer;
