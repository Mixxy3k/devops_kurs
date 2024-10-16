const app = require("./app");
const { describe } = require("node:test");
const supertest = require("supertest");
const request = supertest(app);

describe("/test - Enpdoint", () => {
  it("Wynik testu", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("OwO");
  });
});
