import {
  SERVER_DEVELOPMENT,
  SERVER_RELEASE,
  TAG_INQUIRY_MARKET_PRICE,
  Version,
} from "../../constants";
import marketPriceApi from "./apis/marketPriceApi";
import models from "./models";

const spec = {
  openapi: "3.0.0",
  info: {
    description: "MINTIT API 정의서",
    version: Version.MINTIT_SPEC_VERSION,
    title: "MINTIT-API-SPECS",
  },
  servers: [SERVER_DEVELOPMENT, SERVER_RELEASE],
  schemes: ["https", "http"],
  paths: {
    ...marketPriceApi,
  },
  components: {
    schemas: {
      ...models,
    },
  },
};

export default spec;
