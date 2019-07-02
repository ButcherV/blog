const handleUserRouter = require('./src/router/user.js')
const handleHanderRouter = require('./src/router/blog.js')

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  const url = req.url
  req.path = url.split('?')[0]

  // 处理 blog 路由
  const blogData = handleHanderRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }

  // 处理 user 路由
  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }

  // 所有路由都未命中，返回 404
  res.writeHead(404, { 'Content-type': 'text/plain' })
  res.write('404 Not Found')
  res.end()
}

module.exports = {
  serverHandle
}
