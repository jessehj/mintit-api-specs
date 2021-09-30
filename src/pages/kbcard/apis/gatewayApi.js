import { TAG_GATEWAY } from "../../../constants";

const gatewayApi = {
  "kbcard/api/gateway/signin": {
    post: {
      tags: [TAG_GATEWAY],
      summary: "로그인",
      operationId: "signIn",
      parameters: {},
      requestBody: {
        content: {
          "application/json": {
            schema: {
              required: ["kb_id"],
              properties: {
                kb_id: {
                  type: "string",
                  example: "tester",
                  description: "유저 식별값",
                },
              },
            },
          },
        },
      },
      responses: {
        APP_0000: {
          description: "로그인 성공",
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
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 미등록 유저",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
        APP_0404: {
          description: "미등록 유저",
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
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 미등록 유저",
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
  "kbcard/api/gateway/stplat": {
    get: {
      tags: [TAG_GATEWAY],
      summary: "회원가입 약관목록 조회",
      operationId: "fetchSignUpStipulations",
      parameters: {},
      requestBody: {},
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
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 약관 없음",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Stipulation",
                    },
                  },
                },
              },
            },
          },
        },
        APP_0404: {
          description: "약관 없음",
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
                      "응답코드:\n* APP_0000 - 성공\n* APP_0404 - 약관 없음",
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
  "kbcard/api/gateway/signup": {
    post: {
      tags: [TAG_GATEWAY],
      summary: "회원가입",
      operationId: "signUp",
      parameters: {},
      requestBody: {
        content: {
          "application/json": {
            schema: {
              required: ["kb_id"],
              properties: {
                kb_id: {
                  type: "string",
                  example: "tester",
                  description: "유저 식별값",
                },
                stplat_list: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Stipulation",
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        APP_0000: {
          description: "회원가입 성공",
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
                      "응답코드:\n* APP_0000 - 성공\n* APP_0409 - 이미 가입된 유저",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
        APP_0409: {
          description: "이미 가입된 유저",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_3006",
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_0409 - 이미 가입된 유저",
                  },
                  msg: {
                    type: "string",
                    example: "고객님의 정보로 기존에 가입된 정보가 존재합니다.",
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

export default gatewayApi;
