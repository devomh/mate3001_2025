# LaTeX Course Content Management System Specifications

## 📋 Overview

This document specifies a modular LaTeX system designed for academic course content management. The system enables easy course replication while maintaining consistent professional formatting and flexible content organization.

**Goal**: Create a reusable LaTeX framework that can be quickly adapted for different courses while ensuring uniform styling and efficient content management.

---

## 🏗️ Modular Architecture

### Core Design Philosophy
- **Master Document Approach**: Single master file per lesson with modular includes
- **Conditional Compilation**: Flexible output generation (student/instructor versions)
- **Shared Resources**: Centralized styling, images, and templates
- **Course-Agnostic**: Easy adaptation across different subjects and institutions

### File Structure
```
CourseCode-Lessons/
├── images/                           # Shared image repository
│   ├── shared/                       # Course branding, logos, icons
│   ├── 00_topic_name/               # Lesson-specific images (optional)
│   ├── 01_topic_name/               # Organized by lesson number
│   └── diagrams/                    # LaTeX-generated diagrams (optional)
├── latex/
│   ├── 00_Topic_Master.tex          # Master documents
│   ├── 01_Topic_Master.tex
│   ├── NN_Topic_Master.tex
│   ├── includes/                    # Modular content files
│   │   ├── 00_Topic_Content.tex     # Lesson content only
│   │   ├── 00_Topic_Exercises.tex   # Exercises only
│   │   ├── 00_Topic_Solutions.tex   # Solutions only
│   │   ├── 01_Topic_Content.tex
│   │   ├── 01_Topic_Exercises.tex
│   │   ├── 01_Topic_Solutions.tex
│   │   └── NN_...
│   └── course_template.tex          # Base template for all masters
└── README.md
```

---

## 📄 Master Document Template

### Complete Master Template Structure
```latex
\documentclass[12pt]{article}

%========================================
% PACKAGES AND CONFIGURATION
%========================================
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}              % Adapt for course language
\decimalpoint                                % Force decimal point instead of comma
\usepackage[margin=1in]{geometry}
\setlength{\headheight}{15pt}
\usepackage{amsmath, amsthm, amssymb}
\usepackage{mdframed}
\usepackage{xcolor}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{graphicx}
\usepackage{tikz}                        % For LaTeX-generated diagrams
\usetikzlibrary{arrows.meta}           % For arrow styles
\usepackage{comment}                     % For conditional content exclusion

%========================================
% COURSE CUSTOMIZATION SECTION
%========================================
% MODIFY THESE FOR EACH COURSE:
\newcommand{\coursecode}{MATE 3171}      % Course code
\newcommand{\coursename}{Precálculo}     % Course name
\newcommand{\institution}{UPR-Humacao}   % Institution name
\newcommand{\lessontitle}{Topic Name}    % Will be overridden per lesson

%========================================
% COLOR SCHEME DEFINITIONS
%========================================
\definecolor{defcolor}{RGB}{240,248,255}     % Light blue for definitions
\definecolor{examplecolor}{RGB}{245,255,245} % Light green for examples  
\definecolor{exercisecolor}{RGB}{255,248,240} % Light orange for exercises
\definecolor{theoremcolor}{RGB}{255,250,240}  % Light orange for theorems

%========================================
% CUSTOM ENVIRONMENTS
%========================================
% Definition Environment (Blue)
\newmdenv[
    backgroundcolor=defcolor,
    linecolor=blue!50,
    linewidth=2pt,
    leftmargin=10pt,
    rightmargin=10pt,
    innertopmargin=10pt,
    innerbottommargin=10pt,
    frametitle={\textbf{Definición}},
    frametitlealignment=\raggedright
]{definition}

% Example Environment (Green)
\newmdenv[
    backgroundcolor=examplecolor,
    linecolor=green!50,
    linewidth=2pt,
    leftmargin=10pt,
    rightmargin=10pt,
    innertopmargin=10pt,
    innerbottommargin=10pt,
    frametitle={\textbf{Ejemplo}},
    frametitlealignment=\raggedright
]{example}

% Exercise Environment (Orange)
\newcounter{exercise}[section]
\newcounter{problem}[exercise]
\newmdenv[
    backgroundcolor=exercisecolor,
    linecolor=orange!50,
    linewidth=2pt,
    leftmargin=10pt,
    rightmargin=10pt,
    innertopmargin=10pt,
    innerbottommargin=10pt,
    frametitle={\stepcounter{exercise}\textbf{Ejercicio \theexercise}},
    frametitlealignment=\raggedright
]{exercise}

% Theorem Environment (Orange variant)
\newmdenv[
    backgroundcolor=theoremcolor,
    linecolor=orange!50,
    linewidth=2pt,
    leftmargin=10pt,
    rightmargin=10pt,
    innertopmargin=10pt,
    innerbottommargin=10pt
]{theorem}

%========================================
% HEADER AND FOOTER CONFIGURATION
%========================================
\pagestyle{fancy}
\fancyhf{}
\rhead{\coursecode\ - \coursename}
\lhead{\lessontitle}
\cfoot{\thepage}

%========================================
% CUSTOM COMMANDS
%========================================
\newcommand{\lesson}[1]{\renewcommand{\lessontitle}{#1}\section{#1}}
\newcommand{\subsectiontitle}[1]{\subsection{#1}}

% Exercise numbering commands
\newcommand{\problem}{\stepcounter{problem}\textbf{\theproblem.} }
\newcommand{\solution}{\textbf{Solución:} }

% Custom environment for exercise lists
\newenvironment{exerciselist}
    {\begin{enumerate}[label=\textbf{\alph*.}]}
    {\end{enumerate}}

% Solution environment with conditional display
\newif\ifshowsolutions
% \showsolutionstrue  % Uncomment for instructor version
\showsolutionsfalse   % Default: student version

\ifshowsolutions
    \newenvironment{solucion}[1][Solución]
      {\par\medskip\noindent\textbf{#1:}\par\nopagebreak}
      {\par\medskip}
\else
    \excludecomment{solucion}
\fi

%========================================
% GRAPHICS CONFIGURATION
%========================================
\graphicspath{{../images/}{../images/shared/}{../images/diagrams/}{../images/NN_topic_name/}}

%========================================
% DOCUMENT CONTENT
%========================================
\begin{document}

% Title page
\title{\lessontitle}
\author{\coursecode\ - \coursename}
\date{}
\maketitle

% Set section counter to lesson number (optional)
% \setcounter{section}{1}  % Uncomment and adjust for lessons after the first

% Modular content inclusion
\input{includes/00_Topic_Content}         % Replace 00 with lesson number
\input{includes/00_Topic_Exercises}       % Replace 00 with lesson number

% Conditional solution inclusion
\ifshowsolutions
    \newpage
    \section*{Soluciones}
    \input{includes/00_Topic_Solutions}   % Replace 00 with lesson number
\fi

\end{document}
```

