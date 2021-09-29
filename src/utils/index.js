export const createCookieHeaderRequest = (required = true) => ({
  in: "headers",
  name: "authorization",
  description: "인증 토큰",
  required,
  type: "string",
});

export const createResponseSchema = (reference) => {
  return {
    type: "object",
    required: [],
    properties: {
      data: {},
    },
  };
};
