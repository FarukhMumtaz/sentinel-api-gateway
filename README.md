🛡️ Sentinel API Gateway
Production-Ready Node.js Backend & Containerized Infrastructure

Sentinel API Gateway is more than just a simple backend; it is a proof-of-concept for a Security-First Architecture. The primary objective of this project is to demonstrate the seamless integration of modularity and scalability, where the backend logic and the database layer are completely decoupled yet interact with high precision.

By implementing Infrastructure as Code (IaC) principles, I have ensured that the deployment process is "One-Click," reproducible, and free from configuration drift.
🚀 Quick Deployment Guide

This system is designed for high availability and rapid setup. Any developer can spin up the entire environment in under 2 minutes.
1. Environment Configuration

First, create a .env file in the root directory and define the following credentials:

DB_USER=farukh_admin

DB_PASSWORD=your_secure_password

DB_NAME=sentinel_db

DB_HOST=db

DB_PORT=5432

API_KEY=your_secret_access_key
2. Launching the Stack

Execute the following commands in your terminal:

git clone https://github.com/FarukhMumtaz/sentinel-api-gateway.git

cd sentinel-api-gateway

docker compose up --build -d
🏗️ Technical Deep Dive
Architectural Logic

The system operates on a Modular Micro-Service pattern. Using Docker Compose, I have isolated PostgreSQL and Node.js into their own containers. The significant advantage of this approach is future-proofing: if we need to migrate the database or scale the application service, the entire ecosystem remains undisturbed.
Sentinel Guard (The Security Layer)

For security, I implemented a custom High-Priority Auth Middleware. Every incoming request is strictly validated, ensuring that only authenticated traffic reaches sensitive internal routes.
💎 Engineering Highlights

    Database Pooling: Utilized pg-pool to manage active connections efficiently, preventing resource exhaustion under heavy loads.

    Data Persistence: Implemented Docker volumes to ensure that the database remains persistent and secure, even if the containers are destroyed or restarted.

    Secrets Management: All sensitive information is injected via environment variables, adhering to industry-standard security practices for production environments.

🛠️ Tech Stack & Standards

    Backend: Node.js (Express Framework)

    Database: PostgreSQL 15 (Alpine Edition)

    Infrastructure: Docker & Docker Compose

    Development Standards: Clean Code principles, Modular Routing, and Security Filtering.

👨‍💻 About the Developer

Farukh Mumtaz Cloud Architect & Security Engineer Aspirant

I developed this project as a key milestone in my journey toward becoming a Cloud Engineer. My focus is always on designing systems that are not only high-performance but also "Iron-Clad" in terms of security and resilience
