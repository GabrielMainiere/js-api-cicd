import { getHealthPayload } from "../../health.js"

describe("health payload", () => {
  test("should return a healthy payload", () => {
    expect(getHealthPayload()).toEqual({
      status: "ok",
      service: "api-js",
    })
  })
})
