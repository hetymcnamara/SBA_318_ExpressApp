const versionHeader = (req, res, next) => {
    res.setHeader('X-Application-Version', '1.0.0');
  
    next();
  };
  
  module.exports = versionHeader;