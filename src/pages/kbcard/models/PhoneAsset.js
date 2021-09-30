const PhoneAsset = {
  type: "object",
  require: [
    "id",
    "market_price_id",
    "model_no",
    "model_nm",
    "series_nm",
    "mnco_nm",
  ],
  properties: {
    id: {
      type: "integer",
      example: 1,
      description: "phone_asset_id",
    },
    market_price_id: {
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
    purchased_at: {
      type: "string",
      example: "2020-09-29T15:00:00.000Z",
      description: "구입일자 (UTC - YYYY-MM-DDTHH:mm:ss.SSSZ)",
    },
    memo: {
      type: "string",
      example: "나의 소중한 첫 폰",
    },
  },
};

export default PhoneAsset;
