const handleUserRouter = (req, res) => {
  const method = req.method // GET & POST

  // login
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: 'login'
    }
  }
}

module.exports = handleUserRouter
