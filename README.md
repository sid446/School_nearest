API Deliverables for School Management System
1. Source Code Repository with Complete API Implementation
- Push the full backend project to a GitHub repository.
- Include the following structure:
  - `index.js`
  - `controllers/`
  - `models/`
  - `routes/`
  - `db/`
  - `.env.example`
  - `README.md`


# School Management API

## Features
- Add schools (POST /api/addSchool)
- List schools by proximity (GET /api/listSchools)

## Getting Started
```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root with the following values:

DB_HOST=<your-google-sql-public-ip> # Google Cloud SQL public IP
DB_USER=<your-mysql-username> # e.g., root or custom user
DB_PASSWORD=<your-mysql-password>
DB_NAME=school_db
PORT=8000


⚠️ Make sure your Google Cloud SQL instance has:
- **Public IP enabled**
- Your local IP added under **Authorized Networks**

```
## 2. Live API Endpoints Accessible for Testing

This backend API is **deployed on Google Cloud Run**, connected to **Google Cloud SQL** for persistent data storage.

### ✅ Deployment Platform:
- **Google Cloud Run** (auto-scaling serverless deployment)

### ✅ Database:
- **Google Cloud SQL** (MySQL instance)

### ✅ Live Endpoints:
- `POST https://https://school-nearest-319268043042.us-central1.run.app/api/addSchool`
- `GET  https://https://school-nearest-319268043042.us-central1.run.app/api/listSchools?latitude=28.6&longitude=77.2`

> 🔐 Ensure your Cloud Run service has:
> - Proper connection to Cloud SQL (via connection string or Cloud SQL Proxy)
> - Allowed unauthenticated requests (for testing)

3. Postman Collection
Create a Postman Collection named `School API`:
- Add:
  - `POST /api/addSchool`
  - `GET /api/listSchools`
- Export the collection (v2.1 format)
- Share via:
  - Public Postman workspace
  - GitHub
  - Google Drive or Dropbox

Example link: https://www.postman.com/your-workspace/school-api/collection/xyz
