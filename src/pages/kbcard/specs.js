import { SERVER_DEVELOPMENT, SERVER_RELEASE, Version } from "../../constants";
import gatewayApi from "./apis/gatewayApi";
import models from "./models";

const spec = {
  openapi: "3.0.0",
  info: {
    description: "MINTIT X KBCard API 정의서",
    version: Version.KBCARD_SPEC_VERSION,
    title: "MINTIT-API-SPECS For KBCard",
  },
  servers: [SERVER_DEVELOPMENT, SERVER_RELEASE],
  schemes: ["https", "http"],
  paths: {
    ...gatewayApi,
  },
  components: {
    schemas: {
      ...models,
    },
  },
};

export default spec;