const { GoogleGenerativeAI } = require("@google/generative-ai");

const llm = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY);

async function analyseResume(resume) {
  try {
    const model = llm.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `
    You are a professional AI resume analyzer.

    RULES (VERY IMPORTANT):
    - Output ONLY valid raw JSON.
    - Do NOT use markdown.
    - Do NOT wrap in \`\`\`json.
    - Do NOT add explanations.
    - Do NOT add extra text before or after JSON.
    - If any field is missing, return an empty string "" or empty array [].
    - Summary MUST be 1–2 lines maximum.

    Extract the resume into EXACTLY this JSON structure:

    {
    "skills": [],
    "education": [
        {
        "degree": "",
        "institution": "",
        "year": ""
        }
    ],
    "experience": [
        {
        "role": "",
        "company": "",
        "duration": "",
        "description": ""
        }
    ],
    }

    Also, give a summary about this candidate in 1-2 lines  

    Resume Text:
    ${resume}
    `;

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return JSON.parse(response);
  } catch (error) {
    console.error("Gemini resume analysis error:", error.message);
    return null;
  }
}

module.exports = analyseResume;
