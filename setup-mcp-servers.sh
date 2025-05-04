#!/bin/bash

# Setup script for MCP servers to extend Claude's capabilities in Cursor

echo "Setting up MCP servers for Claude in Cursor..."

# Check if clld is installed
if ! command -v clld &> /dev/null
then
    echo "Error: clld command not found. Make sure Cursor is installed properly."
    exit 1
fi

# Function to add an MCP server
add_mcp_server() {
    local name=$1
    local config=$2
    
    echo "Adding MCP server: $name"
    clld mcp add "$name" "$config"
}

# Function to confirm setup
confirm_setup() {
    local name=$1
    echo "Checking if $name MCP server is configured..."
    clld mcp list | grep -q "$name"
    
    if [ $? -eq 0 ]; then
        echo "✅ $name MCP server is properly configured."
    else
        echo "❌ $name MCP server was not properly configured. Please check for errors."
    fi
}

# Add examples of useful MCP servers
echo "Setting up basic fetch MCP server..."
add_mcp_server "fetch" '{"host":"http://localhost:3000", "prompt":[{"role":"user","content":"Fetch {{url}}"}]}'

echo "Setting up code executor MCP server..."
add_mcp_server "execute" '{"host":"http://localhost:3001", "prompt":[{"role":"user","content":"Execute this code: {{code}}"}]}'

echo "Setting up documentation fetcher MCP server..."
add_mcp_server "docs" '{"host":"http://localhost:3002", "prompt":[{"role":"user","content":"Find documentation for {{query}}"}]}'

# Setup instructions for Firecrawl
echo -e "\nFirecrawl Setup Instructions:"
echo "1. Install from GitHub:"
echo "   git clone https://github.com/mendableai/firecrawl-mcp.git"
echo "   cd firecrawl-mcp"
echo "   npm install"
echo "   npm start"
echo ""
echo "2. Add to Claude in Cursor:"
echo "   clld mcp add firecrawl '{\"host\":\"http://localhost:3000\", \"prompt\":[{\"role\":\"user\",\"content\":\"Crawl {{url}}\"}]}'"

# Confirm setup
echo -e "\nConfirming MCP server setup..."
confirm_setup "fetch"
confirm_setup "execute"
confirm_setup "docs"

echo -e "\nMCP servers setup completed!"
echo "To view all configured MCP servers, use '/mcp' in Cursor"
echo "To fetch documentation, use '/docs [topic]'"
echo "To execute code, use '/execute [code]'"
echo "To fetch web content, use '/fetch [url]'"

# Make the script executable
chmod +x setup-mcp-servers.sh 