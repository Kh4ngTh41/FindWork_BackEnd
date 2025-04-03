const RegisterRouter = require("./auth/register/registerRouter");
const EmployerRouter = require("./employer/employerrouter");
const FreelancerRouter = require("./freelancer/freelancerrouter");

const routes = (app) => {
  app.use("/api/register", RegisterRouter),
    app.use("/api/employer", EmployerRouter),
    app.use("/api/freelancer", FreelancerRouter);
};

module.exports = routes;
