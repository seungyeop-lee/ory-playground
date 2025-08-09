# Kratos-NextJS

This project reconfigures [spa5k/kratos-next](https://github.com/spa5k/kratos-next) using the latest version of kratos and the Next.js App Router.

## Getting Started

1. **Start the Kratos Environment:**
   ```bash
   make kratos-up
   ```

2. **Run the Web Application:**
   ```bash
   make run-webapp
   ```
   The web application will be available at `http://127.0.0.1:3000`.

## Commands

The following commands are available in the root `Makefile`:

- `make kratos-up`: Starts the Kratos and MailSlurper services using Docker Compose.
- `make kratos-log`: Tails the logs for the Kratos service.
- `make kratos-down`: Stops the Docker Compose services.
- `make kratos-clean`: Stops and removes all Docker resources (containers, volumes).
- `make open-mailslurper`: Opens the MailSlurper web interface in your browser (`http://127.0.0.1:4436`).
- `make run-webapp`: Installs dependencies (if needed) and starts the Next.js development server for the web application.
