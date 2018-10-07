module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits associated with your account.' })
  }

  // If user has credits, proceed with request
  next();
};
