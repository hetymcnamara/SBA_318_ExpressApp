
const maintenanceMiddleware = (req, res, next) => {
    const isUnderMaintenance = false;
  
    if (isUnderMaintenance) {
      return res.status(503).render('maintenance'); 
    }
  
    // Continue processing the request if not under maintenance
    next();
};
  
module.exports = maintenanceMiddleware;
  