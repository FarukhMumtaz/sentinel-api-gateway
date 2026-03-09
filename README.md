# 🛡️ Sentinel API Gateway

### **Production-Ready Node.js Backend & Containerized PostgreSQL Infrastructure**



---

## 🚀 Quick Start & Deployment

### 1. Requirements
- Docker & Docker Compose installed.

### 2. Configuration
Create a `.env` file in the root directory:
```env
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_HOST=db
DB_PORT=5432
API_KEY=your_secret_key

### 3. Launch Stack

Clone and spin up the infrastructure with a single command:
Bash

git clone [https://github.com/FarukhMumtaz/sentinel-api-gateway.git](https://github.com/FarukhMumtaz/sentinel-api-gateway.git)
cd sentinel-api-gateway
docker compose up --build -d

🏗️ Design Logic & Architecture

The system is built on a Modular Micro-Service pattern, decoupling the application logic from the database layer. By utilizing Docker Compose, the environment is fully reproducible, eliminating configuration drift.
📐 Technical Request Flow

    Ingress Gateway: Traffic enters via Port 3000.

    Authentication Layer: src/middlewares/auth.js validates the x-api-key.

    Entity Routing: Request is mapped to the corresponding service logic.

    Database Persistence: Optimized queries are executed against the PostgreSQL instance.

💎 Core Engineering Highlights
Feature	Implementation	Business Value
Sentinel Guard	Custom High-Priority Auth Middleware	Ensures zero unauthorized access to sensitive endpoints.
Database Pooling	Persistent pg-pool Management	Optimizes resource usage and prevents connection exhaustion.
Infrastructure as Code	Multi-container Docker Setup	Seamless deployment across any cloud provider.
Secrets Isolation	Environment Variable Injection	Industry-standard security against credential exposure.
Data Persistence	Docker Volume Mapping	Guaranteed data safety across container lifecycles.
🛠️ Tech Stack & Dev Standards

    Runtime: Node.js (Express Framework)

    Database: PostgreSQL 15-Alpine

    DevOps: Docker & Docker-Compose

    Security: Environment Isolation, Middleware Filtering, Volume Encryption

👨‍💻 Developed By

Farukh Mumtaz Cloud Architect & Security Engineer Aspirant

Focus: Secure Cloud Infrastructures & Backend Scalability.
