import { TAG_INQUIRY_MARKET_PRICE } from "../../../constants";
import { createCookieHeaderRequest } from "../../../utils";

const marketPriceApi = {
  "/rest/api/sale/est/price": {
    get: {
      tags: [TAG_INQUIRY_MARKET_PRICE],
      summary: "제조사 조회",
      description: "",
      operationId: "fetchManufacturers",
      parameters: [
        {
          in: "cookie",
          name: "CSRF_TOKEN",
          schema: {
            type: "string",
            default: "xxxxxx",
          },
        },
        {
          in: "header",
          name: "csrf",
          schema: {
            type: "string",
            default: "xxxxxx",
          },
        },
        {
          in: "query",
          name: "state",
          schema: {
            type: "string",
            enum: ["maker", "series", "model"],
            default: "maker",
          },
        },
      ],
      requestBody: {},
      responses: {
        200: {
          description: "조회 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["code", "msg"],
                properties: {
                  code: {
                    type: "string",
                    example: "APP_0000",
                    enum: ["APP_0000", "APP_9999"],
                    description:
                      "응답코드:\n* APP_0000 - 성공\n* APP_9999 - 실패",
                  },
                  msg: {
                    type: "string",
                    example: "OK",
                  },
                  dataset: {
                    type: "array",
                    items: {
                      $ref: `#/components/schemas/Manufacturer`,
                    },
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

export default marketPriceApi;
