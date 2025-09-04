# Execution Guidelines

## Development Server Management

- **DO NOT execute `npm run dev`** - The development server is always running
- Assume the development environment is already active and available
- Focus on code changes and file operations rather than server management

## Command Execution Principles

1. **Avoid redundant server commands**

   - Never start/restart development servers unless explicitly requested
   - Assume hot reload is working for code changes

2. **Focus on productive operations**

   - Prioritize file edits, code improvements, and documentation
   - Minimize environment setup commands

3. **Respect running processes**
   - Check environment_details for active terminals before executing commands
   - Do not interfere with existing development workflows

## When to Execute Commands

Only execute development commands when:

- Explicitly requested by the user
- Necessary for testing specific functionality
- Required for dependency installation or build processes

## Default Behavior

By default, assume:

- Development server is running on localhost:5173 (or appropriate port)
- Hot reload is enabled and working
- No need to restart the server for code changes
