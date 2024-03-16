const { version } = require("../../package.json");
const config = require("../config/config");

// const swaggerDef = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Ring My Dog Web Application v1 Documentation',
//     version,
//   },
//   servers: [
//     {
//       // url: `https://todolist-9l13.onrender.com/v1`,
//       url : `http://localhost:3000/v1`,
//     },
//   ],
// };

// module.exports = swaggerDef;

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Ring My Dog Web Application v1 Documentation",
    version,
  },
  servers: [
    {
      url: `http://localhost:3000/v1`,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = swaggerDef;