---

## 📁 Content File Templates

### Content File Template (`includes/NN_Topic_Content.tex`)
```latex
%========================================
% LESSON CONTENT: [Topic Name]
%========================================

\lesson{[Topic Name]}

\begin{definition}
Content of the definition goes here.
\end{definition}

\begin{example}
Example content with mathematical expressions:
$$f(x) = x^2 + 2x + 1$$
\end{example}

\subsectiontitle{Subtopic}

Additional content...

% LaTeX-generated diagrams
\begin{center}
\begin{tikzpicture}
    \draw[->] (-2,0) -- (2,0) node[right] {$x$};
    \draw[->] (0,-1) -- (0,3) node[above] {$y$};
    \draw[domain=-1.5:1.5,smooth,variable=\x,blue,thick] plot ({\x},{\x*\x+1});
\end{tikzpicture}
\end{center}
```

### Exercise File Template (`includes/NN_Topic_Exercises.tex`)
```latex
%========================================
% EXERCISES: [Topic Name]
%========================================

\section{Ejercicios}

\begin{exercise}
\problem Resuelva la ecuación $2x + 3 = 7$.
\begin{solucion}
$2x = 4$, por tanto $x = 2$.
\end{solucion}

\problem Determine si la expresión es un polinomio.
\begin{solucion}
Sí, es un polinomio de grado 2.
\end{solucion}
\end{exercise}

\begin{exercise}
\begin{exerciselist}
    \item Calcule $\sqrt{16}$.
    \item Simplifique $\frac{x^2-1}{x-1}$.
    \item Factorice $x^2 - 4$.
\end{exerciselist}
\end{exercise}
```

### Solution File Template (`includes/NN_Topic_Solutions.tex`)
```latex
%========================================
% DETAILED SOLUTIONS: [Topic Name]
%========================================

\subsection*{Ejercicio 1}

\textbf{Problema 1:} 
\begin{align}
2x + 3 &= 7\\
2x &= 7 - 3\\
2x &= 4\\
x &= 2
\end{align}

\textbf{Problema 2:}
Una expresión es un polinomio si todos los exponentes de las variables son números enteros no negativos.

\subsection*{Ejercicio 2}

\textbf{a)} $\sqrt{16} = 4$

\textbf{b)} $\frac{x^2-1}{x-1} = \frac{(x-1)(x+1)}{x-1} = x+1$ (para $x \neq 1$)

\textbf{c)} $x^2 - 4 = (x-2)(x+2)$
```

---

## 🔧 Compilation Workflow

### Student Version
```bash
# Compile with solutions hidden
pdflatex NN_Topic_Master.tex
```

### Instructor Version
1. Edit master file: Uncomment `\showsolutionstrue`
2. Compile: `pdflatex NN_Topic_Master.tex`

### Enhanced Build Automation

