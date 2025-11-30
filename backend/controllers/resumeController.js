const pdfParse = require("pdf-parse");
const analyseResume = require("../services/llmAnalyzer");

const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No PDF uploaded" });
    }

    const pdfBuffer = req.file.buffer;

    const data = await pdfParse(pdfBuffer);

    const result = await analyseResume(data.text);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "PDF processing failed" });
  }
};

module.exports = {
  analyzeResume,
};
