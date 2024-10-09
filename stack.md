# Cloud-based File Transfer Application Stack

## Front-end
- **React**: JavaScript library for building user interfaces.
- **CSS**: For responsive design and styling.
- **Netlify/Vercel**: Free-tier hosting for static websites with continuous deployment from GitHub.

## Back-end
- **Flask (Python)**: Lightweight Python framework for building web APIs.
- **Heroku**: Free-tier hosting for deploying Flask applications (alternative: Render).
- **Docker**: Containerize your application for easier deployment and scalability.
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment.

## Cloud Storage and APIs
- **AWS S3**: Free-tier storage for handling file uploads/downloads (5GB free).
- **Google Drive API**: Integration for uploading and managing files on Google Drive.
- **Dropbox API**: Free-tier integration to allow file transfer to/from Dropbox.

## Databases
- **PostgreSQL (ElephantSQL/Heroku Postgres)**: Free-tier relational database for storing file metadata (20MB/1000 rows).
- **MongoDB Atlas**: Free-tier NoSQL database (512MB) for file metadata or user information.

## DevOps and Hosting
- **AWS EC2**: Free-tier virtual machine for running your back-end (750 hours/month).
- **AWS Lambda**: Serverless functions for handling API calls and file transfers.
- **AWS Elastic Container Service (ECS)**: Free-tier container orchestration for Docker containers.
- **Heroku**: Deployment of Flask app with Postgres (free-tier hosting).

## SFTP and Networking
- **OpenSSH (EC2 Instance)**: Simulate SFTP transfers using OpenSSH on an AWS EC2 instance.
- **FileZilla (Local Server)**: Free SFTP server for testing file transfers locally.

## Monitoring and Logging
- **Sentry**: Free-tier error tracking and monitoring.
- **LogDNA**: Free-tier centralized logging.

## Version Control and Collaboration
- **GitHub**: For code versioning and collaboration.
- **GitHub Pages**: Option for hosting documentation or landing page.

## Tools
- **Visual Studio Code (VSCode)**: Code editor with Flask, Python, and React extensions.
- **Postman**: For testing API endpoints.
- **Docker Hub**: For storing and sharing Docker images.
