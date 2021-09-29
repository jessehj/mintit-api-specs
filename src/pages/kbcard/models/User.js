const User = {
  type: "object",
  require: ["name"],
  properties: {
    name: {
      type: "string",
      example: "홍길동",
      description: "이름",
    },
  },
};

export default User;
