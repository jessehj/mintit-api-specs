import {
  SERVER_DEVELOPMENT,
  SERVER_RELEASE,
  TAG_ASSET,
  TAG_GATEWAY,
  TAG_PHONE,
  Version,
} from "../../constants";
import gatewayApi from "./apis/gatewayApi";
import models from "./models";
import phoneApi from "./apis/phoneApi";
import phoneAssetApi from "./apis/phoneAssetApi";

const spec = {
  openapi: "3.0.0",
  info: {
    description: "MINTIT X KB API 정의서",
    version: Version.KBCARD_SPEC_VERSION,
    title: "MINTIT-API-SPECS for KB",
  },
  servers: [SERVER_DEVELOPMENT, SERVER_RELEASE],
  schemes: ["https", "http"],
  tags: [
    {
      name: TAG_GATEWAY,
      description: "유저 인증",
    },
    {
      name: TAG_PHONE,
      description: "시세조회",
    },
  ],
  paths: {
    ...gatewayApi,
    ...phoneApi,
  },
  components: {
    schemas: {
      ...models,
    },
  },
};

export default spec;
