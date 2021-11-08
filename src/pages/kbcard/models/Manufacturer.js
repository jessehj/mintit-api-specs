const Manufacturer = {
  type: "object",
  require: ["mnco_nm", "mnco_id"],
  properties: {
    mnco_nm: {
      type: "string",
      example: "삼성전자",
      description: "제조사 이름",
    },
    mnco_id: {
      type: "string",
      example: "1207",
      description: "제조사 코드",
    },
  },
};

export default Manufacturer;
