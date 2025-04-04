const Freelancer = require("../../../models/freelancer");
const Employer = require("../../../models/employer");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const checkLogin = async (username, password) => {
  try {
    // Find by username or email
    let user = await Freelancer.findOne({ username });
    if (!user) {
      const companyName = username;
      user = await Employer.findOne({ companyName });
      if (!user) {
        throw new Error("Invalid username ");
      } else {
        if (password !== user.password) {
          throw new Error("Invalid password");
        }
      }
    } else if (user) {
      console.log("123");
      if (password !== user.password) {
        throw new Error("Invalid username or password");
      }
    }
    return user.toObject();
  } catch (e) {
    throw e;
  }
};

const EmployerLogin = async (email, password) => {
  try {
    
    const user = await Employer.findOne({ contactEmail: email })
    console.log(user);
      if (!user) {
        throw new Error("Invalid email ");
      } else {
        console.log(user.companyPassword)
        if (password !== user.companyPassword) {
          throw new Error("Invalid password");
        }
      }
    return user.toObject();
  } catch (e) {
    throw e;
  }
};

const FreelancerLogin = async (email, password) => {
  try {
    const user = await Freelancer.findOne({ email: email });
      if (!user) {
        throw new Error("Invalid email ");
      } else {
        if (password !== user.password) {
          throw new Error("Invalid password");
        }
      }
    return user.toObject();
  } catch (e) {
    throw e;
  }
};

module.exports = {
  FreelancerLogin,
  EmployerLogin
};
