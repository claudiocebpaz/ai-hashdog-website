# Clean code priorities

1. **Read project code first**

   - Before proposing changes, analyze the relevant files in this workspace.
   - Use the real project context (component names, styles, routes).
   - Do not invent structures that already exist.

2. **KISS Principle (Keep It Simple, Stupid)**

   - Always prefer the simplest solution that works.
   - Avoid over-engineering and premature optimization.
   - Choose straightforward implementations over clever but complex ones.
   - If it's not broken, don't fix it unnecessarily.

3. **Prefer simplicity & minimal dependencies**

   - Use the simplest, most readable solution.
   - Choose the most readable code when making implementation decisions.
   - Use Motion only for complex animations that significantly enhance UX.
   - For backend, adjust existing Pages Functions before suggesting new ones.

4. **Ruby-inspired style**

   - Favor clear, concise, expressive code.
   - Avoid duplication and unnecessary abstractions.
   - Small, single-purpose components/functions.

5. **Consistency is critical**

   - Keep consistency in code, style, and architecture across the project.
   - Follow existing conventions for naming, folder structure, and design patterns.
   - Do not mix different styles/approaches within the same module.

6. **Inline comments for readability**

   - Add inline comments when they help developer understanding.
   - Comments explain the _why_, not the obvious _what_.
   - Prioritize onboarding and future maintainability.

7. **Output format**

   - Provide unified diffs or exact file edits.
   - Briefly explain the _why_ of each change.
   - Always include documentation citations.

8. **Refactoring**
   - If you detect duplication, inconsistency, or confusing code, suggest a refactor before adding complexity.
