import  express from "express"
import bodyParser from 'body-parser';
import fs from 'fs'

const app = express()
app.use(bodyParser.json());

app.get("/api/createFile", (req, res) =>{
  res.send("Runing")
})

app.post("/api/createFile", (req, res) =>{
  const data = req.body
  console.log(data)
  const jsonData = JSON.stringify(data)
  console.log(jsonData)

  fs.writeFile(`./data/${data.name}.json`, jsonData, (err) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error al guardar el archivo.')
    } else {
      console.log('Archivo guardado exitosamente.')
      res.status(200).send('Archivo guardado exitosamente.')
    }
  })
})

const PORT = 3001
app.listen(PORT, () =>{
  console.log("Server Runing")
})