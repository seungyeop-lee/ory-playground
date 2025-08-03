# Ory Elements - Next.js App Router Example (Raw)

This directory contains the raw, unmodified source code for the Ory Elements Next.js App Router example. It is used to fetch the original project from the Ory Elements repository.

## Purpose

The primary purpose of this directory is to clone the `ory/elements` repository and copy the `nextjs-app-router` example to the parent directory. This ensures that the example is always based on a specific, known version of the Ory Elements project.

## Makefile Commands

The `Makefile` in this directory provides the following commands:

*   **`clone`**: Clones the `ory/elements` repository from GitHub and checks out a specific commit (`f6ee245239783b86fc3205098372a8b67e650c35`).
*   **`copy`**: Copies the `nextjs-app-router` example from the cloned `elements` repository to the `nextjs-app-router` directory within this project.
*   **`reset`**: A convenience command that runs `clone` and `copy` in sequence to reset the example to its original state.

**Note:** This directory is not intended for running or modifying the Next.js application directly. Its sole purpose is to manage the source code of the example.
