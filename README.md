# Yu-Shan Lin

Source repository for Yu-Shan Lin’s architectural publication website. The site brings together selected Projects, Writing, Photography, and Sketches within a shared bilingual publication system.

## Technology

- [Astro](https://astro.build/)
- TypeScript
- Component-scoped CSS and shared design tokens
- Static output deployed through GitHub Pages

## Development

Install dependencies:

```sh
npm install
```

Start the Astro development server in background mode:

```sh
astro dev --background
```

Manage the background server:

```sh
astro dev status
astro dev logs
astro dev stop
```

Create a production build:

```sh
npm run build
```

Preview the generated site locally:

```sh
npm run preview
```

## Project Structure

- `src/pages/` contains public routes.
- `src/components/` contains shared publication components.
- `src/layouts/` contains shared page layouts.
- `src/assets/` contains source assets processed by Astro.
- `public/` contains files copied directly into the public build.
- `docs/` contains internal editorial documentation.
- `dist/` is generated production output and is not version-controlled.

Original artwork and archival master files must remain outside this website repository.

## Editorial and Development Guidance

Editorial decisions are governed by [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md).

Development and repository practices are governed by [PROJECT_RULES.md](PROJECT_RULES.md).

These documents are internal project assets. They support work within the private repository and are not part of the public website.

## Deployment

Pushes to the `main` branch trigger the GitHub Pages workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the Astro site, and deploys the generated Pages artifact.

Before deployment:

1. Run the production build.
2. Verify intended routes and assets.
3. Confirm internal documentation and archival files are absent from `dist/`.
4. Confirm repository visibility and production-domain settings.

Only generated publication files should be deployed.
