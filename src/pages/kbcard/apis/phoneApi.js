import { TAG_PHONE } from "../../../constants";

const phoneApi = {
  "kb/api/phone/manufacturer": {
    get: {
      tags: [TAG_PHONE],
      summary: "제조사 목록 조회",
      operationId: "fetchManufacturers",
      parameters: [],
      responses: {
        APP_0000: {
          description: "조회 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg", "dataset"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Manufacturer",
                    },
                  },
                },
              },
            },
          },
        },
        APP_0404: {
          description: "조회결과 없음",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0404",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "Not Found.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "kb/api/phone/series": {
    get: {
      tags: [TAG_PHONE],
      summary: "시리즈 목록 조회",
      operationId: "fetchSeries",
      parameters: [
        {
          in: "query",
          name: "mnco_id",
          schema: {
            type: "string",
            example: "1207",
          },
          required: true,
        },
      ],
      responses: {
        APP_0000: {
          description: "조회 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg", "dataset"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Series",
                    },
                  },
                },
              },
            },
          },
        },
        APP_0400: {
          description: "잘못된 요청",
        },
        APP_0404: {
          description: "조회결과 없음",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0404",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "Not Found.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "kb/api/phone/model": {
    get: {
      tags: [TAG_PHONE],
      summary: "모델 목록 조회",
      operationId: "fetchModels",
      parameters: [
        {
          in: "query",
          name: "mnco_id",
          schema: {
            type: "string",
            example: "1207",
          },
          required: true,
        },
        {
          in: "query",
          name: "series_nm",
          schema: {
            type: "string",
            example: "갤럭시 S",
          },
          required: true,
        },
      ],
      responses: {
        APP_0000: {
          description: "조회 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg", "dataset"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Model",
                    },
                  },
                },
              },
            },
          },
        },
        APP_0400: {
          description: "잘못된 요청",
        },
        APP_0404: {
          description: "조회결과 없음",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0404",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "Not Found.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "kb/api/phone/market-price": {
    get: {
      tags: [TAG_PHONE],
      summary: "시세 조회",
      operationId: "fetchMarketPrice",
      parameters: [
        {
          in: "query",
          name: "model_no",
          schema: {
            type: "string",
            example: "SM-G998-256G",
          },
          required: true,
        },
      ],
      responses: {
        APP_0000: {
          description: "조회 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg", "dataset"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    $ref: "#/components/schemas/MarketPrice",
                  },
                },
              },
            },
          },
        },
        APP_0400: {
          description: "잘못된 요청",
        },
        APP_0404: {
          description: "조회결과 없음",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0404",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 조회결과 없음",
                  },
                  msg: {
                    type: "string",
                    example: "Not Found.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default phoneApi;
