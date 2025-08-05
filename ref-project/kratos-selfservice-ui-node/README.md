# Ory Kratos Self-Service UI Node.js Reference

This project provides a local development environment for running the Ory Kratos Self-Service UI Node.js reference implementation from https://github.com/ory/kratos-selfservice-ui-node. It is a reference implementation of a self-service UI for Ory Kratos, written in Node.js using Express, Handlebars, and TypeScript.

## Prerequisites

- Docker
- Node.js
- npm

## Getting Started

### 1. Start Ory Kratos

To get started, you need to run Ory Kratos. You can do this using the provided Docker Compose setup:

```sh
make kratos-up
```

This command starts the Ory Kratos services, including a database and a mail server for testing.

### 2. Run the Self-Service UI

Once Ory Kratos is running, you can start the self-service UI:

```sh
make run-original
```

This will install the necessary dependencies and start the Node.js application. The UI will be available at `http://127.0.0.1:4455`.

### 3. Open the Application

To open the application in your browser, you can use the following command:

```sh
make open-original
```

This will open the welcome page of the self-service UI.

## Available Commands

The `Makefile` provides several commands to manage the environment:

- `make kratos-up`: Start the Ory Kratos services.
- `make kratos-log`: View the logs of the Ory Kratos services.
- `make kratos-down`: Stop the Ory Kratos services.
- `make kratos-clean`: Stop and remove the Ory Kratos services and associated volumes.
- `make open-mailslurper`: Open the MailSlurper UI to inspect emails sent by Ory Kratos.
- `make run-original`: Install dependencies and run the self-service UI application.
- `make open-original`: Open the self-service UI in a browser.