#### Makefile Template
```makefile
# Makefile for LaTeX course compilation
# Usage: make lesson=01 version=student
#        make lesson=01 version=instructor
#        make all-student
#        make all-instructor
#        make clean

# Variables
LESSON ?= 01
VERSION ?= student
LATEXCMD = pdflatex
LATEXOPTS = -interaction=nonstopmode -halt-on-error

# Find all master files
MASTERS = $(wildcard ??_*_Master.tex)
LESSONS = $(patsubst %_Master.tex,%,$(MASTERS))

# Default target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  lesson=XX version=student/instructor - Compile specific lesson"
	@echo "  all-student                         - Compile all lessons (student version)"
	@echo "  all-instructor                      - Compile all lessons (instructor version)"
	@echo "  clean                               - Remove auxiliary files"
	@echo "  clean-all                           - Remove all generated files"

# Compile specific lesson
.PHONY: compile
compile: $(LESSON)_*_Master.pdf

# Pattern rule for PDF generation
%_Master.pdf: %_Master.tex
	@echo "Compiling $< ($(VERSION) version)..."
	@if [ "$(VERSION)" = "instructor" ]; then \
		sed -i.bak 's/\\showsolutionsfalse/\\showsolutionstrue/' $<; \
	fi
	$(LATEXCMD) $(LATEXOPTS) $<
	$(LATEXCMD) $(LATEXOPTS) $<  # Second pass for references
	@if [ "$(VERSION)" = "instructor" ]; then \
		mv $<.bak $<; \
	fi
	@echo "Successfully compiled $@"

# Compile all lessons
.PHONY: all-student all-instructor
all-student:
	@$(MAKE) compile-all VERSION=student

all-instructor:
	@$(MAKE) compile-all VERSION=instructor

.PHONY: compile-all
compile-all:
	@for master in $(MASTERS); do \
		echo "Compiling $$master ($(VERSION) version)..."; \
		if [ "$(VERSION)" = "instructor" ]; then \
			sed -i.bak 's/\\showsolutionsfalse/\\showsolutionstrue/' $$master; \
		fi; \
		$(LATEXCMD) $(LATEXOPTS) $$master; \
		$(LATEXCMD) $(LATEXOPTS) $$master; \
		if [ "$(VERSION)" = "instructor" ]; then \
			mv $$master.bak $$master; \
		fi; \
	done

# Clean auxiliary files
.PHONY: clean
clean:
	rm -f *.aux *.log *.toc *.out *.nav *.snm *.fls *.fdb_latexmk *.synctex.gz

# Clean all generated files
.PHONY: clean-all
clean-all: clean
	rm -f *.pdf *.bak
```

#### Advanced Bash Script
```bash
#!/bin/bash
# compile_lesson.sh [lesson_number] [version] [options]
# Enhanced compilation script with error handling and logging

set -e  # Exit on any error

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
DATE=$(date +"%Y%m%d_%H%M%S")

# Default values
LESSON=""
VERSION="student"
VERBOSE=false
CLEAN_AFTER=false

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
usage() {
    echo "Usage: $0 [OPTIONS] lesson_number version"
    echo "Options:"
    echo "  -v, --verbose    Enable verbose output"
    echo "  -c, --clean      Clean auxiliary files after compilation"
    echo "  -h, --help       Show this help message"
    echo "Examples:"
    echo "  $0 01 student"
    echo "  $0 02 instructor --verbose"
    echo "  $0 --clean 03 student"
}

log() {
    echo -e "${BLUE}[$(date +'%H:%M:%S')]${NC} $1"
    [ -d "$LOG_DIR" ] && echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_DIR/compile_${DATE}.log"
}

error() {
    echo -e "${RED}ERROR:${NC} $1" >&2
    [ -d "$LOG_DIR" ] && echo "[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1" >> "$LOG_DIR/compile_${DATE}.log"
    exit 1
}

success() {
    echo -e "${GREEN}SUCCESS:${NC} $1"
    [ -d "$LOG_DIR" ] && echo "[$(date +'%Y-%m-%d %H:%M:%S')] SUCCESS: $1" >> "$LOG_DIR/compile_${DATE}.log"
}

warning() {
    echo -e "${YELLOW}WARNING:${NC} $1"
    [ -d "$LOG_DIR" ] && echo "[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1" >> "$LOG_DIR/compile_${DATE}.log"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -c|--clean)
            CLEAN_AFTER=true
            shift
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        -*)
            error "Unknown option $1"
            ;;
        *)
            if [ -z "$LESSON" ]; then
                LESSON="$1"
            elif [ -z "$VERSION" ] || [ "$VERSION" = "student" ]; then
                VERSION="$1"
            else
                error "Too many arguments"
            fi
            shift
            ;;
    esac
done

# Validate arguments
[ -z "$LESSON" ] && error "Lesson number is required"
[ "$VERSION" != "student" ] && [ "$VERSION" != "instructor" ] && error "Version must be 'student' or 'instructor'"

# Setup logging
mkdir -p "$LOG_DIR"

# Find master file
MASTER_FILE=$(find . -name "${LESSON}_*_Master.tex" | head -1)
[ -z "$MASTER_FILE" ] || [ ! -f "$MASTER_FILE" ] && error "Master file for lesson $LESSON not found"

log "Starting compilation of $MASTER_FILE ($VERSION version)"

# Create backup if instructor version
if [ "$VERSION" = "instructor" ]; then
    cp "$MASTER_FILE" "${MASTER_FILE}.backup"
    sed -i 's/\\showsolutionsfalse/\\showsolutionstrue/' "$MASTER_FILE"
    log "Enabled solutions for instructor version"
fi

# Compile LaTeX
log "Running pdflatex (first pass)..."
if [ "$VERBOSE" = true ]; then
    pdflatex "$MASTER_FILE" | tee -a "$LOG_DIR/compile_${DATE}.log"
else
    pdflatex "$MASTER_FILE" > /dev/null 2>&1 || error "First pdflatex pass failed"
fi

log "Running pdflatex (second pass)..."
if [ "$VERBOSE" = true ]; then
    pdflatex "$MASTER_FILE" | tee -a "$LOG_DIR/compile_${DATE}.log"
else
    pdflatex "$MASTER_FILE" > /dev/null 2>&1 || error "Second pdflatex pass failed"
fi

# Restore original file if instructor version
if [ "$VERSION" = "instructor" ]; then
    mv "${MASTER_FILE}.backup" "$MASTER_FILE"
    log "Restored original file"
fi

# Clean auxiliary files if requested
if [ "$CLEAN_AFTER" = true ]; then
    rm -f *.aux *.log *.toc *.out *.nav *.snm *.fls *.fdb_latexmk *.synctex.gz
    log "Cleaned auxiliary files"
fi

# Final success message
OUTPUT_PDF="${MASTER_FILE%.tex}.pdf"
success "Compilation completed: $OUTPUT_PDF"

if [ -f "$OUTPUT_PDF" ]; then
    FILE_SIZE=$(ls -lh "$OUTPUT_PDF" | awk '{print $5}')
    log "Output file size: $FILE_SIZE"
fi
```

