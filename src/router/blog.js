const handleBlogRouter = (req, res) => {
  const method = req.method // GET & POST
  const url = req.url
  const path = url.split('?')[0]

  // obtain blog list
  if (method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: 'port - blog list'
    }
  }

  // obtain blog detail
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: 'port - blog detail'
    }
  }

  // add blog
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: 'port - blog add'
    }
  }

  // update blog
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: 'port - blog update'
    }
  }

  // delete blog
  if (method === 'POST' && path === '/api/blog/delete') {
    return {
      msg: 'port - blog delte'
    }
  }
}

module.exports = handleBlogRouter
