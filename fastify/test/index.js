/* eslint strict:"off" */
"use strict";

const tap = require("tap");
const { build } = require("../src/build");

var server;

tap.test("server routes", async t => {
  // Instantiate a new server instance for each test execution
  t.beforeEach(async () => {
    server = build();
    return server.ready();
  });

  // When the test is finished it is recommended to close the server instance
  t.afterEach(async () => {
    return server.close();
  });

  t.test("/", async t => {
    t.plan(3);

    // Fastify comes with built-in support for fake http injection thanks to light-my-request
    const res = await server.inject({ method: "GET", url: "/" });

    t.strictEqual(res.statusCode, 200);
    t.strictEqual(
      res.headers["content-type"],
      "application/json; charset=utf-8"
    );
    t.deepEqual(JSON.parse(res.payload), { hello: "world" });
  });

  t.test("/hello?name=fastify", async t => {
    t.plan(3);

    const res = await server.inject({
      method: "GET",
      url: "/hello",
      query: { name: "fastify" }
    });

    t.strictEqual(res.statusCode, 200);
    t.strictEqual(
      res.headers["content-type"],
      "application/json; charset=utf-8"
    );
    t.deepEqual(JSON.parse(res.payload), { hello: "fastify" });
  });

  t.test("/hello", async t => {
    t.plan(3);

    const res = await server.inject({
      method: "GET",
      url: "/hello"
    });

    t.strictEqual(res.statusCode, 200);
    t.strictEqual(
      res.headers["content-type"],
      "application/json; charset=utf-8"
    );
    t.deepEqual(JSON.parse(res.payload), { hello: "no name!" });
  });
});
