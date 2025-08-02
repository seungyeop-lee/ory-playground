# Ory Kratos Quickstart Playground

This directory contains a playground environment to facilitate hands-on practice with the [Ory Kratos Quickstart Guide](https://www.ory.sh/docs/kratos/quickstart).

It uses Docker Compose to set up Ory Kratos, a self-service UI, and a MailSlurper instance for email testing.

## Prerequisites

*   [Docker](https://www.docker.com/get-started)
*   [Make](https://www.gnu.org/software/make/)

## Getting Started

### 1. Initialization

Run the initialization command to fetch the necessary Ory Kratos configurations.

```bash
make init
```

### 2. Running the Environment

Start all services (Kratos, UI, MailSlurper) with:

```bash
make up
```

The services will then be available at the following URLs:

*   **Kratos Public API:** `http://127.0.0.1:4433/`
*   **Kratos Admin API:** `http://127.0.0.1:4434/`
*   **Self-Service UI:** `http://127.0.0.1:4455/`
*   **MailSlurper:** `http://127.0.0.1:4436/`

## Available Commands

This playground provides a `Makefile` for convenient task execution:

*   `make up`: Start all services in the background.
*   `make down`: Stop all services.
*   `make clean`: Stop all services and remove all data volumes.
*   `make log`: View the logs for the Kratos container.
*   `make open-test-ui`: Open the self-service UI in your default browser.
*   `make open-mailslurper`: Open the MailSlurper UI to inspect emails sent by Kratos.
*   `make get-signin-flow`: Fetch the current sign-in flow from the Kratos API.
*   `make get-signup-flow`: Fetch the current sign-up flow from the Kratos API.

## Cleaning Up

To stop all services and remove the containers and their data, run:

```bash
make clean
```