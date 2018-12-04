export default async (req, res, next) => {
  const token = req.headers['authorization']
  req.isAdmin = !!token
  next()
}
