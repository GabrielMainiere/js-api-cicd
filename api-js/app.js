import express from "express"
import router from "./router.js"
import { getHealthPayload } from "./health.js"

export default function createApp() {
  const app = express()

  app.use(express.json())

  app.get("/healthz", (_req, res) => {
    return res.status(200).json(getHealthPayload())
  })

  app.use("/", router)

  return app
}