---

## 🎨 Styling and Customization

### Environment Usage Guidelines

| Environment | Purpose | Visual Style | Usage |
|-------------|---------|--------------|-------|
| `definition` | Key concepts, definitions | Light blue box | Mathematical definitions, terminology |
| `example` | Worked examples | Light green box | Step-by-step problem solving |  
| `exercise` | Practice problems | Light orange box | Auto-numbered problem sets |
| `theorem` | Important results | Light orange box | Mathematical theorems, properties |

### Color Customization
```latex
% Modify these RGB values for different course themes:
\definecolor{defcolor}{RGB}{240,248,255}     % Definition background
\definecolor{examplecolor}{RGB}{245,255,245} % Example background
\definecolor{exercisecolor}{RGB}{255,248,240} % Exercise background
```

### Header Customization
```latex
% Course-specific headers
\rhead{CHEM 1234 - General Chemistry}  % Right header
\lhead{\lessontitle}                   % Left header (dynamic)
\cfoot{\thepage}                       % Center footer
```

---

## 📦 Dependencies and Requirements

### Required LaTeX Packages

**IMPORTANT**: Package loading order matters to avoid conflicts. Load packages in this sequence:

```latex
% 1. Core encoding and language packages (load first)
\usepackage[utf8]{inputenc}      % Character encoding
\usepackage[spanish]{babel}      % Language support (adapt as needed)

% 2. Page layout and geometry
\usepackage[margin=1in]{geometry} % Page margins
\setlength{\headheight}{15pt}    % Required for fancyhdr

% 3. Mathematical packages
\usepackage{amsmath, amsthm, amssymb} % Mathematical typesetting

% 4. Visual and formatting packages
\usepackage{xcolor}              % Color definitions (load before mdframed)
\usepackage{mdframed}            % Colored boxes (requires xcolor)
\usepackage{enumitem}            % Custom list formatting
\usepackage{fancyhdr}            % Headers and footers
\usepackage{graphicx}            % Image inclusion

% 5. Graphics and diagrams (load last)
\usepackage{tikz}                % LaTeX-generated diagrams
\usetikzlibrary{arrows.meta}     % For arrow styles (load after tikz)

% 6. Conditional compilation
\usepackage{comment}             % For conditional content exclusion
```

**Common Package Conflicts:**
- `xcolor` must be loaded before `mdframed`
- `geometry` should be loaded early to avoid margin conflicts
- `babel` should be loaded before packages that depend on language settings
- TikZ libraries must be loaded after the main `tikz` package

### System Requirements
- **LaTeX Distribution**: TeX Live 2020+ or MiKTeX
- **Compiler**: pdflatex (primary), xelatex (alternative)
- **Encoding**: UTF-8 support for international characters

---

## 🚀 Course Replication Guide

### Step 1: Repository Setup
```bash
# Create new course repository
mkdir COURSE_CODE-Lessons
cd COURSE_CODE-Lessons

# Create directory structure
mkdir latex latex/includes images images/shared
```

### Step 2: Template Customization
1. Copy `course_template.tex` to new repository
2. Modify course-specific variables:
   ```latex
   \newcommand{\coursecode}{NEW_CODE}
   \newcommand{\coursename}{Course Name}
   \newcommand{\institution}{Institution}
   ```
3. Adjust color scheme if desired
4. Adapt language settings (`babel` package)

### Step 3: Content Migration
1. Create master documents: `NN_Topic_Master.tex`
2. Create include files in `includes/` directory
3. Follow naming convention: `NN_Topic_Content.tex`, `NN_Topic_Exercises.tex`, `NN_Topic_Solutions.tex`

### Step 4: Asset Management
1. Copy institutional logos to `images/shared/`
2. Organize lesson-specific images in `images/NN_topic_name/`
3. Update `\graphicspath{}` to include lesson-specific directory: `{../images/NN_topic_name/}`
4. Set section counter for lessons after the first: `\setcounter{section}{N}`

### Customization Checklist
- [ ] Course code and name
- [ ] Institution branding
- [ ] Language and regional settings
- [ ] Color scheme (optional)
- [ ] Header/footer format
- [ ] Exercise numbering style
- [ ] Directory structure adaptation
- [ ] Lesson-specific image directories
- [ ] Section counter initialization for multi-lesson courses

---

## 🔍 Advanced Features

### Conditional Compilation Flags
```latex
% Multiple version control
\newif\ifshowsolutions
\newif\ifshowdifficult
\newif\ifshownotes

% Usage in content
\ifshowsolutions
    Detailed solution here...
\fi

\ifshowdifficult
    \begin{exercise}
    Advanced problem...
    \end{exercise}
\fi
```

