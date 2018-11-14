import fs from 'fs'
import fx from 'mkdir-recursive'
import path from 'path'

export const saveStaticFile = (data, filePath, fileName, encoding) => {
  let buffer = Buffer.from(data, encoding)
  const src = path.join(filePath, fileName)
  if (!fs.existsSync(filePath)) fx.mkdirSync(filePath)
  fs.writeFileSync(src, buffer)
  return src
}
