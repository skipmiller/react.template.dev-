#!/bin/bash

# Repository setup script for a new project

echo "Project Repository Setup"
echo "======================="

# Function to get user input with default value
get_input() {
    local prompt=$1
    local default=$2
    local input

    if [ -n "$default" ]; then
        read -p "$prompt [$default]: " input
        echo ${input:-$default}
    else
        read -p "$prompt: " input
        echo $input
    fi
}

# Function to check if git is initialized
check_git_init() {
    if [ -d ".git" ]; then
        echo "Git repository already initialized."
        return 0
    else
        echo "Initializing git repository..."
        git init
        return $?
    fi
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed. Please install git first."
    exit 1
fi

# Get setup preferences
SETUP_LOCAL=$(get_input "Set up local repository? (yes/no)" "yes")
SETUP_GITHUB=$(get_input "Set up GitHub repository? (yes/no)" "no")

# Setup local repository if needed
if [[ "$SETUP_LOCAL" == "yes" ]]; then
    check_git_init
    
    # Initial commit if needed
    if [ -z "$(git log -1 --oneline 2>/dev/null)" ]; then
        echo "Creating initial commit..."
        git add .
        git commit -m "Initial commit"
    fi
fi

# Setup GitHub repository if needed
if [[ "$SETUP_GITHUB" == "yes" ]]; then
    # Check if GitHub CLI is installed
    if ! command -v gh &> /dev/null; then
        echo "Warning: GitHub CLI (gh) is not installed. You'll need to set up the remote manually."
    else
        REPO_NAME=$(get_input "GitHub repository name" "$(basename $(pwd))")
        REPO_VISIBILITY=$(get_input "Repository visibility (public/private)" "private")
        
        echo "Creating GitHub repository: $REPO_NAME ($REPO_VISIBILITY)..."
        gh repo create "$REPO_NAME" --"$REPO_VISIBILITY" --source=. --remote=origin
        
        # Push to GitHub
        echo "Pushing to GitHub..."
        git push -u origin main || git push -u origin master
    fi
else
    # Check if user wants to add a remote
    ADD_REMOTE=$(get_input "Add remote repository? (yes/no)" "no")
    
    if [[ "$ADD_REMOTE" == "yes" ]]; then
        REMOTE_URL=$(get_input "Remote repository URL" "")
        REMOTE_NAME=$(get_input "Remote name" "origin")
        
        if [ -n "$REMOTE_URL" ]; then
            echo "Adding remote repository..."
            git remote add "$REMOTE_NAME" "$REMOTE_URL"
            
            # Push to remote
            PUSH_REMOTE=$(get_input "Push to remote repository? (yes/no)" "yes")
            if [[ "$PUSH_REMOTE" == "yes" ]]; then
                echo "Pushing to remote repository..."
                git push -u "$REMOTE_NAME" main || git push -u "$REMOTE_NAME" master
            fi
        fi
    fi
fi

# Check if the user wants to clone an existing project
CLONE_PROJECT=$(get_input "Clone an existing project? (yes/no)" "no")

if [[ "$CLONE_PROJECT" == "yes" ]]; then
    CLONE_URL=$(get_input "Project URL to clone" "")
    CLONE_DIR=$(get_input "Directory name (leave empty for default)" "")
    
    if [ -n "$CLONE_URL" ]; then
        echo "Cloning project from $CLONE_URL..."
        if [ -n "$CLONE_DIR" ]; then
            git clone "$CLONE_URL" "$CLONE_DIR"
            echo "Project cloned to $CLONE_DIR"
        else
            git clone "$CLONE_URL"
            # Extract directory name from clone URL
            DEFAULT_DIR=$(basename "$CLONE_URL" .git)
            echo "Project cloned to $DEFAULT_DIR"
        fi
    fi
fi

echo "Repository setup complete!"
echo "You can now run ./setup-mcp-servers.sh to configure MCP servers for Claude."

# Make the script executable
chmod +x setup-repo.sh 