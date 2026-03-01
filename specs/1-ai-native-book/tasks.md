# Tasks: AI-Native Book Website

**Description**: Task list for AI-Native Book Website implementation
**Input**: Design documents from `/specs/1-ai-native-book/`
**Prerequisites**: `plan.md` (required), `spec.md` (required for user stories)
**Tests**: No explicit test requirements in feature specification.
**Organization**: Tasks are grouped by user story to enable independent implementation.

---

## 🛠️ Format Guide

- **[ID]**: Task Identifier
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- **Paths**: Based on Next.js 15 App Router (`app/`, `components/`, `lib/`, etc.)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.

- [x] **T001** Create Next.js 15 project with TypeScript in root directory
- [x] **T002** Configure Tailwind CSS with shadcn/ui preset
- [x] **T003 [P]** Install and configure shadcn/ui components per documentation
- [x] **T004 [P]** Install and configure MDX dependencies (remark, rehype plugins)
- [x] **T005** Set up project structure following Next.js 15 App Router conventions

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that **MUST** be complete before any user story begins.

- [x] **T006 [P]** Create root layout with `ThemeProvider` in `app/layout.tsx`
- [x] **T007 [P]** Implement responsive design foundation with Tailwind
- [x] **T008** Create dark/light mode toggle component with system preference detection
- [x] **T009 [P]** Set up global styles and typography in `app/globals.css`
- [x] **T010** Create MDX content loader utility in `lib/mdx.ts`
- [x] **T011** Configure navigation and header components in `components/`
- [x] **T012** Set up content directory structure for chapters in `content/chapters/`

> **Checkpoint**: Foundation ready — User story implementation can now begin.

---

## Phase 3: User Story 1 - Browse Premium Book Content (P1) 🎯 MVP

**Goal**: Enable users to browse AI-Native book content with smooth scrolling and progress tracking.

- [ ] **T013 [P] [US1]** Create content structure (5 chapters, 2 topics each) in `content/chapters/`
- [ ] **T014 [P] [US1]** Create `ChapterNav` component in `components/book/`
- [ ] **T015 [US1]** Create `ProgressBar` component in `components/book/`
- [ ] **T016 [US1]** Implement book page with MDX content loader in `app/book/page.tsx`
- [ ] **T017 [US1]** Add smooth scrolling functionality to book page
- [ ] **T018 [US1]** Implement chapter navigation sidebar with scroll spy
- [ ] **T019 [US1]** Create home page with hero section in `app/page.tsx`
- [ ] **T020 [US1]** Add chapter preview cards to home page
- [ ] **T021 [US1]** Add CTA button linking to book page

---

## Phase 4: User Story 2 - Access Information and Contact (P2)

**Goal**: Allow users to access author information and join waitlist.

- [ ] **T022 [P] [US2]** Create About page with author bio in `app/about/page.tsx`
- [ ] **T023 [P] [US2]** Create Contact page with waitlist form in `app/contact/page.tsx`
- [ ] **T024 [US2]** Implement localStorage functionality for waitlist in `lib/waitlist.ts`
- [ ] **T025 [US2]** Create `WaitlistForm` component with validation in `components/`
- [ ] **T026 [US2]** Add author bio and vision content to About page
- [ ] **T027 [US2]** Add form submission feedback and localStorage confirmation

---

## Phase 5: User Story 3 - Optimal Experience (P3)

**Goal**: Ensure optimal experience across different devices and accessibility.

- [ ] **T028 [P] [US3]** Implement responsive design refinements across all pages
- [ ] **T029 [US3]** Add mobile-specific navigation menu
- [ ] **T030 [US3]** Optimize book page layout for mobile reading experience
- [ ] **T031 [US3]** Add performance optimizations and lazy loading
- [ ] **T032 [US3]** Conduct cross-browser compatibility testing
- [ ] **T033 [US3]** Implement accessibility improvements (ARIA, keyboard nav)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final touches and performance.

- [ ] **T034 [P]** Update meta tags and SEO elements across all pages
- [ ] **T035** Performance optimization (aim for bundle size <150KB)
- [ ] **T036 [P]** Add loading states and error boundaries
- [ ] **T037** Content review and copy improvements
- [ ] **T038** Final responsive design adjustments
- [ ] **T039** Prepare for deployment on Vercel

---

## 🏗️ Execution Strategy

1.  **Phase 1 & 2 First**: These are blocking. Do not start US1 until T012 is done.
2.  **Parallel Work**: Tasks marked **[P]** can be done simultaneously by different people or in different tabs.
3.  **MVP Focus**: Complete Phase 3 (US1) to have a "Minimum Viable Product" ready for demo.
