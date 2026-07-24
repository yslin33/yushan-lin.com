# Editorial Philosophy

- The website should read as a curated architectural publication rather than a conventional portfolio.
- Prefer editing, selection, and curation over unnecessary rewriting.
- Maintain a quiet, restrained, reflective, and professional editorial voice.
- Avoid promotional language, exaggerated claims, and unnecessary adjectives.
- Preserve the author’s voice while improving clarity and consistency.
- Prioritize consistency across the entire website over optimizing a single page in isolation.

# Language System

- English is the primary publication language of this website.
- Chinese versions are companion editions rather than independent publications.
- English remains the canonical and default route for all bilingual content.
- English is the default language of the entire website.
- Every bilingual article, project, note, and index entry must link to the English version by default.
- Chinese versions are secondary language routes and should be accessed through the language switch.
- Do not make Chinese pages the default destination unless explicitly specified in the future.
- When a bilingual page has both English and Chinese versions:
  - the English route is canonical;
  - indexes and homepage links should point to the English route;
  - the English page should link to the Chinese page;
  - the Chinese page should link back to the English page.
- Future bilingual content must follow this rule automatically.

# Document Language

The HTML `lang` attribute should always match the visible language of the page.

English pages:

`lang="en"`

Chinese pages:

`lang="zh-Hant"`

This applies to the document root rather than only individual content containers.

# Canonical URLs

English pages are the canonical publication pages.

Chinese pages are companion editions.

Whenever appropriate, Chinese pages should expose canonical metadata pointing to the English page.

Future bilingual pages should preserve this behavior.

# Titles

- Use Title Case for English article and project titles.
- Chinese titles follow standard Chinese typography.
- Bilingual titles must remain semantically aligned.
- Use the following approved titles:

English:  
Fractured Cities

Chinese:  
斷裂的城市

English:  
The Memory of the City, The Memory of Beitou

Chinese:  
城市的記憶，北投的記憶

English:  
Memory and Memorial

Chinese:  
記憶與紀念

English:  
Kasiboan

Chinese:  
Kasiboan

English:  
Visions in Beitou / Beitou in Visions: 2024 Memorial

Chinese:  
夢北投：貳零貳肆紀念場

## Approved Bilingual Project Titles

Project titles in English and Chinese do not need to be literal translations of each other.

Each language edition should use its officially approved title.

The approved bilingual titles are the authoritative source for:

- project pages
- browser document titles
- metadata
- project indexes
- language switch labels

Approved titles:

| English | Chinese |
|----------|----------|
| Soft Edges, Hard Grids | 軟邊界與硬格網 |
| Porous Stratification | 滲透層疊 |
| Visions in Beitou / Beitou in Visions: 2024 Memorial | 夢北投：貳零貳肆紀念場 |
| Kasiboan | Kasiboan |
| Memory and Memorial | 記憶與紀念 |
| The Memory of the City, The Memory of Beitou | 城市的記憶，北投的記憶 |
| Fractured Cities | 斷裂的城市 |

# Ordering

Writing:

- Oldest to newest.

Projects:

- Newest to oldest.

- Sorting should be automatic and based on date metadata.
- Undated “In progress” entries appear after dated entries.

# Page Structure

Completed Writing pages should follow this order:

1. Date and language switch
2. Title
3. Divider
4. Editor’s Note
5. Hero image
6. Hero caption
7. Body
8. References, when required
9. Backlink
10. Footer

Completed Project pages should follow this order:

1. Date and language switch
2. Title
3. Divider
4. Opening
5. Hero image
6. Hero caption
7. Metadata
8. Body
9. Backlink
10. Footer

Placeholder pages should retain the publication structure rather than using a disconnected empty shell.

A placeholder page should include:

- date;
- language switch, when bilingual;
- title;
- divider;
- centered “In progress.”;
- backlink;
- footer.

# Architectural Writing

The website presents architecture as a process of observation, making, and reflection.

Writing should:

- describe rather than advertise;
- explain rather than persuade;
- remain analytical without becoming unnecessarily academic;
- remain personal without becoming autobiographical.

Avoid marketing language, exaggerated claims, defensive explanations, and unnecessary self-promotion.

Project text should work alongside drawings, models, diagrams, and photographs rather than attempting to explain every aspect of the design in prose.

Prefer clear architectural language over abstract or inflated terminology.

# English Writing

- English articles are not literal translations.
- Chinese may serve as the source manuscript.
- English versions should be edited for an international architectural readership.
- Preserve the author’s intent, argument, and emotional register.
- Adjust syntax, rhythm, terminology, and paragraph structure when necessary for natural English.
- Do not introduce ideas that are absent from the source manuscript.
- Avoid English that reads like a direct translation from Chinese.

# About Page

- The About page should introduce the author rather than function as a résumé.
- Prefer a concise professional narrative over a chronological biography.
- Present a clear position as an architectural designer, observer, and researcher.
- Avoid repeating information already available in project metadata or the CV.
- Avoid excessive modesty, self-justification, or defensive explanation.
- Maintain a professional but approachable voice.

# Notes

- Notes are curated publications rather than blog posts.
- Each entry should present a complete idea, observation, essay, or body of research.
- Notes should maintain the same editorial seriousness as Projects.
- Avoid casual diary-style framing unless it is editorially intentional.
- Entries may vary in length, but each should have a clear reason for publication.

# Editor’s Note

- “Editor’s Note” is the official visible term.
- The internal component name may remain `EditorsNote.astro`.
- The note should usually contain one to three sentences.
- It should explain the source, context, or editorial history of the article.
- It should not summarize the full article.
- Keep the tone concise, reflective, and publication-oriented.

