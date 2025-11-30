# 🧠 AI-Powered Resume Analyzer

An intelligent web-based Resume Analyzer that extracts text from resumes (PDF), analyzes skills, experience, and job matching using the **Gemini 2.5 Flash Large Language Model**, and provides structured insights using Generative AI.

---

## 🚀 Features

- ✅ Upload resume in PDF format  
- ✅ Extracts text using:
  - Direct PDF Text Extraction
  - OCR fallback using Tesseract (for scanned resumes)
- ✅ AI-based resume analysis using **Gemini LLM**
- ✅ Skill extraction
- ✅ Job role suitability analysis
- ✅ Experience estimation
- ✅ Professional summary generation
- ✅ REST API-based architecture
- ✅ Supports Postman testing
- ✅ Ready for deployment (Docker compatible)

---

## 🧠 AI Model Used

- **LLM:** :contentReference[oaicite:0]{index=0}  
- **Provider:** Google Generative AI  
- **Use Cases in Project:**
  - Resume summarization
  - Skill extraction
  - Career recommendations
  - Job profile matching

---

## 🏗 Tech Stack

| Technology | Usage |
|-----------|--------|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| Multer | File upload handling |
| Tesseract.js | OCR for scanned PDFs |
| pdf-text-extract | Text extraction from PDFs |
| Gemini API | AI resume analysis |
| Docker | Containerization |
| Postman | API testing |

---

## 📂 Project Structure

```bash
resume-analyzer/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── extractText.js
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── README.md
└── package.json
