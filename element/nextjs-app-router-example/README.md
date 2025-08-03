# Ory Elements Next.js App Router Example (Self-Hosted)

This project demonstrates how to run the [Ory Elements Next.js App Router example](https://github.com/ory/elements/tree/main/examples/nextjs-app-router) in a self-hosted
environment.

It addresses CORS issues that may arise in a self-hosted setup, with a solution based on the discussion in [ory/elements issue #559](https://github.com/ory/elements/issues/559).

## Structure

* `/kratos`: Contains the Docker Compose configuration to run Ory Kratos and MailSlurper.
* `/raw`: Manages the source code for the example. It uses a `Makefile` to clone the specific version from the `ory/elements` repository.
* `/webapp`: The Next.js application itself.

## Getting Started

### Prerequisites

* Docker
* Node.js

### 1. Start the Ory Kratos Environment

Navigate to the `kratos` directory and start the services:

```bash
cd kratos
make up
```

### 2. Run the Web Application

Navigate to the `webapp` directory, install dependencies, and start the development server:

```bash
cd webapp
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## Makefile Commands

### Kratos (`/kratos/Makefile`)

* `make up`: Start the Docker containers in detached mode.
* `make log`: View the logs for the Kratos container.
* `make down`: Stop the Docker containers.
* `make clean`: Stop and remove the Docker containers and volumes.
* `make open-mailslurper`: Open MailSlurper in your default browser.

### Raw Source (`/raw/Makefile`)

* `make clone`: Clones the `ory/elements` repository and checks out a specific commit.
* `make copy`: Copies the `nextjs-app-router` example from the cloned repository.
* `make reset`: Performs both `clone` and `copy` to reset the source code.
