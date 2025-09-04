# Makefile for Git Deployment
# ===========================

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
BLUE = \033[0;34m
NC = \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

# Help target - shows available commands
.PHONY: help
help:
	@echo "$(BLUE)=== Makefile Commands ===$(NC)"
	@echo "$(GREEN)make help$(NC)          - Show this help message"
	@echo "$(GREEN)make deploy$(NC)        - Add, commit, and push changes to git"
	@echo "$(GREEN)make status$(NC)        - Show git status"
	@echo "$(GREEN)make add$(NC)           - Stage all changes (git add .)"
	@echo "$(GREEN)make commit$(NC)        - Commit changes with default message"
	@echo "$(GREEN)make commit-msg$(NC)    - Commit changes with custom message"
	@echo "$(GREEN)make push$(NC)          - Push changes to remote"
	@echo "$(GREEN)make pull$(NC)          - Pull latest changes from remote"
	@echo "$(GREEN)make clean$(NC)         - Clean build artifacts"
	@echo "$(GREEN)make build$(NC)         - Build the project"
	@echo "$(GREEN)make dev$(NC)           - Start development server"
	@echo ""
	@echo "$(YELLOW)Usage examples:$(NC)"
	@echo "  make deploy MESSAGE=\"feat: add new feature\""
	@echo "  make commit-msg MESSAGE=\"fix: resolve bug\""

# Git status
.PHONY: status
status:
	@echo "$(BLUE)=== Git Status ===$(NC)"
	@git status

# Stage all changes
.PHONY: add
add:
	@echo "$(BLUE)=== Staging Changes ===$(NC)"
	@git add .
	@echo "$(GREEN)✓ All changes staged$(NC)"

# Commit with default message
.PHONY: commit
commit:
	@echo "$(BLUE)=== Committing Changes ===$(NC)"
	@if git diff --cached --quiet; then \
		echo "$(YELLOW)⚠ No changes staged. Run 'make add' first.$(NC)"; \
		exit 1; \
	fi
	@git commit -m "chore: auto-commit $(shell date +'%Y-%m-%d %H:%M:%S')"
	@echo "$(GREEN)✓ Changes committed with default message$(NC)"

# Commit with custom message
.PHONY: commit-msg
commit-msg:
	@echo "$(BLUE)=== Committing Changes ===$(NC)"
	@if [ -z "$(MESSAGE)" ]; then \
		echo "$(RED)❌ Error: MESSAGE variable is required$(NC)"; \
		echo "Usage: make commit-msg MESSAGE=\"your commit message\""; \
		exit 1; \
	fi
	@if git diff --cached --quiet; then \
		echo "$(YELLOW)⚠ No changes staged. Run 'make add' first.$(NC)"; \
		exit 1; \
	fi
	@git commit -m "$(MESSAGE)"
	@echo "$(GREEN)✓ Changes committed with message: $(MESSAGE)$(NC)"

# Push to remote
.PHONY: push
push:
	@echo "$(BLUE)=== Pushing to Remote ===$(NC)"
	@git push
	@echo "$(GREEN)✓ Changes pushed to remote$(NC)"

# Pull from remote
.PHONY: pull
pull:
	@echo "$(BLUE)=== Pulling Latest Changes ===$(NC)"
	@git pull
	@echo "$(GREEN)✓ Latest changes pulled$(NC)"

# Main deployment target - add, commit, push, and verify build
.PHONY: deploy
deploy:
	@echo "$(BLUE)=== Starting Deployment ===$(NC)"
	@echo "$(YELLOW)1. Staging changes...$(NC)"
	@git add .
	@echo "$(YELLOW)2. Committing changes...$(NC)"
	@if [ -z "$(MESSAGE)" ]; then \
		git commit -m "chore: auto-deploy $(shell date +'%Y-%m-%d %H:%M:%S')" || (echo "$(RED)❌ No changes to commit$(NC)" && exit 0); \
	else \
		git commit -m "$(MESSAGE)" || (echo "$(RED)❌ No changes to commit$(NC)" && exit 0); \
	fi
	@echo "$(YELLOW)3. Pushing to remote...$(NC)"
	@git push
	@echo "$(YELLOW)4. Verifying build...$(NC)"
	@npm run build
	@echo "$(GREEN)✓ Deployment completed successfully!$(NC)"
	@echo "$(GREEN)✓ Build verification passed!$(NC)"

# Clean build artifacts
.PHONY: clean
clean:
	@echo "$(BLUE)=== Cleaning Build Artifacts ===$(NC)"
	@rm -rf dist/
	@echo "$(GREEN)✓ Build artifacts cleaned$(NC)"

# Build the project
.PHONY: build
build:
	@echo "$(BLUE)=== Building Project ===$(NC)"
	@npm run build
	@echo "$(GREEN)✓ Project built successfully$(NC)"

# Start development server
.PHONY: dev
dev:
	@echo "$(BLUE)=== Starting Development Server ===$(NC)"
	@npm run dev

# Show current branch info
.PHONY: branch-info
branch-info:
	@echo "$(BLUE)=== Branch Information ===$(NC)"
	@echo "Current branch: $(shell git branch --show-current)"
	@echo "Remote URL: $(shell git remote get-url origin)"
	@echo "Last commit: $(shell git log -1 --oneline)"
