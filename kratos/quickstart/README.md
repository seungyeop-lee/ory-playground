# Ory Kratos Playground

This project provides a Docker-based playground environment to follow the [Ory Kratos Quickstart Guide](https://www.ory.sh/docs/kratos/quickstart).

It uses Docker Compose to run Ory Kratos, a sample UI, and a MailSlurper instance for email testing. The files for the lab are based on commit `19a41ecd505e1a78dcbefb8c1f264268adfd4415` from the `ory/kratos` repository.

## Prerequisites

*   [Docker](https://www.docker.com/get-started)
*   [Make](https://www.gnu.org/software/make/)

## Key Technologies

*   **Ory Kratos:** An open-source service providing self-service features like user authentication, registration, account recovery, and profile management.
*   **Docker Compose:** A tool for defining and running multi-container applications.
*   **SQLite:** Used as the database for Kratos.
*   **MailSlurper:** An SMTP server and web UI for testing confirmation emails sent by Kratos.

## Getting Started

To start all services, run the following command:

```bash
make up
```

The services will be available at the following URLs:

*   **Kratos Public API:** `http://127.0.0.1:4433/`
*   **Kratos Admin API:** `http://127.0.0.1:4434/`
*   **Self-Service UI:** `http://127.0.0.1:4455/`
*   **MailSlurper:** `http://127.0.0.1:4436/`

## Directory Structure

*   `config/`: Contains the main configuration for Kratos (`kratos.yml`) and the user trait schema (`identity.schema.json`).
*   `scripts/`: Contains shell scripts that demonstrate how to interact with the Kratos API using `curl` and `jq`.
*   `raw/`: Contains the original lab files and the commands to regenerate them.

## Available Commands

The `Makefile` allows you to conveniently run the following tasks:

*   `make up`: Start all services in the background.
*   `make down`: Stop all services.
*   `make clean`: Stop all services and remove all data.
*   `make log`: View the logs for the Kratos container.
*   `make open-test-ui`: Open the sample UI in your browser.
*   `make open-mailslurper`: Open the MailSlurper UI.
*   `make get-signin-flow`: Fetch the Kratos sign-in flow.
*   `make get-signup-flow`: Fetch the Kratos sign-up flow.

## Cleaning Up

To stop all services and remove all related data, run:

```bash
make clean
```