# Cursor Project Template

A professional template repository optimized for development in the Cursor IDE with Claude integration.

## Overview

This repository serves as a starter template for projects developed using the [Cursor IDE](https://cursor.sh/), with special focus on leveraging Claude AI capabilities. It includes pre-configured settings, security best practices, and workflow guidance to help you get started quickly.

## Features

- Pre-configured development environment for Cursor IDE
- Claude AI integration setup with best practices
- Security-focused configuration
- Standardized project structure
- Documented workflow patterns

## Getting Started

1. Click "Use this template" on GitHub to create a new repository based on this template
2. Clone your new repository: `git clone [your-repository-url]`
3. Open the project in Cursor IDE
4. Customize the configuration files for your specific project

## Security Considerations

This template follows security best practices:

- `.gitignore` configured to prevent sensitive files from being committed
- `.cursorignore` configured to prevent sensitive files from being indexed or accessed by Cursor
- Environment variable handling recommendations
- Documentation for securing API keys and credentials

### Sensitive Data Protection

To protect sensitive data:

1. Never commit `.env` files or any files containing API keys, passwords, or secrets
2. Use `.env.example` files to document required environment variables without actual values
3. Store sensitive information using a secure secrets management solution
4. Review commits before pushing to ensure no sensitive data is included

### Environment Variables

For projects requiring environment variables:

1. Create a `.env.example` file with placeholder values (no real secrets):
   ```
   # API Keys (NEVER put real keys in this example file)
   API_KEY=your_api_key_here
   SECRET_KEY=your_secret_key_here
   
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=username
   DB_PASSWORD=password
   
   # Application Settings
   NODE_ENV=development
   PORT=3000
   ```

2. Users should:
   - Copy `.env.example` to `.env` (which is git-ignored)
   - Replace placeholders with actual values in the `.env` file
   - Never commit the `.env` file

## Configuration Files

- `.gitignore` - Specifies files to be ignored by Git
- `.cursorignore` - Specifies files to be ignored by Cursor's indexing and AI features
- `.cursorrules` - Defines rules for how Cursor interacts with your project
- Additional configuration files can be added as needed

## License

MIT

## Contributing

Contributions to improve this template are welcome:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a new Pull Request

## Best Practices

### When Using Claude in Cursor

1. **Be specific with instructions** - Provide clear, detailed instructions to get the best results
2. **Use thinking mode** for complex problems - Try prompts like "think hard about this problem"
3. **Leverage context** - Ensure Claude can see relevant files for better assistance
4. **Security first** - Never share sensitive information with Claude

### For Efficient Development

1. **Consistent formatting** - Use a code formatter to maintain consistent style
2. **Document as you go** - Write clear comments and documentation
3. **Regular commits** - Make small, focused commits with descriptive messages
4. **Testing** - Write tests for critical functionality

## Claude in Cursor Configuration Guide

## Project Setup Instructions

When setting up a new project, ask Claude to help with the initial configuration:

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

## Context Priming

After setup, add this to your project README for better context awareness:

```
Claude, please help me understand this codebase:
1. Read the essential files to understand the project structure
2. Run `git ls-files` to see all tracked files
3. Summarize what you understand about the codebase
```

## Single File Agents

Use [UV Single File Agents](https://github.com/disler/single-file-agents) to build powerful agents in a single file:

```javascript
#!/usr/bin/env node
import { runWithSpinner } from '@anthropic-ai/sdk/lib/util';
import * as anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const client = new anthropic.Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Define file editor agent
async function main() {
  // Your agent code here
}

main().catch(console.error);
```

## MCP Servers Configuration

### Understanding MCP Servers
- Think of MCP servers as tools that extend Claude's capabilities
- Two types of servers:
  - **Collectors**: Gather information (fetch, Firecrawl)
  - **Executors**: Perform actions (file editors, database operations)

### Adding MCP Servers
Add servers using JSON format:
```bash
clld mcp add [SERVER_NAME] '{"host":"http://localhost:3000", "prompt":[{"role":"user","content":"Fetch {{url}}"}]}'
```

Or use the wizard:
```bash
clld mcp add --wizard
```

### Firecrawl MCP Server
Add [Firecrawl](https://www.firecrawl.dev/) for advanced web scraping:
```bash
# Install from GitHub
git clone https://github.com/mendableai/firecrawl-mcp.git
cd firecrawl-mcp
npm install
npm start

# Add to Claude in Cursor
clld mcp add firecrawl '{"host":"http://localhost:3000", "prompt":[{"role":"user","content":"Crawl {{url}}"}]}'
```

### Using Slash Commands
Access MCP server features with slash commands:
- `/mcp` - List connected MCP servers
- `/release` - See Claude Code release notes
- `/[prompt-name]` - Use predefined prompts from MCP servers

## Anthropic Text Editor Tool

Use the new [Text Editor Tool](https://docs.anthropic.com/en/docs/build-with-claude/tools/file-editor) with Claude 3.7 Sonnet:

```javascript
// Initialize the text editor tool
const tools = [
  {
    name: "text_editor",
    description: "Edit text files with precision"
  }
];

// Example tool use in your agent
const message = await client.messages.create({
  model: "claude-3-7-sonnet-20250219",
  max_tokens: 4096,
  tools: tools,
  system: "You edit files using the text_editor tool.",
  messages: [
    { role: "user", content: "Edit the README.md file" }
  ]
});
```

## Token-efficient Tool Use

Add the [Token Efficiency Flag](https://docs.anthropic.com/en/docs/build-with-claude/tools/token-efficient) to your agent scripts:

```javascript
// Add to messageArgs
const messageArgs = {
  beta: {
    use_token_efficiency: true
  }
}

// Example usage with Claude
const message = await client.messages.create({
  model: "claude-3-7-sonnet-20250219",
  max_tokens: 4096,
  message_args: messageArgs,
  messages: [{ role: "user", content: "Write a script" }]
});
```

## Thinking Mode

Activate Claude's reasoning capabilities:
- Use commands: `think`, `think harder`, or `ultra think`
- For planning complex tasks: `think hard in the review process`

## Token Management

- Monitor token usage with `/cost`
- Use efficient context windows
- Implement the efficiency flag for ~5-6% token savings

## Remember

- Context is king - ensure Claude can see what it needs
- Close the loop by executing and reviewing code
- Use predefined prompts via slash commands
- Build systems that build systems for you