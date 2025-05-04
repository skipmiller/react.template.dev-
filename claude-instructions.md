# Claude Context Priming Instructions

## Project Setup Commands
When setting up a new project, use this command with Claude:

```
Claude, please help me set up this project:
1. Do we need to set up a local repository?
2. Should we create a GitHub repository?
3. If using GitHub, what should the repository URL be?
4. Is there an existing project URL to clone?
5. Set up the repository and sync with remote if needed
6. Configure additional tools like MCP servers
7. Fetch any required documentation
```

## Project Context Commands
When starting to work with this codebase, use these commands with Claude:

```
Claude, please help me understand this codebase:
1. Read the essential files to understand the project structure
2. Run `git ls-files` to see all tracked files
3. Summarize what you understand about the codebase
```

## Thinking Mode Commands
Use these commands to activate Claude's reasoning capabilities:
- `think` - Basic reasoning
- `think harder` - More detailed reasoning
- `ultra think` - Most comprehensive reasoning
- `think hard in the review process` - For planning complex tasks

## Token Management
- Use `/cost` to monitor token usage
- Implement token-efficient tool use with the `use_token_efficiency: true` flag

## Useful Claude Commands in Cursor
- `/mcp` - List connected MCP servers
- `/release` - See Claude Code release notes
- `help` - Get help with Claude commands 