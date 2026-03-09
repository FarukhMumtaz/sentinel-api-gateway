# 🛡️ Sentinel API Gateway

### **Production-Ready Node.js Backend & Containerized PostgreSQL Infrastructure**

Sentinel API Gateway is a high-performance, secure backend architecture designed for scalability and data integrity. It demonstrates advanced implementation of **Infrastructure as Code (IaC)**, **Middleware Security**, and **Container Orchestration**.

---

## 🏗️ Design Logic & Architecture

The system is built on a **Modular Micro-Service** pattern, decoupling the application logic from the database layer. By utilizing **Docker Compose**, the environment is fully reproducible, eliminating configuration drift and ensuring that the security policies are baked directly into the infrastructure.



---

## 💎 Core Engineering Highlights

| Feature | Implementation | Business Value |
| :--- | :--- | :--- |
| **Sentinel Guard** | Custom High-Priority Auth Middleware | Ensures zero unauthorized access to sensitive endpoints. |
| **Database Pooling** | Persistent pg-pool Management | Optimizes resource usage and prevents connection exhaustion. |
| **Infrastructure as Code** | Multi-container Docker Setup | Seamless deployment across any cloud provider. |
| **Secrets Isolation** | Environment Variable Injection | Industry-standard security against credential exposure. |
| **Data Persistence** | Docker Volume Mapping | Guaranteed data safety across container lifecycles. |

---

## 📐 Technical Request Flow

The architecture follows a strict validation pipeline to ensure every transaction is authenticated:



1.  **Ingress Gateway:** Traffic enters via Port 3000.
2.  **Authentication Layer:** `src/middlewares/auth.js` validates the `x-api-key`.
3.  **Entity Routing:** Request is mapped to the corresponding service logic.
4.  **Database Persistence:** Optimized queries are executed against the PostgreSQL instance.

---

## 🛠️ Tech Stack & Dev Standards

* **Runtime:** Node.js (Express Framework)
* **Database:** PostgreSQL 15-Alpine
* **DevOps:** Docker & Docker-Compose
* **Security:** Environment Isolation, Middleware Filtering, Volume Encryption

---

## 🚀 Launch Stack & Deployment

### 1. Requirements
- Docker & Docker Compose installed.

### 2. Configuration
Create a `.env` file in the root directory and define your own credentials:
```env
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_HOST=db
DB_PORT=5432
API_KEY=your_secret_key

### 3. Quick Deployment

Clone the repository and spin up the infrastructure with a single command:
Bash

git clone [https://github.com/FarukhMumtaz/sentinel-api-gateway.git](https://github.com/FarukhMumtaz/sentinel-api-gateway.git)
cd sentinel-api-gateway
docker compose up --build -d
