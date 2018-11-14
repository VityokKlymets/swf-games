import fs from 'fs'
import fx from 'mkdir-recursive'
import path from 'path'

export const saveStaticFile = (data, filePath, fileName, encoding) => {
  let buffer = Buffer.from(data, encoding)
  if (!fs.existsSync(filePath)) fx.mkdirSync(filePath)
  fs.writeFileSync(path.join(filePath, fileName), buffer)
  return filePath
}
