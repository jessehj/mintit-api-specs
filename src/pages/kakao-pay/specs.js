import { SERVER_DEVELOPMENT, SERVER_RELEASE, Version } from "../../constants";
import kakaoPayApi                                     from "./apis/kakao-pay-api";
import models                                          from "./models";

const spec = {
  openapi: "3.0.0",
  info: {
    description: "MINTIT-KAKAO-PAY-API-SPECS",
    version: Version.KAKAO_PAY_SPEC_VERSION,
    title: "MINTIT-KAKAO-PAY-API-SPECS",
  },
  servers: [SERVER_DEVELOPMENT, SERVER_RELEASE],
  schemes: ["https", "http"],
  paths: {
    ...kakaoPayApi,
  },
  security:{
    apiKeyAuth: []
  },
  components: {
    schemas: {
      ...models,
    },
    securitySchemes: {
      apiKey: {
        type: 'apiKey',
        in: 'header',
        name: 'mintit-partner',
        description: '파트너 키',
        required: true,
        schema: {
          type: 'string',
          nullable: false
        }
      }
    },
  },
};

export default spec;
