import { Hono } from "hono";

const api = new Hono();

api.get("/", (c) => {
  return c.json({
    message: "Welcome to the API",
    version: "1.0.0",
  });
});

api.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

export const apiRoutes = api;
