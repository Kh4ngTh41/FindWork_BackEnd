const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String },
    salary: { type: Number },
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employer",
      require: true,
    }, // Tham chiếu đến User (Employer)

    appliedFreelancers: [
      { type: mongoose.Schema.Types.ObjectId, ref: "freelancer" },
    ],

    // Trường lưu freelancer được chọn (nếu có)
    selectedFreelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "freelancer",
    },
  },
  { timestamps: true },
);

const job = mongoose.model("job", jobSchema);
module.exports = job;
