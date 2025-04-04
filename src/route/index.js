const RegisterRouter = require("./auth/register/registerRouter");
const EmployerRouter = require("./employer/employerrouter");
const FreelancerRouter = require("./freelancer/freelancerrouter");
const LoginRouter = require("./auth/login/loginrouter");

const routes = (app) => {
  app.use("/api/register", RegisterRouter),
    app.use("/api/employer", EmployerRouter),
    app.use("/api/freelancer", FreelancerRouter);
    app.use("/api/login", LoginRouter);
};

module.exports = routes;
