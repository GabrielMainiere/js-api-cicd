import express from "express"
import router from "./router.js"
import db from "./database.js"
import { getHealthPayload } from "./health.js"

const app = express()
const port = 3000

app.use(express.json())

app.get("/healthz", (_req, res) => {
  return res.status(200).json(getHealthPayload())
})

app.use("/", router)

try {
  await db.authenticate()
  console.log("Eba!")
} catch {
  console.log("Não eba...")
}

app.listen(port, () => {
  console.log(`Rodando na porta ${port}.`)
})