# Hero Images

- A page should have one primary hero composition.
- A hero composition may consist of either:
  - one image; or
  - multiple images intentionally presented as a single composition.
- Do not split an approved hero composition into separate figures solely to satisfy a numerical rule.
- Hero captions should identify the image rather than explain the project concept.
- Prefer short noun phrases.
- End captions with a period.
- Caption length is a guideline, not a strict word limit.
- Approved existing captions should not be shortened only to satisfy a word-count guideline.

# Figure Captions

- Identify what is shown.
- Do not over-explain the architectural concept.
- Prefer concise noun phrases.
- End with a period.
- Maintain consistent alignment and spacing through shared components.

# Images and Attribution

Original images:

- Do not include an author credit.
- Never write “by Yu-Shan Lin.”

Referenced images:

- Keep the descriptive caption first.
- Add the source note on the same line.

English format:  
Image caption. (*Source listed in References.*)

Chinese format:  
圖片說明。（*來源詳見參考文獻。*）

- Only the source note should be italicized.
- Full bibliographic information belongs only in the References section.

# Quotes

- Preserve the typographic conventions of each language.
- English and Chinese quotation blocks do not need to use identical layouts.
- Use curly quotation marks in English prose.
- Italicize quotations when required by the established article design.
- Keep the attribution on the same line as the quotation.
- Do not italicize the attribution.
- End the attribution with a period.
- English format: “The image of memory, once fixed in words, is erased.” (Italo Calvino, 1972).
- Keep citation formatting consistent within each language edition.

# Keywords

- Italicize conceptual English keywords when they are intentionally introduced as terms.
- Examples:
  - *collect*
  - *recall*
- Do not overuse italics for general emphasis.

# Metadata

- Maintain a consistent order and typographic hierarchy across pages.
- Writing dates display as `YYYY.MM`.
- Academic project dates may use semester format, such as `Spring 2026`.
- Use “United States” rather than “USA” in visible location metadata.
- Internal machine-readable dates may use `YYYY-MM` for sorting.
- Do not expose internal date formats in the visible interface.

## Academic Project Dates

Academic project dates should use semester-based formatting.

Single semester:

English:

- Fall 2025
- Spring 2026

Chinese:

- 2025 秋
- 2026 春

Multi-semester:

English:

- Fall 2023 – Spring 2024

Chinese:

- 2023 秋－2024 春

Use this convention consistently across project pages, project indexes, and related metadata.

Do not add alternative formats such as:

- Autumn 2025
- 2025 年秋季
- 2025 秋季學期

# References

- Add a References section whenever an article directly quotes or materially cites an external source.
- Full citations appear only in References.
- Image captions must not contain full bibliographic entries.
- Maintain the existing hanging-indent and semantic-list system.
- Do not redesign the References layout without editorial approval.
- Use one consistent citation style within each article.
- Prefer typographic consistency in quotation marks, italics, author names, and title formatting.

# Typography

- Use curly apostrophes in visible English prose.
- Use curly quotation marks in visible English prose.
- Use em dashes consistently for parenthetical interruption or emphasis.
- Do not replace apostrophes or quotation marks inside:
  - code;
  - URLs;
  - file paths;
  - identifiers;
  - data fields where straight punctuation is technically required.
- Preserve standard Chinese punctuation in Chinese pages.

# Terminology

Use the following official editorial terms consistently:

- Writing
- Project
- Editor’s Note
- Hero
- Figure
- Caption
- Metadata
- Gallery
- Reference
- References
- Placeholder
- Language switch

Do not introduce multiple labels for the same concept.

# Bilingual Consistency

- English and Chinese versions should match in:
  - article identity;
  - date;
  - title meaning;
  - hero image;
  - image sequence;
  - references, when applicable;
  - language-switch destinations.
- The two languages may differ in:
  - sentence rhythm;
  - quotation layout;
  - punctuation;
  - editorial phrasing.
- Do not force literal translation.
- Treat Chinese as a source manuscript and English as an editorial version for an international architectural readership.

# Reusable Components

- Prefer reusable shared components over page-specific implementations.
- When updating an established editorial pattern, modify the shared component when appropriate rather than duplicating code.
- Avoid introducing page-specific variants unless the page intentionally requires a different editorial structure.
- Shared components should preserve consistency in typography, spacing, metadata, captions, language navigation, placeholders, backlinks, and references.
- Editorial consistency should not depend on manually repeating the same markup across individual pages.

# Editorial Decisions

- Preserve editorial decisions that have already been reviewed and approved.
- Do not reopen or reverse an approved decision merely because another solution is also acceptable.
- Revisit an approved decision only when:
  - it creates a clear project-wide inconsistency;
  - it conflicts with this guide;
  - new content reveals a structural problem;
  - the author explicitly requests reconsideration.
- Existing approved captions should not be rewritten without editorial approval.
- Prefer correction of genuine inconsistency over unnecessary refinement.

# Future Additions

- New Writing and Project pages should follow this guide by default.
- New bilingual pages should use English as the canonical route automatically.
- Do not introduce new layouts, terminology, metadata structures, caption systems, or citation conventions unless this guide is intentionally updated first.
- Reuse established page structures and components before creating new ones.
- New content should strengthen the existing publication system rather than create a separate visual or editorial language.

# Editorial Priority

When in doubt, follow this order:

1. `EDITORIAL_GUIDE.md`
2. Approved editorial decisions
3. Existing shared components
4. Established project-wide conventions
5. Individual page preferences

Never optimize a single page at the expense of overall consistency.

# Decision Principle

When multiple acceptable design or writing solutions exist, prefer the option that improves consistency across the entire website rather than optimizing a single page in isolation.
