const MarketPrice = {
  type: "object",
  require: ["id", "model_no", "model_nm", "series_nm", "mnco_nm"],
  properties: {
    id: {
      type: "integer",
      example: 54738,
    },
    mnco_nm: {
      type: "string",
      example: "삼성전자",
      description: "제조사 이름",
    },
    series_nm: {
      type: "string",
      example: "갤럭시 S",
      description: "시리즈",
    },
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
    price_a: {
      type: "integer",
      example: 673000,
      description: "A등급 시세",
    },
    price_b: {
      type: "integer",
      example: 632000,
      description: "B등급 시세",
    },
    price_c: {
      type: "integer",
      example: 374000,
      description: "C등급 시세",
    },
    price_d: {
      type: "integer",
      example: 214000,
      description: "D등급 시세",
    },
    release_prc: {
      type: "integer",
      example: 1452000,
      description: "출시가",
    },
    pro_num: {
      type: "integer",
      example: 427018,
      description: "제품번호",
    },
  },
};

export default MarketPrice;
