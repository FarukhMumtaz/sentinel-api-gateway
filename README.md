🛡️ Sentinel API Gateway
Node.js Backend & PostgreSQL with Docker

This project is a solid example of a secure and scalable backend. Instead of just making a simple API, I focused on a Security-First approach. The app and the database are completely separate but work together perfectly using Docker containers.

I used Infrastructure as Code (IaC) so that anyone can deploy this entire setup with just one or two commands without facing any configuration issues.
🚀 How to Deploy

I designed this to be quick. You can get the whole system running in less than 2 minutes.

1. Setup Environment

Create a file named .env in the main folder and add these lines:

DB_USER=farukh_admin

DB_PASSWORD=your_secure_password

DB_NAME=sentinel_db

DB_HOST=db

DB_PORT=5432

API_KEY=your_secret_access_key

2. Run the Project

Just run these commands in your terminal:

git clone https://github.com/FarukhMumtaz/sentinel-api-gateway.git
cd sentinel-api-gateway
docker compose up --build -d

🏗️ How it Works
The Architecture

Everything runs in a Modular way. By using Docker, the Node.js app and the PostgreSQL database stay isolated. This is great for the future—if we need to change the database or grow the app, we don't have to rewrite everything.
Security (Sentinel Guard)

I built a custom Auth Middleware to protect the API. It checks every single request coming in. If the traffic isn't authenticated, it can't touch the sensitive parts of the system.

💎 Key Features

    Database Pooling: Used pg-pool so the system doesn't crash under heavy traffic.

    Data Safety: Used Docker volumes so your data stays safe even if the containers stop.

    Safe Credentials: All passwords and keys stay in the .env file, not in the code.

🛠️ Tech Stack

    Backend: Node.js & Express

    Database: PostgreSQL

    DevOps: Docker & Docker Compose

👨‍💻 Developed By

Farukh Mumtaz
Cloud Architect & Security Engineer Aspirant