### Cross-Referencing System
```latex
% In content file
\label{eq:quadratic}
\begin{equation}
    ax^2 + bx + c = 0
\end{equation}

% In exercise file
Referring to equation \ref{eq:quadratic}...
```

### LaTeX Diagram Integration
```latex
% Inline TikZ diagrams
\begin{center}
\begin{tikzpicture}
    % Coordinate system
    \draw[->] (-3,0) -- (3,0) node[right] {$x$};
    \draw[->] (0,-2) -- (0,4) node[above] {$y$};
    
    % Function plot
    \draw[domain=-2:2,smooth,variable=\x,blue,thick] 
          plot ({\x},{\x*\x});
          
    % Labels
    \node at (1.5,2.5) {$y = x^2$};
\end{tikzpicture}
\end{center}

% External diagram files (for complex diagrams)
\input{../diagrams/complex_function_analysis.tex}
```

---

## 🛠️ Troubleshooting and Best Practices

### Common Issues and Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Header height warning | `fancyhdr` package | Add `\setlength{\headheight}{15pt}` |
| Math mode errors | Missing $ delimiters | Use `$...$` for inline, `$$...$$` for display |
| Image not found | Wrong path | Check `\graphicspath{}` configuration |
| Spanish characters | Encoding issues | Use `\usepackage[utf8]{inputenc}` |
| Exercise numbering | Counter conflicts | Reset counters with `\newcounter{exercise}[section]` |

### Version Control Best Practices

#### Recommended .gitignore
```gitignore
# LaTeX auxiliary files
*.aux
*.bbl
*.bcf
*.blg
*.fdb_latexmk
*.fls
*.log
*.out
*.run.xml
*.synctex.gz
*.toc
*.nav
*.snm
*.vrb
*.backup

# LaTeX temporary files
*.figlist
*.makefile
*.auxlock
*.figlist
*.makefile
*.fls
*.fdb_latexmk
*.dpth
*.md5
*.auxlock

# Build output (optional - you may want to commit PDFs)
*.pdf

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
*.swp
*.swo
*~
*.tmp
.vscode/
.idea/

# Build directories
build/
dist/
logs/
```

#### Git Workflow Recommendations

**Branch Structure:**
```bash
# Main development branch
git checkout -b develop

# Feature branches for new lessons
git checkout -b lesson/05-equations

# Solution branches (optional)
git checkout -b solutions/instructor-versions

# Release branches for semester versions
git checkout -b release/spring-2024
```

**Commit Message Conventions:**
```bash
# Good commit messages
git commit -m "Add: Lesson 03 - Quadratic Functions content"
git commit -m "Fix: Exercise numbering in polynomial chapter"
git commit -m "Update: Color scheme for better accessibility"
git commit -m "Docs: Add compilation instructions to README"

# Use prefixes: Add, Fix, Update, Docs, Refactor, Test
```

**Pre-commit Hooks (optional):**
```bash
#!/bin/bash
# .git/hooks/pre-commit
# Automatically compile and test before commits

echo "Running pre-commit checks..."

# Check for syntax errors in LaTeX files
for file in $(git diff --cached --name-only --diff-filter=ACM | grep '\.tex$'); do
    echo "Checking $file..."
    # Basic LaTeX syntax check
    if ! lacheck "$file" 2>/dev/null; then
        echo "LaTeX syntax errors found in $file"
        exit 1
    fi
done

# Attempt compilation of changed master files
for file in $(git diff --cached --name-only --diff-filter=ACM | grep '_Master\.tex$'); do
    echo "Testing compilation of $file..."
    if ! pdflatex -interaction=nonstopmode "$file" >/dev/null 2>&1; then
        echo "Compilation failed for $file"
        exit 1
    fi
done

echo "Pre-commit checks passed!"
```

### Best Practices
1. **Consistent naming**: Follow `NN_Topic_Type.tex` convention
2. **Modular content**: Keep content, exercises, and solutions separate
3. **Version control**: Use git with proper `.gitignore` and branching strategy
4. **Backup strategy**: Regular commits, separate solution branches, tagged releases
5. **Testing**: Compile both student and instructor versions regularly
6. **Documentation**: Maintain clear README with setup and compilation instructions
7. **Collaboration**: Use feature branches and pull requests for team development

### Performance Optimization
- Use `\includeonly{}` for selective compilation during development
- Cache TikZ diagrams with `external` library for complex figures
- Split very long documents into smaller master files
- Use Makefile for parallel compilation of multiple lessons
- Set up automated builds with GitHub Actions or similar CI/CD tools

---

## 📈 Future Enhancements

### Planned Features
- **Automated testing**: Continuous integration for compilation verification
- **Web deployment**: GitHub Pages integration for online access
- **Interactive elements**: Integration with online quiz platforms
- **Multi-format output**: HTML and ePub generation
- **Template variations**: Alternative styling themes
- **Collaboration tools**: Multi-author workflow support

### Extensibility Points
- **Custom environments**: Easy addition of new content types
- **Internationalization**: Support for additional languages
- **Assessment integration**: Grade book connectivity
- **Media support**: Video and audio embedding strategies

---

## 📚 Technical References

