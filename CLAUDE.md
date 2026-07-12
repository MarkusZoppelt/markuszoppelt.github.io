# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal, professional portfolio website for Markus Zoppelt hosted on GitHub Pages. The site is a pure static HTML page with no build process or dependencies.

## Architecture

### Site Structure
- **Static HTML Site**: English root + German `/de/` page, shared embedded CSS
- **No Build Process**: Direct deployment to GitHub Pages
- **Minimal Dependencies**: Self-hosted Inter fonts only
- **Localization**: Separate pages (`index.html`, `de/index.html`); EN root redirects to `/de/` when browser language is `de*` (`navigator.languages`)

### Key Components
- **Hero Section**: Portrait, name, role at Helsing, bio
- **Contact Links**: Email, Forge, GitHub, LinkedIn, Scholar
- **Responsive Design**: Mobile-first approach with desktop enhancements

## Development Commands

No build process or commands needed:
- Direct HTML/CSS editing
- Push to GitHub for automatic deployment
- No compilation, bundling, or preprocessing required

## File Organization

**Essential Files:**
- `index.html` - English page + language auto-redirect
- `de/index.html` - German page (same layout, `../static/` assets)
- `CNAME` - Domain configuration for GitHub Pages
- `CLAUDE.md` - This documentation file

**Static Assets:**
- `static/site.css` - Shared layout styles (linked from EN + DE pages)
- `static/favicon.svg` - Favicon (Tokyo Night diamond mark)
- `static/apple-touch-icon.png` - iOS home-screen icon
- `static/inter.css` - Inter font definitions (Regular 400, Medium 500, Bold 700)
- `static/hero.jpg` - Profile image
- `static/fonts/` - Self-hosted Inter font files (3 weights)

## Technology Stack

- **Frontend**: Pure HTML5 and CSS3 (embedded styles)
- **Typography**: Inter font family (self-hosted, 3 weights)
- **Hosting**: GitHub Pages (static file serving)
- **Domain**: Custom domain (zoppelt.net via CNAME)

## Development Notes

- **Zero Dependencies**: No frameworks, libraries, or build tools
- **Performance Optimized**: Minimal file size and fast loading
- **Professional Design**: Clean, modern aesthetic suitable for senior engineer
- **Fully Responsive**: Works perfectly on all device sizes
- **CSS Custom Properties**: Consistent color and typography system
- **Semantic HTML**: Proper structure and accessibility considerations
