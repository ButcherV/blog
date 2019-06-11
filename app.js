const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: 'xiaowei10ddddd0',
    site: 'blog'
  }

  res.end(JSON.stringify(resData))
}

module.exports = {
  serverHandle
}
