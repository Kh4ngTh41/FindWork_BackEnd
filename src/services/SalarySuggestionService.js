const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

class SalarySuggestionService {
  static async getSalarySuggestion(jobData) {
    try {
      const { title, skills, experienceLevel, timeEstimation } = jobData;

      const prompt = `You are a salary consultant. Based on the following job details, suggest a salary range in USD.
      Return ONLY a JSON object with minSalary and maxSalary fields, nothing else.
      Do not include any explanations or additional text.

Job Title: ${title}
Required Skills: ${skills.join(", ")}
Experience Level: ${experienceLevel}
Time Estimation: ${timeEstimation}

Example response format:
{
  "minSalary": 2500,
  "maxSalary": 6000
}`;

      const PALM_API_URL = process.env.PALM_API_URL;

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      };

      const response = await axios.post(PALM_API_URL, requestBody);
      const predictions = response.data.candidates;

      if (predictions && predictions.length > 0) {
        const firstCandidate = predictions[0];
        if (
          firstCandidate.content &&
          firstCandidate.content.parts &&
          firstCandidate.content.parts.length > 0
        ) {
          const generatedText = firstCandidate.content.parts[0].text;
          console.log("AI Response:", generatedText);

          // Extract JSON from the response
          const cleanText = generatedText
            .replace(/```json\n?|\n?```/g, "")
            .trim();
          const salaryRange = JSON.parse(cleanText);

          return {
            minSalary: salaryRange.minSalary,
            maxSalary: salaryRange.maxSalary,
          };
        }
      }

      throw new Error("No valid response from AI");
    } catch (error) {
      console.error("Error in salary suggestion:", error);
      throw new Error("Failed to generate salary suggestion");
    }
  }
}

module.exports = SalarySuggestionService;
