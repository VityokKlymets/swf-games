import fs from 'fs'
import fx from 'mkdir-recursive'
import path from 'path'

export const saveStaticFile = (data, filePath, fileName, encoding) => {
  let buffer = Buffer.from(data, encoding)
  const src = path.join(filePath, fileName)
  const absolutePath = path.join(process.env.ROOT, filePath)
  if (!fs.existsSync(absolutePath)) fx.mkdirSync(absolutePath)
  fs.writeFileSync(path.join(absolutePath, fileName), buffer)
  return src.replace(new RegExp('\\' + path.sep, 'g'), '/')
}
