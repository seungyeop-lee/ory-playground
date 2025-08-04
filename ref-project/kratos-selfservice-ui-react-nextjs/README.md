# Ory Kratos Self-Service UI on Docker

This project provides a local setup to run the [Ory Kratos Self-Service UI](https://github.com/ory/kratos-selfservice-ui-react-nextjs) using Docker.

## Prerequisites

- Docker
- Node.js and npm

## Getting Started

1. **Start Ory Kratos and related services:**

   ```bash
   make kratos-up
   ```

2. **Run the self-service UI:**

   ```bash
   make run-original
   ```

   This will start the Next.js development server.

3. **Open MailSlurper:**

   To check emails sent by Ory Kratos, open MailSlurper:

   ```bash
   make open-mailslurper
   ```

## Available Commands

- `make kratos-up`: Starts the Ory Kratos services in Docker.
- `make kratos-log`: Shows the logs of the Kratos services.
- `make kratos-down`: Stops the Ory Kratos services.
- `make kratos-clean`: Removes the Docker volumes.
- `make open-mailslurper`: Opens the MailSlurper UI in your browser.
- `make run-original`: Starts the self-service UI application.
