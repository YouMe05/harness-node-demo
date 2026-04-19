const request = require("supertest");
const app = require("../src/app");

describe("Health Check API", () => {
  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    // Intentionally wrong for demo
    expect(response.body.status).toBe("Healthy");
  });
});