### LaTeX Resources
- **TeX Live Documentation**: https://www.tug.org/texlive/
- **TikZ Manual**: https://www.ctan.org/pkg/pgf
- **mdframed Package**: https://www.ctan.org/pkg/mdframed

### Course Management
- **Git Workflows**: Branch-based development for different course versions
- **Automated Compilation**: CI/CD pipeline setup
- **Distribution Methods**: Student package creation and delivery

---

## 🎨 Visual Enhancement Strategies for Mathematics Education

### Overview for Freshman-Level Courses

Creating engaging visual content is crucial for freshman university students transitioning from high school mathematics. Visual elements help bridge abstract concepts with concrete understanding, making complex algebraic topics more accessible and memorable.

### 📊 Recommended Visual Elements by Topic

#### 1. **Set Theory and Number Classifications** (`01_conjuntos.md`)

**Nested Circle Diagrams - Number System Hierarchy**
```latex
% Visual representation of ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ
\begin{tikzpicture}[scale=1.2]
    % Real numbers (outermost)
    \draw[thick, blue!70] (0,0) ellipse (4cm and 3cm);
    \node at (2.5,2.2) {\textbf{ℝ Reales}};
    
    % Rational numbers
    \draw[thick, green!70] (0,0) ellipse (3cm and 2.2cm);
    \node at (1.8,1.5) {\textbf{ℚ Racionales}};
    
    % Integers
    \draw[thick, orange!70] (0,0) ellipse (2cm and 1.5cm);
    \node at (1,1) {\textbf{ℤ Enteros}};
    
    % Natural numbers
    \draw[thick, red!70] (0,0) ellipse (1.2cm and 0.8cm);
    \node at (0,0) {\textbf{ℕ Naturales}};
    
    % Irrational examples
    \node at (-2.5,-1.8) {$\sqrt{2}, \pi, e$};
    \node at (-2.5,-2.2) {\textcolor{blue!70}{\textbf{Irracionales}}};
\end{tikzpicture}
```

**Interactive Venn Diagrams for Set Operations**
```latex
% Union and Intersection visualization
\begin{tikzpicture}
    % Set A
    \draw[fill=blue!30, draw=blue!70, thick] (0,0) circle (1.5cm);
    \node at (-0.7,0) {$A$};
    
    % Set B
    \draw[fill=red!30, draw=red!70, thick] (1,0) circle (1.5cm);
    \node at (1.7,0) {$B$};
    
    % Labels
    \node at (0.5,-2.5) {\textbf{Unión: } $A \cup B$};
    \node at (0.5,0) {\textcolor{purple}{\textbf{Intersección}}};
\end{tikzpicture}
```

#### 2. **Absolute Value and Sign Laws** (`02_leyes_signos.md`)

**Interactive Number Line with Distance Visualization**
```latex
% Number line showing absolute value as distance
\begin{tikzpicture}[scale=0.8]
    % Number line
    \draw[<->] (-6,0) -- (6,0);
    \foreach \x in {-5,-4,-3,-2,-1,0,1,2,3,4,5}
        \draw (\x,0.1) -- (\x,-0.1) node[below] {\x};
    
    % Highlight points -3 and 3
    \filldraw[red] (-3,0) circle (3pt);
    \filldraw[red] (3,0) circle (3pt);
    
    % Distance arrows
    \draw[<->, blue, thick] (-3,0.5) -- (0,0.5);
    \draw[<->, blue, thick] (0,0.5) -- (3,0.5);
    \node[blue] at (-1.5,0.8) {3 unidades};
    \node[blue] at (1.5,0.8) {3 unidades};
    
    % Labels
    \node at (-3,-0.8) {\textcolor{red}{\textbf{-3}}};
    \node at (3,-0.8) {\textcolor{red}{\textbf{+3}}};
    \node at (0,1.5) {$|-3| = |3| = 3$};
\end{tikzpicture}
```

**Sign Property Visual Guide**
```latex
% Visual representation of sign rules
\begin{tikzpicture}[node distance=2cm]
    % Positive × Positive
    \node[draw, fill=green!20] (pp) {$(+) \times (+) = (+)$};
    
    % Positive × Negative  
    \node[draw, fill=red!20, right of=pp] (pn) {$(+) \times (-) = (-)$};
    
    % Negative × Positive
    \node[draw, fill=red!20, below of=pp] (np) {$(-) \times (+) = (-)$};
    
    % Negative × Negative
    \node[draw, fill=green!20, below of=pn] (nn) {$(-) \times (-) = (+)$};
    
    \node at (1,-3) {\textbf{Reglas de Signos para Multiplicación}};
\end{tikzpicture}
```

#### 3. **Real Number Properties and Exponents** (`03_propiedades_reales_exponentes.md`)

