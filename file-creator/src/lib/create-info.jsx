import fs from 'fs'

export function createDataFile(data) {
  const jsonData = JSON.stringify(data)
  fs.writeFile(`./data/${data.name}.json`, jsonData, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('File saved successfully.')
    }
  })
}
