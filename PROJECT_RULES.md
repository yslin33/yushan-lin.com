# Project Philosophy

This repository supports a long-term publication system. Development should favor clarity, consistency, maintainability, and deliberate change over speed or novelty.

Treat the existing website as an established system. New work should extend that system coherently rather than introduce an unrelated visual, editorial, or technical language.

# Editorial Authority

`EDITORIAL_GUIDE.md` is the single source of truth for editorial decisions.

Use this document for development process and repository practices. Do not use it to redefine titles, language policy, page structure, typography, captions, metadata, references, or other editorial conventions.

When a task requires editorial judgment:

1. Read `EDITORIAL_GUIDE.md`.
2. Preserve approved decisions recorded there.
3. Ask for direction if the requested change conflicts with the guide.
4. Update the guide only when the author explicitly approves a new editorial rule.

# Development Workflow

Before changing the project:

1. Read the user’s request completely.
2. Read `EDITORIAL_GUIDE.md` when the task affects published content or presentation.
3. Inspect the relevant pages, components, data, and shared styles.
4. Identify existing patterns that can satisfy the request.
5. Check for related routes, language editions, and responsive behavior.
6. Confirm that the proposed scope does not alter unrelated work.

During implementation:

- Make the smallest coherent change that fulfills the request.
- Preserve unrelated content and existing user changes.
- Prefer explicit, understandable code over clever abstractions.
- Avoid speculative features and unrequested redesigns.
- Do not silently broaden the scope of a task.

After implementation:

- Review the final diff.
- Run validation proportional to the change.
- Confirm that affected routes still build.
- Report files changed, behavior verified, and any unresolved limitation.

# Validation Before Implementation

Do not assume that a reported problem has the expected cause.

Before editing:

- inspect the actual source and rendered structure;
- identify the component or rule controlling the behavior;
- check for duplicated components, conflicting styles, stale paths, and invalid data;
- distinguish a content problem from a layout, component, or build problem;
- verify whether the requested behavior already exists.

For audit or diagnostic requests, do not modify files unless the user separately authorizes implementation.

# Shared Component Philosophy

Use shared components for established patterns that recur across pages.

- Extend an appropriate shared component when a change is genuinely system-wide.
- Avoid copying component markup into individual pages.
- Do not force unrelated content into an abstraction merely to reduce file count.
- Keep component interfaces small, explicit, and reusable.
- Use page-level variants only when the page intentionally requires a different structure.
- Preserve accessibility, semantic markup, and responsive behavior when changing shared components.

Before refactoring a shared component, inspect every current consumer and confirm that the change will not alter approved pages unintentionally.

# Repository Organization

Keep files in the established project structure.

- Pages belong with the project’s route sources.
- Reusable presentation belongs in shared components.
- Shared data types and utilities should remain independent of individual pages.
- Publicly served files belong only in designated public asset locations.
- Source assets should remain separate from public deployment assets when the project’s asset pipeline requires it.
- Internal documentation belongs at the repository root or in an internal documentation directory, not in public routes.

Do not create duplicate files, temporary copies, alternate components, or abandoned experiments without a clear need and removal plan.

# Route and Slug Scope

Slugs should follow the approved title within the content’s existing type and route namespace.

- Project slug changes remain under `/projects/`.
- Writing slug changes remain under `/writing/`.
- Notes and other publication types remain within their established sections.
- Filenames and slugs should use the stable primary content identifier, which may be shorter than the complete approved display title.
- For `Visions in Beitou / Beitou in Visions: 2024 Memorial`, the stable primary project identifier is `Visions in Beitou`, so its filenames and routes remain `visions-in-beitou`.
- Renaming a title or slug does not authorize moving content between sections.
- Reclassify content only when the author explicitly requests an information-architecture change.

# Internal Intellectual Property

The repository contains confidential design knowledge and development history.

The following are internal project assets and must never be deployed, published, or linked from the public website unless the author explicitly requests it:

- `PROJECT_RULES.md`
- `EDITORIAL_GUIDE.md`
- `ARCHITECTURE_GUIDE.md`
- Design System documentation
- Development Notes
- AI prompts
- AI collaboration records
- Roadmaps
- planning documents
- unpublished research and working files

Do not copy internal documentation into public page content, generated routes, downloadable assets, metadata, or client-side bundles.

# Deployment Rules

The public deployment should contain only the intended publication and its required runtime assets.

Before deployment:

- run the production build;
- confirm that all intended routes generate successfully;
- verify that public links resolve to the correct language and destination;
- confirm that internal documentation and working files are absent from the build output;
- check that unpublished source material is not exposed;
- preserve the configured hosting base path and asset behavior.

Do not deploy automatically unless deployment is within the user’s request.

# Refactoring Philosophy

Refactoring should solve a demonstrated structural problem.

- Do not refactor unrelated code while completing a focused content or visual task.
- Preserve behavior before improving internal organization.
- Prefer incremental, reviewable changes over broad rewrites.
- Remove obsolete code only after confirming that it has no active consumers.
- Avoid premature abstraction.
- Do not reverse an established architecture merely because another approach is also valid.

When a refactor affects multiple publication systems, separate it from editorial content changes whenever practical.

# AI Collaboration Guidelines

AI assistants should work as careful collaborators rather than autonomous redesigners.

- Read all repository guidance relevant to the task.
- Follow the user’s latest explicit scope.
- Inspect before editing.
- Never invent missing dates, translations, citations, credits, or project facts.
- Preserve supplied wording when the user identifies it as final.
- Report ambiguity rather than silently resolving it through guesswork.
- Do not expose private repository content in public outputs.
- Do not claim validation that was not actually performed.
- Clearly distinguish completed work from recommendations.
- Avoid modifying files during audits unless implementation is authorized.

When instructions conflict, follow the authority order defined by the repository guidance and request clarification when the conflict cannot be resolved safely.

# Future Expansion

New pages, languages, media, and publication types should extend the established architecture.

Before adding a new system:

1. Determine whether an existing component or data pattern already supports it.
2. Confirm whether the change requires an editorial decision.
3. Keep canonical routes and companion-language relationships explicit.
4. Ensure new content can be maintained without manual duplication.
5. Validate that the expansion does not expose internal material or unfinished assets.

Future development should strengthen the publication as one coherent system rather than create isolated page experiences.