**Property Visualization Flowchart**
```latex
% Mathematical properties flow diagram
\begin{tikzpicture}[
    property/.style={rectangle, draw=blue!60, fill=blue!5, thick, minimum height=1cm},
    example/.style={rectangle, draw=green!60, fill=green!5},
    arrow/.style={->, thick}
]
    % Commutative Properties
    \node[property] (comm) at (0,0) {\textbf{Propiedades Conmutativas}};
    \node[example] (comm_add) at (-2,-1.5) {$a + b = b + a$};
    \node[example] (comm_mult) at (2,-1.5) {$ab = ba$};
    
    % Associative Properties  
    \node[property] (assoc) at (0,-3) {\textbf{Propiedades Asociativas}};
    \node[example] (assoc_add) at (-2,-4.5) {$(a+b)+c = a+(b+c)$};
    \node[example] (assoc_mult) at (2,-4.5) {$(ab)c = a(bc)$};
    
    % Distributive Property
    \node[property] (dist) at (0,-6) {\textbf{Propiedad Distributiva}};
    \node[example] (dist_ex) at (0,-7.5) {$a(b+c) = ab + ac$};
    
    % Arrows
    \draw[arrow] (comm) -- (comm_add);
    \draw[arrow] (comm) -- (comm_mult);
    \draw[arrow] (assoc) -- (assoc_add);
    \draw[arrow] (assoc) -- (assoc_mult);
    \draw[arrow] (dist) -- (dist_ex);
\end{tikzpicture}
```

**PEMDSR Visual Memory Aid**
```latex
% PEMDSR mnemonic with colors
\begin{tikzpicture}
    \node[draw, fill=red!20, minimum width=2cm] at (0,0) {\textbf{P}aréntesis};
    \node[draw, fill=orange!20, minimum width=2cm] at (3,0) {\textbf{E}xponentes};
    \node[draw, fill=yellow!20, minimum width=2cm] at (6,0) {\textbf{M}ultiplicación};
    \node[draw, fill=green!20, minimum width=2cm] at (0,-1.5) {\textbf{D}ivisión};
    \node[draw, fill=blue!20, minimum width=2cm] at (3,-1.5) {\textbf{S}uma};
    \node[draw, fill=purple!20, minimum width=2cm] at (6,-1.5) {\textbf{R}esta};
    
    \node at (3,-3) {\textbf{Orden de Operaciones}};
\end{tikzpicture}
```

#### 4. **Algebraic Expressions and Polynomials** (`04_expresiones_algebraicas_polinomios.md`)

**Polynomial Degree Visualization**
```latex
% Visual comparison of polynomial degrees
\begin{tikzpicture}[scale=0.8]
    % Linear function
    \begin{scope}[xshift=0cm]
        \draw[->] (-2,0) -- (2,0) node[right] {$x$};
        \draw[->] (0,-1) -- (0,3) node[above] {$y$};
        \draw[domain=-1.5:1.5, blue, thick] plot (\x, {\x + 1});
        \node at (0,-1.8) {\textbf{Lineal (grado 1)}};
        \node at (0,-2.2) {$y = x + 1$};
    \end{scope}
    
    % Quadratic function
    \begin{scope}[xshift=5cm]
        \draw[->] (-2,0) -- (2,0) node[right] {$x$};
        \draw[->] (0,-1) -- (0,3) node[above] {$y$};
        \draw[domain=-1.5:1.5, red, thick] plot (\x, {\x*\x + 0.5});
        \node at (0,-1.8) {\textbf{Cuadrático (grado 2)}};
        \node at (0,-2.2) {$y = x^2$};
    \end{scope}
    
    % Cubic function
    \begin{scope}[xshift=10cm]
        \draw[->] (-2,0) -- (2,0) node[right] {$x$};
        \draw[->] (0,-2) -- (0,3) node[above] {$y$};
        \draw[domain=-1.3:1.3, green!70!black, thick] plot (\x, {\x*\x*\x + 1});
        \node at (0,-2.8) {\textbf{Cúbico (grado 3)}};
        \node at (0,-3.2) {$y = x^3$};
    \end{scope}
\end{tikzpicture}
```

**FOIL Method Visual Guide**
```latex
% Visual FOIL demonstration
\begin{tikzpicture}[scale=1.2]
    % The expression (a+b)(c+d)
    \node at (0,2) {\huge $(a + b)(c + d)$};
    
    % FOIL arrows and labels
    \draw[red, thick, ->] (-0.8,1.7) to[bend left=30] (-0.3,1.7);
    \node[red] at (-0.55, 1.3) {\textbf{F}irst: $ac$};
    
    \draw[blue, thick, ->] (-0.8,1.7) to[bend left=50] (0.3,1.7);
    \node[blue] at (-0.2, 0.8) {\textbf{O}uter: $ad$};
    
    \draw[green!70!black, thick, ->] (-0.3,1.7) to[bend right=50] (-0.3,1.7);
    \node[green!70!black] at (0.2, 0.8) {\textbf{I}nner: $bc$};
    
    \draw[purple, thick, ->] (-0.3,1.7) to[bend right=30] (0.3,1.7);
    \node[purple] at (0.55, 1.3) {\textbf{L}ast: $bd$};
    
    % Result
    \node at (0,0) {\textbf{Resultado:} $ac + ad + bc + bd$};
\end{tikzpicture}
```

**Factorization Process Flowchart**
```latex
% Step-by-step factorization guide
\begin{tikzpicture}[
    step/.style={rectangle, draw, fill=blue!10, text width=3cm, text centered},
    decision/.style={diamond, draw, fill=yellow!10, text width=2cm, text centered},
    arrow/.style={->, thick}
]
    \node[step] (start) at (0,0) {Expresión a factorizar};
    \node[decision] (common) at (0,-2) {¿Hay factor común?};
    \node[step] (extract) at (-3,-4) {Extraer factor común};
    \node[decision] (terms) at (0,-4) {¿Cuántos términos?};
    \node[step] (two) at (-2,-6) {2 términos:\\Diferencia cuadrados};
    \node[step] (three) at (0,-6) {3 términos:\\Trinomio};
    \node[step] (four) at (2,-6) {4+ términos:\\Agrupación};
    
    \draw[arrow] (start) -- (common);
    \draw[arrow] (common) -- node[left] {Sí} (extract);
    \draw[arrow] (common) -- node[right] {No} (terms);
    \draw[arrow] (terms) -- (two);
    \draw[arrow] (terms) -- (three);
    \draw[arrow] (terms) -- (four);
\end{tikzpicture}
```

