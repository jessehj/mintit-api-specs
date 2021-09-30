import { TAG_ASSET } from "../../../constants";

const phoneAssetApi = {
  "kbcard/api/phone/asset": {
    post: {
      tags: [TAG_ASSET],
      summary: "자산등록",
      operationId: "registerPhoneAsset",
      parameters: [
        {
          in: "header",
          name: "authorization",
          schema: {
            type: "string",
            example:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              required: ["market_price_id"],
              properties: {
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
            },
          },
        },
      },
      responses: {
        APP_0000: {
          description: "등록 성공",
          headers: {
            authorization: {
              schema: {
                type: "string",
                example:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
              },
              description: "인증토큰",
            },
            exp: {
              schema: {
                type: "string",
              },
              description: "토큰 만료일",
            },
          },
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                },
              },
            },
          },
        },
        APP_0400: {
          description: "잘못된 요청",
          headers: {
            authorization: {
              schema: {
                type: "string",
                example:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
              },
              description: "인증토큰",
            },
            exp: {
              schema: {
                type: "string",
              },
              description: "토큰 만료일",
            },
          },
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0400",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "잘못된 요청",
                  },
                },
              },
            },
          },
        },
        APP_0401: {
          description: "유저 인증 실패",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0401",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "Unauthorized user",
                  },
                },
              },
            },
          },
        },
      },
    },
    get: {
      tags: [TAG_ASSET],
      summary: "자산목록 조회",
      operationId: "fetchPhoneAssets",
      parameters: [
        {
          in: "header",
          name: "authorization",
          schema: {
            type: "string",
            example:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
          },
        },
        {
          in: "query",
          name: "offset",
          schema: {
            type: "integer",
            example: 0,
          },
        },
        {
          in: "query",
          name: "limit",
          schema: {
            type: "integer",
            example: 20,
            default: 20,
          },
        },
      ],
      responses: {
        APP_0000: {
          description: "조회 성공",
          headers: {
            authorization: {
              schema: {
                type: "string",
                example:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
              },
              description: "인증토큰",
            },
            exp: {
              schema: {
                type: "string",
              },
              description: "토큰 만료일",
            },
          },
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    type: "object",
                    properties: {
                      total_amount: {
                        type: "integer",
                        example: 1847000,
                        description: "총액",
                      },
                      total_count: {
                        type: "integer",
                        example: 100,
                        description: "등록된 핸드폰 갯수 총합",
                      },
                      list: {
                        type: "array",
                        items: {
                          $ref: "#/components/schemas/PhoneAsset",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        APP_0400: {
          description: "잘못된 요청",
          headers: {
            authorization: {
              schema: {
                type: "string",
                example:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
              },
              description: "인증토큰",
            },
            exp: {
              schema: {
                type: "string",
              },
              description: "토큰 만료일",
            },
          },
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0400",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "잘못된 요청",
                  },
                },
              },
            },
          },
        },
        APP_0401: {
          description: "유저 인증 실패",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0401",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "Unauthorized user",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "kbcard/api/phone/asset/{id}": {
    delete: {
      tags: [TAG_ASSET],
      summary: "자산 삭제",
      operationId: "deletePhoneAsset",
      parameters: [
        {
          in: "header",
          name: "authorization",
          schema: {
            type: "string",
            example:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
          },
          required: true,
        },
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
          description: "자산 아이디 (phone_asset_id)",
          required: true,
        },
      ],
      responses: {
        APP_0000: {
          description: "삭제 성공",
          headers: {
            authorization: {
              schema: {
                type: "string",
                example:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
              },
              description: "인증토큰",
            },
            exp: {
              schema: {
                type: "string",
              },
              description: "토큰 만료일",
            },
          },
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                },
              },
            },
          },
        },
        APP_0400: {
          description: "잘못된 요청",
          headers: {
            authorization: {
              schema: {
                type: "string",
                example:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW50aXRNb2JpbGVBcHBfSldUIiwiZXhwIjoxNjI4MDYwMDc...",
              },
              description: "인증토큰",
            },
            exp: {
              schema: {
                type: "string",
              },
              description: "토큰 만료일",
            },
          },
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0400",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "잘못된 요청",
                  },
                },
              },
            },
          },
        },
        APP_0401: {
          description: "유저 인증 실패",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0401",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0400 - 잘못된 요청\n* APP_0401 - 유저인증실패",
                  },
                  msg: {
                    type: "string",
                    example: "Unauthorized user",
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

export default phoneAssetApi;
