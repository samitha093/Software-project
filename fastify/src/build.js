/* eslint strict:"off" */
"use strict";

const fastify = require("fastify");
const parser = require("ua-parser-js");
const useragent = require("useragent");
const DeviceDetector = require("node-device-detector");
const detector = new DeviceDetector();

function build(opts) {
  const app = fastify(opts);

  app.get("/", {
    handler: async (request, reply) => {
      const ua = parser(request.headers["user-agent"]);
      const uagent = useragent.parse(request.headers["user-agent"]);
      const result = detector.detect(request.headers["user-agent"]);

      return { ua: ua, uagent: uagent, ndd: result };
    }
  });

  app.get(
    "/hello",
    {
      query: {
        name: {
          type: "string"
        }
      }
    },
    async (request, reply) => {
      const { name } = request.query;
      return { hello: name || "no name!" };
    }
  );

  return app;
}

module.exports = {
  build
};
