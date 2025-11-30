# 🧠 AI-Powered Resume Analyzer

An intelligent web-based Resume Analyzer that extracts text from resumes (PDF), analyzes skills, experience, and job matching using the **Gemini 2.5 Flash Large Language Model**, and provides structured insights using Generative AI.

---

## 🚀 Features

- ✅ Upload resume in PDF format  
- ✅ Extracts text using:
  - Direct PDF Text Extraction
- ✅ AI-based resume analysis using **Gemini LLM** and Generate:
  - Skills list
  - Education summary
  - Work experience timeline

---

## 🏗 Tech Stack

| Technology | Usage |
|-----------|--------|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| Multer | File upload handling |
| Gemini API | AI resume analysis |


---

 ## 📦 Setup Instructions
### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer
```

### 2. Configure Environment Variables

Create `backend/.env`:

```env
PORT=3001
GEMINI_API_KEY=your_api_key_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Server

```bash
npm start
```

Server will run at:
-  http://localhost:3001

---
## 📤 API Endpoint

POST /api/resume/analyze

Form-Data:

| Key    | Type | Value           |
| ------ | ---- | --------------- |
| resume | File | Upload your PDF |

Sample API Response

```json
{
    "success": true,
    "data": {
        "skills": [
            "Auditing",
            "Financial Accounting",
            "Financial Reporting"
        ],
        "education": [
            {
                "degree": "Senior Accountant",
                "institution": "Borcelle University",
                "year": "2026-2030"
            },
        ],
        "experience": [
            {
                "role": "Senior Accountant",
                "company": "Salford & Co.",
                "duration": "2033 - 2035",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
        ],
        "summary": "Sebastian Bennett is a Professional Accountant with experience at Salford & Co. as a Senior and Financial Accountant, complemented by education from Borcelle University. His core skills include Auditing, Financial Accounting, and Financial Reporting."
    }
}
```


