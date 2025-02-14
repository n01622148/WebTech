const logger = (req, res, next) => {
  //DO SOMETHING - middleware
  //DO SOMETHING ELSE - also middleware
  console.log(Date());
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  next();
};

export default logger;