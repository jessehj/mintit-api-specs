const Stipulation = {
  type: "object",
  require: ["stplat_id", "stplat_tp", "title", "ess_yn"],
  properties: {
    stplat_id: {
      type: "string",
      example: "SP00000002",
      description: "약관 ID",
    },
    stplat_tp: {
      type: "string",
      description: "약관 타입",
    },
    title: {
      type: "string",
      example: "개인정보 수집 및 활용동의",
      description: "제목",
    },
    ess_yn: {
      type: "string",
      enum: ["Y", "N"],
      description: "필수동의 여부",
    },
  },
};

export default Stipulation;
