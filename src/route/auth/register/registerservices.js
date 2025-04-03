const Freelancer = require("../../../models/freelancer");
const Employer = require("../../../models/employer");
const bcrypt = require("bcrypt");

const RegisterFreelancer = (FreelancerData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newFreelancer = new Freelancer(FreelancerData);
      await newFreelancer.save();

      const savedData = await newFreelancer.save();
      console.log("Saved data:", savedData);

      console.log("sucess");

      resolve("Created:", newFreelancer);
    } catch (e) {
      console.log("fail1");
      reject(e);
    }
  });
};

const RegisterEmployer = (EmployerData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newEmployer = new Employer(EmployerData);
      await newEmployer.save();

      const savedData = await newEmployer.save();
      console.log("Saved data:", savedData);

      resolve("Created:", newEmployer);
    } catch (e) {
      console.log("f3");
      reject(e);
    }
  });
};

module.exports = {
  RegisterEmployer,
  RegisterFreelancer,
};
