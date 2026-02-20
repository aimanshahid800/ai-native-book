<!-- SYNC IMPACT REPORT
Version change: N/A → 1.0.0 (initial creation)
Modified principles: N/A (new principles created)
Added sections: Core Principles (6), Additional Constraints, Development Workflow, Governance
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/commands/sp.constitution.md ✅ updated
Follow-up TODOs: None
-->

# AI-Native Driven Development Book Website Constitution

## Core Principles

### Zero-Dependency UI Design
No external UI libraries except shadcn/ui and Tailwind CSS. All components must be built with these foundational tools to maintain lightweight, consistent design and reduce bundle size overhead.

### Mobile-First Glassmorphism Design
Design mobile-first with glassmorphism and gradient aesthetics. All components must be responsive from mobile devices upward, with glass-like transparency effects and gradient color schemes implemented through Tailwind classes.

### MDX Content Management
All book content must be authored in MDX format for easy future updates. Chapter content lives in /content/chapters/ directory, allowing seamless integration of React components within markdown content for enhanced interactivity.

### Performance Optimization
Achieve lightning-fast load times with First Contentful Paint under 1.5 seconds. Total bundle size must remain under 150KB (excluding images) through code splitting, lazy loading, and aggressive optimization techniques.

### Accessibility Compliance
Maintain 100% accessibility with proper ARIA attributes and comprehensive keyboard navigation support. All components must meet WCAG 2.1 AA standards with semantic HTML structure and proper focus management.

### Dark/Light Mode Toggle
Implement system-aware dark/light mode switching with smooth transitions. User preference must be remembered across sessions using localStorage or system preference detection.

## Additional Constraints

Technology Stack: Next.js 15, TypeScript strict mode, Tailwind CSS, shadcn/ui
Deployment: Vercel (free tier)
Pages: Limited to 4 pages only (Home, Book, About, Contact)
Content Structure: Book consists of 5 chapters with 2 topics each
Component Reusability: All components must be designed for reuse across the site
Bundle Size: Total JavaScript/CSS bundle must remain under 150KB without images

## Development Workflow

Code Quality: All code must pass TypeScript strict mode compilation
Testing: Components must include appropriate unit and integration tests
Review Process: All PRs require adherence to constitution principles
Documentation: Component props and functionality must be documented with JSDoc
Version Control: Follow conventional commits with descriptive messages

## Governance

This constitution governs all development decisions for the AI-Native Driven Development book website. All code reviews must verify compliance with these principles. Amendments require documentation of rationale and approval from project stakeholders. New features must align with the four-page constraint and performance requirements.

**Version**: 1.0.0 | **Ratified**: 2026-02-20 | **Last Amended**: 2026-02-20
