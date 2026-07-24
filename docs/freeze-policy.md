# Page Freeze Policy

## Purpose

This policy governs how publication pages move from active development into production. The website is managed as a sequence of versioned releases rather than as an indefinitely editable collection of pages.

Editorial decisions remain governed by `EDITORIAL_GUIDE.md`. Development practices remain governed by `PROJECT_RULES.md`. This document defines page status, release approval, and change control.

## Publication Lifecycle

Every public page must have one of the following statuses:

### Draft

- The page is under active development.
- Content, structure, components, and presentation may change.
- Draft pages may use the approved publication placeholder when content is not ready.

### Review

- The page is undergoing design, content, or technical review.
- Structural changes remain permitted.
- Review findings should be resolved or explicitly accepted before the page advances.

### Candidate

- The page is considered feature-complete.
- Only small refinements are expected.
- Structural changes require explicit approval from the site owner.
- The page must complete its review checklist before it can be proposed for freezing.

### Frozen

- The page is production-ready and treated as read-only.
- A Frozen page must have an assigned release version and freeze date.
- A page may become Frozen only after visual approval by the site owner.
- A successful build or automated validation is necessary but is not sufficient for freezing.

## Freeze Approval

The site owner is the only authority who may approve a page for Frozen status.

Before freezing a page:

1. Complete its Candidate review checklist.
2. Verify desktop and mobile presentation.
3. Confirm content, images, captions, metadata, interactions, links, and basic accessibility.
4. Run the production build.
5. Obtain explicit visual approval from the site owner.
6. Record the version and freeze date in `docs/frozen-pages.md`.

No page should be marked Frozen based only on automated checks.

## Change Control

### Draft and Review pages

Draft and Review pages may be changed within the scope of an approved task.

### Candidate pages

Small corrections and refinements are permitted. Structural changes require explicit approval.

### Frozen pages

Frozen pages must not be modified without explicit approval. Allowed changes are limited to:

- typo or punctuation corrections;
- broken-link repairs;
- accessibility repairs that preserve approved presentation;
- replacement of a missing or broken asset without changing the approved composition;
- an explicitly approved version update.

Content revisions, layout changes, component behavior changes, image-order changes, caption-system changes, or other presentation changes require the site owner to approve reopening the page or creating a new version.

## Shared Component Protection

Before changing a shared component, identify every page that consumes it.

If a proposed component or shared-style change could alter a Frozen page, stop and obtain explicit approval before implementation. A passing build does not authorize an indirect change to Frozen behavior.

When practical:

- extend the component without changing its Frozen behavior;
- introduce an isolated variant for unfrozen pages;
- or duplicate a narrowly scoped component when isolation is safer than modifying the Frozen system.

Duplication should remain deliberate and documented; it is not a substitute for understanding component consumers.

## Release Versions

### Release v1.0

The initial approved publication.

### Release v1.1

A minor release for limited, approved changes such as:

- typo corrections;
- broken-link repairs;
- minor accessibility fixes;
- approved image replacement;
- other non-structural corrections.

### Release v2.0

A major release that may include:

- new Projects;
- new Writing;
- new publication features;
- substantial structural or visual changes;
- explicitly approved revisions to Frozen pages.

Version numbers describe approved publication states. They should not be incremented for unapproved development work.

## Reopening a Frozen Page

When a requested change exceeds the allowed Frozen scope:

1. Identify the affected page and current version.
2. Explain whether the change is direct or caused by a shared dependency.
3. Obtain explicit approval to reopen or version the page.
4. Move the page to Candidate or another approved status while work is performed.
5. Repeat visual review and freeze approval before assigning the next Frozen version.

## Current Registry

The authoritative page-by-page status, version, freeze date, allowed changes, and Candidate review checklists are recorded in `docs/frozen-pages.md`.
