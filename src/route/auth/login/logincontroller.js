const LoginServices = require("./loginservice.js");

const EmployerLogin = async (req, res) => {
    try {
      const {email, password } = req.body;
  
      // Kiểm tra các trường bắt buộc
      if (!email || !password) {
        return res.status(400).json({
          status: "Error q",
          message: "Username and password are required",
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isCheckMail = emailRegex.test(email);
      
      if(isCheckMail === false)
      {
        console.log("isCheckEmail", isCheckMail);
        return res.status(404).json({
          message: "invalid email",
      })
      }
  
      const userInfo = await LoginServices.EmployerLogin(email, password);
  
      console.log("sucess");
      return res.status(200).json({
        status: "Success",
        user: userInfo,
      });
    } catch (e) {
      console.error("Login error:", e);
      return res.status(401).json({
        status: "Error",
        message: e.message,
      });
    }
  };

const FreelancerLogin = async (req, res) => {
  try {
    const {email, password } = req.body;

    // Kiểm tra các trường bắt buộc
    if (!email || !password) {
      return res.status(400).json({
        status: "Error q",
        message: "email and password are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isCheckMail = emailRegex.test(email);
    
    if(!isCheckMail)
    {
      console.log("isCheckEmail", isCheckMail);
      return res.status(404).json({
        message: "invalid email",
    })
    }

    const userInfo = await LoginServices.FreelancerLogin(email, password);

    console.log("sucess");
    return res.status(200).json({
      status: "Success",
      user: userInfo,
    });
  } catch (e) {
    console.error("Login error:", e);
    return res.status(401).json({
      status: "Error",
      message: e.message,
    });
  }
};

  module.exports = {
    FreelancerLogin,
    EmployerLogin 
  };