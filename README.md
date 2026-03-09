🛡️ Sentinel API Gateway
Production-Ready Node.js Backend & Containerized Infrastructure

This project demonstrates a Security-First approach to backend engineering. Instead of a basic API, I built a decoupled system where the application and database are isolated using Docker, ensuring high scalability and a zero-drift deployment.
🚀 Quick Deployment

Deploy the entire stack in under 2 minutes using Infrastructure as Code (IaC).
1. Environment Configuration

Create a .env file in the root directory:
Code snippet

DATABASE_USER=your_db_user

DATABASE_PASSWORD=your_secure_password

DATABASE_NAME=your_db_name

DATABASE_HOST=db

DATABASE_PORT=5432

API_KEY=your_secret_access_key

2. Launch Commands
Bash

git clone https://github.com/FarukhMumtaz/sentinel-api-gateway.git

cd sentinel-api-gateway

docker compose up --build -d

🏗️ System Architecture & Logic
The Modular Core

The system is built on a Decoupled Architecture. By isolating the Node.js runtime from the PostgreSQL layer, the infrastructure remains future-proof—allowing for independent scaling or database migrations without code refactoring
I implemented a Custom Auth Middleware that acts as the primary gatekeeper. It validates every incoming request; if the traffic isn't authenticated, it is dropped before ever touching the application logic.

💎 Key Engineering Features

    ⚡ Database Pooling: Integrated pg-pool to manage active connections, preventing system crashes during high-traffic spikes.

    💾 Data Persistence: Used Docker Volumes to ensure data remains persistent even if containers are destroyed or updated.

    🔒 Secrets Management: Zero hardcoded credentials. All sensitive keys are injected via environment variables for production security.

🛠️ Tech Stack

    Backend: Node.js (Express Framework)

    Database: PostgreSQL (Containerized)

    DevOps: Docker & Docker Compose (IaC)

👨‍💻 Developed By

Farukh Mumtaz
Cloud Architect & Security Engineer Aspirant