### 🎯 Implementation Strategies for Student Engagement

#### 1. **Color-Coded Learning System**
- **Blue**: Definitions and concepts
- **Green**: Examples and solutions
- **Red**: Important warnings and restrictions
- **Orange**: Practice exercises
- **Purple**: Advanced or optional content

#### 2. **Progressive Complexity Visualization**
```latex
% Example: Building complexity visually
\begin{tikzpicture}
    % Level 1: Simple
    \node[draw, fill=green!20] at (0,3) {$x + 2$};
    \node at (0,2.5) {Nivel 1: Lineal};
    
    % Level 2: Intermediate
    \node[draw, fill=yellow!20] at (0,1.5) {$x^2 + 3x + 2$};
    \node at (0,1) {Nivel 2: Cuadrático};
    
    % Level 3: Advanced
    \node[draw, fill=red!20] at (0,0) {$2x^3 - 5x^2 + 3x - 1$};
    \node at (0,-0.5) {Nivel 3: Cúbico};
    
    % Arrows showing progression
    \draw[->, thick] (0.5,2.7) -- (0.5,1.8);
    \draw[->, thick] (0.5,1.2) -- (0.5,0.3);
\end{tikzpicture}
```

#### 3. **Interactive Element Integration**

**QR Code Integration for Online Resources**
```latex
% LaTeX package: qrcode
\usepackage{qrcode}

% Implementation in exercises
\begin{example}
\textbf{Ejemplo interactivo:} 
\qrcode[height=2cm]{https://example.com/interactive-polynomial-tool}
\par\textsl{Escanea para acceder a la herramienta interactiva}
\end{example}
```

**Margin Notes for Quick Tips**
```latex
\usepackage{marginnote}

% Usage throughout content
\marginnote{\colorbox{yellow!20}{\textbf{Tip:} Recuerda el orden PEMDSR}}[0cm]
```

### 📱 Modern Student-Friendly Features

#### 1. **Mobile-Optimized Layouts**
```latex
% Responsive design considerations
\usepackage[margin=1in, includefoot]{geometry}
\usepackage{microtype} % Better text rendering
\setlength{\parskip}{0.5em} % Better paragraph spacing
```

#### 2. **Gamification Elements**
```latex
% Achievement badges
\newcommand{\badge}[1]{%
    \tikz[baseline=(char.base)]{
        \node[shape=circle, fill=gold!30, draw=gold!70, thick] (char) {\textbf{#1}};
    }
}

% Usage: \badge{★} for completed exercises
```

#### 3. **Social Learning Integration**
```latex
% Study group exercises
\begin{exercise}[Trabajo en Equipo]
\textbf{Actividad colaborativa:} Discute con tu grupo...
\end{exercise}
```

### 🎨 Accessibility and Universal Design

#### 1. **High-Contrast Color Schemes**
```latex
% Alternative color scheme for accessibility
\definecolor{defcolor}{RGB}{255,255,240}      % High contrast yellow
\definecolor{examplecolor}{RGB}{240,255,240}  % High contrast green
\definecolor{exercisecolor}{RGB}{255,240,240} % High contrast pink
```

#### 2. **Large Font Options**
```latex
% Conditional large print version
\newif\iflargeprint
% \largeprinttrue % Uncomment for large print version

\iflargeprint
    \usepackage[14pt]{extsizes}
\else
    \documentclass[12pt]{article}
\fi
```

### 🚀 Future Enhancement Possibilities

1. **Augmented Reality Integration**: QR codes linking to 3D polynomial visualizations
2. **Adaptive Learning Paths**: Different exercise sets based on performance
3. **Collaborative Annotation**: Spaces for student notes and peer discussions
4. **Multi-language Support**: Parallel Spanish-English mathematical terminology
5. **Assessment Integration**: Built-in progress tracking and mastery indicators

### 💡 Quick Implementation Guide

To immediately improve your current markdown files:

1. **Add color-coded section headers**
2. **Include visual memory aids** (like PEMDSR charts)
3. **Create progression indicators** showing topic difficulty
4. **Add margin space** for student annotations
5. **Include QR codes** for supplementary online resources
6. **Use consistent iconography** throughout all documents

These visual enhancements will transform abstract mathematical concepts into engaging, accessible learning materials that resonate with modern freshman students while maintaining academic rigor.

<function_calls>
<invoke name="TodoWrite">
<parameter name="todos">[{"content": "Create visual enhancements plan for markdown files", "status": "completed", "id": "10"}, {"content": "Generate LaTeX figures for number line diagrams", "status": "pending", "id": "11"}, {"content": "Create set theory Venn diagrams", "status": "pending", "id": "12"}, {"content": "Design polynomial degree visualization charts", "status": "pending", "id": "13"}, {"content": "Create factorization process flowcharts", "status": "pending", "id": "14"}]