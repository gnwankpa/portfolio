var shortid = require('shortid');
// To generate a unique ID, use shortid.generate()


const traceMiddleware = (req, res, next) => {
  req.trace = {
    id: shortid.generate(),
    timestamp: Date.now(),
    path: req.path
  };
//   if (!res.headersSent) {
//     res.set('x-request-id', req.trace.id);
//   }
  next();
//   res.set('x-request-id', req.trace.id)
}

module.exports = traceMiddleware;
