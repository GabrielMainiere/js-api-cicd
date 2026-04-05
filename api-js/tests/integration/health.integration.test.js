import request from "supertest"
import createApp from "../../app.js"

describe("GET /healthz", () => {
  test("should return 200 and health payload", async () => {
    const app = createApp()

    const response = await request(app).get("/healthz")

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      status: "ok",
      service: "api-js",
    })
  })
})
