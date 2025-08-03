# Ory Elements - Next.js App Router Example

This example demonstrates how to use Ory Elements with the Next.js App Router.

## Project Structure

- `nextjs-app-router/`: The Next.js application.
  - `app/`: The main application code, using the Next.js App Router.
  - `components/`: React components used in the application.
  - `middleware.ts`: Next.js middleware for handling authentication.
  - `ory.config.ts`: Configuration for the Ory SDK.
  - `next.config.mjs`: Next.js configuration.
  - `tailwind.config.ts`: Tailwind CSS configuration.
- `elements/`: A clone of the Ory Elements repository.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Install the dependencies:
   ```bash
   make reset
   cd nextjs-app-router
   npm install
   ```

### Running the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Configuration

The application requires an Ory project. You can create one by following the [Ory documentation](https://www.ory.sh/docs/getting-started).

Once you have a project, you will need to set the following environment variables in a `.env` file in the `nextjs-app-router` directory:

```
ORY_SDK_URL=https://your-project-slug.projects.oryapis.com
```

## Deployment

You can deploy this application to any platform that supports Next.js. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more information.