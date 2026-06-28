# Software Packaging and Dependency Management with Node.js

## Project Overview

This project demonstrates the principles of software packaging in a Node.js application using Express. It was completed as part of a DevOps learning project to understand how applications are packaged, versioned, configured, and prepared for deployment across different environments.

---

# Project Objectives

The objectives of this project were to:

* Understand the role of software packaging in the software development lifecycle.
* Learn how dependencies are managed using npm.
* Apply Semantic Versioning (MAJOR.MINOR.PATCH).
* Configure environment variables separately from application code.
* Create a reusable and deployable Node.js package.
* Verify application consistency across multiple environments.
* Perform dependency security auditing.
* Automate testing and generate artifact.
* Document the complete packaging workflow.

---

# Technologies Used

* Node.js
* Express.js
* npm
* dotenv
* Nodemon
* Jest
* Git
* GitHub
* Visual Studio Code

---

# Project Structure

```text
software-packaging-nodejs/
│
├── .github/
│   └── workflows/
│
├── screenshots/
│   ├── 01-app-fail-error.png
│   ├── 02-app-running-dev.png
│   ├── 03-app-running-production.png
│   ├── 04-before-audit-fix.png
│   ├── 05-after-audit-fix.png
│   └── 06-localhost-success.png
│
├── src/
│   ├── app.js
│   └── routes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

# Software Packaging Process

The application was packaged using the standard Node.js ecosystem.

The workflow followed these steps:

1. Initialize the project using npm.
2. Configure project metadata in `package.json`.
3. Install project dependencies.
4. Install development dependencies.
5. Configure environment variables using dotenv.
6. Organize the application into modular components.
7. Configure npm scripts for application execution.
8. Verify application execution in different environments.
9. Perform dependency security auditing.
10. Automate testing and generate artifact
11. Verify artifact integrity

---

# Dependency Management

Runtime dependencies:

* express
* dotenv

Development dependencies:

* nodemon

Dependencies were installed using:

```bash
npm install express dotenv

npm install --save-dev nodemon

npm install --save-dev jest

npm install --save-dev supertest
```

Dependency versions were automatically locked using:

```text
package-lock.json
```

This ensures reproducible installations across development, testing, staging, and production environments.

---

# Packaging Commands Used

Initialize npm project:

```bash
npm init -y
```

Install dependencies:

```bash
npm install express dotenv
```

Install development dependency:

```bash
npm install --save-dev nodemon
```

Start the application:

```bash
npm start
```

Run in development mode:

```bash
npm run dev
```

Install project dependencies on another machine:

```bash
npm install
```

Audit project dependencies:

```bash
npm audit
```

Automatically fix dependency vulnerabilities:

```bash
npm audit fix
```

Test execution

```bash
npm test
```
Generate distributable artifact.

```bash
npm pack
```
Verify package integrity

```bash
sha256sum nodejs-software-packaging-project-1.1.0.tgz > SHA256SUMS
```

```bash
sha256sum -c SHA256SUMS 
```

---

# Environment Configuration

Environment-specific values were separated from the application source code using dotenv.

To protect sensitive information, only `.env.example` is committed to the repository, while `.env` is excluded using `.gitignore`.

---

# Versioning Strategy

This project follows Semantic Versioning (SemVer).

Format:

```
MAJOR.MINOR.PATCH
```

Current version:

```
1.0.0
```

Versioning strategy:

* MAJOR version increases for incompatible changes.
* MINOR version increases when new features are added without breaking existing functionality.
* PATCH version increases for bug fixes and minor improvements.

---

# Package Verification

The application was tested in multiple environments.

Development Environment

```text
NODE_ENV=development
```

Production Environment

```text
NODE_ENV=production
```

The application successfully started and produced identical functionality in both environments, demonstrating that the package can be deployed consistently.

To verify dependency reproducibility, the `node_modules` directory was removed and restored using:

```bash
npm install
```

The application executed successfully after reinstalling all dependencies.

---

# Dependency Security Audit

The project dependencies were audited using npm's built-in security scanner.

Command used:

```bash
npm audit
```

Where applicable, vulnerabilities were resolved using:

```bash
npm audit fix
```

## Automated Testing

Jest was added as the project's automated testing framework.

Tests can be executed using:

```bash
npm test
```
The application endpoint is tested to verify successful responses and package integrity after installation

---

## Package Artifact

The application package was generated using:

```bash
npm pack
```

Generated artifact: 

```text
software-packaging-nodejs-1.1.0.tgz
```

This archive can be installed using:
```bash
npm install software-packaging-nodejs-1.1.0.tgz
```

---

## Package Integrity Verification

A SHA256 checksum was generated for the packaged artifact.

Generate checksum:

```bash
sha256sum software-packaging-nodejs-1.1.0.tgz
```
Verify:
```bash
sha256sum -c SHA256SUMS
```

---

## Release Management

Project releases follow Semantic Versioning.

Git tags are used to identify stable releases.

Example:

v1.0.0

v1.1.0

Summary:

* Dependencies were scanned for known security vulnerabilities.
* Outdated packages were reviewed.
* Available fixes were applied automatically where possible.
* Final audit confirmed that the application dependencies were in a healthy state for development.

---

# Challenges Encountered

## Challenge 1: Application Failed to Start

When I initially attempted to start the application using:

```bash
npm run dev
```

npm returned an error because the `package.json` file did not contain a `dev` script.

### Solution

I updated the `scripts` section in `package.json` by adding:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "audit": "npm audit",
  "audit:fix": "npm audit fix"
}
```

After adding these scripts, the application started successfully.


---

## Challenge 2: Preventing Sensitive Files from Being Tracked

During development, Git detected the `.env` file, which could expose sensitive configuration values if committed.

### Solution

I created a `.gitignore` file and excluded:

```text
node_modules/
.env
```

This ensures that sensitive configuration files and installed dependencies are not pushed to the repository.

---

# Lessons Learned

Through this project, I gained practical experience in:

* Software packaging concepts.
* npm dependency management.
* Semantic Versioning.
* Environment-specific configuration.
* Express application structuring.
* Security auditing using npm.
* Package reproducibility.
* Git version control.
* DevOps best practices for application deployment.

This project strengthened my understanding of how software packaging fits into the DevOps lifecycle by ensuring that applications can be built, distributed, and deployed consistently across different environments.

---

# Future Improvements
I look forward to workiing on:

* Containerizing the application using Docker.
* Automating packaging with GitHub Actions.
* Publishing packages to an artifact repository.
* Implementing automated testing.
* Integrating CI/CD pipelines for continuous delivery.

---

