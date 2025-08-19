# Question Bank Creation Specification
**MATE 3001 - Matemática Elemental**  
**UPR-Humacao**

## Overview
This document outlines the standardized process for creating question banks from lesson materials for Moodle import. The workflow consists of three main phases: quiz creation, question bank transformation, and XML formatting.

---

## Phase 1: Initial Quiz Creation

### 1.1 Source Material Analysis
- **Input**: LaTeX lesson files (content and exercises)
- **Read**: Master files and included content/exercise files
- **Extract**: Key concepts, examples, and exercise patterns
- **Identify**: 
  - Core learning objectives per lesson
  - Mathematical concepts and operations
  - Difficulty progression
  - Common student misconceptions

### 1.2 Question Development Strategy
**Target**: 10 questions total (5 per lesson minimum)

**Question Distribution**:
- **Lesson 1 (Conjuntos)**: 5-6 questions
  - Set notation and representation
  - Set operations (union, intersection)
  - Set relationships and membership
  - Number system classification
  - Application problems (Venn diagrams)

- **Lesson 2 (Valor Absoluto)**: 4-5 questions
  - Basic absolute value evaluation
  - Operations with absolute values
  - Sign properties and rules
  - Complex expressions
  - Real-world applications

### 1.3 Question Types and Structure
**Format**: Open-ended with detailed solutions
- Include step-by-step solutions
- Provide mathematical reasoning
- Show alternative approaches when applicable
- Include common error explanations

**File Output**: `quiz##.md` (markdown format)

---

## Phase 2: Question Bank Transformation

### 2.1 Multiple Choice Conversion
**Transform each question to multiple choice format with:**

#### Answer Structure:
- **1 Correct Answer** (100% credit)
- **3 Distractors** (0% credit each)

#### Distractor Design Principles:
1. **Common Errors**: Based on typical student mistakes
2. **Partial Understanding**: Reflects incomplete problem-solving
3. **Computational Errors**: Simple arithmetic or algebraic mistakes
4. **Conceptual Confusion**: Misunderstanding of mathematical concepts

#### Example Distractor Categories:
- **Sets**: Wrong operations (union vs intersection), missing elements, incorrect notation
- **Absolute Value**: Sign errors, incomplete calculations, definition misapplication
- **Applications**: Incorrect formula application, computational errors

### 2.2 LaTeX Expression Formatting
**Standard**: Use `\( \)` delimiters for all mathematical expressions

#### Mathematical Notation Guidelines:
```latex
Sets:           \(\{1, 2, 3\}\), \(A \cup B\), \(A \cap B\), \(A \subseteq B\)
Numbers:        \(\mathbb{N}\), \(\mathbb{Z}\), \(\mathbb{Q}\), \(\mathbb{R}\)
Absolute Value: \(|x|\), \(|-5|\)
Fractions:      \(\frac{a}{b}\)
Operations:     \((-3) \times (-4)\), \(a \cdot b\)
```

#### Content Organization:
- Question stem: Clear, concise problem statement
- Answer options: Properly formatted with LaTeX
- Feedback: Explanatory text for each option

---

## Phase 3: XML Generation for Moodle

### 3.1 XML Structure Requirements

#### File Header:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <!-- Course and lesson identification -->
  <question type="category">
    <category>
      <text>$course$/MATE3001/Quiz##</text>
    </category>
  </question>
```

#### Question Template:
```xml
<question type="multichoice">
  <name>
    <text>Q##-Topic-Subtopic</text>
  </name>
  <questiontext format="html">
    <text><![CDATA[<p>Question text with \(LaTeX\) expressions</p>]]></text>
  </questiontext>
  <defaultgrade>1.0000000</defaultgrade>
  <penalty>0.3333333</penalty>
  <hidden>0</hidden>
  <single>true</single>
  <shuffleanswers>true</shuffleanswers>
  <answernumbering>abc</answernumbering>
  
  <!-- Correct Answer -->
  <answer fraction="100" format="html">
    <text><![CDATA[<p>Correct option with \(LaTeX\)</p>]]></text>
    <feedback><text>Positive reinforcement and explanation</text></feedback>
  </answer>
  
  <!-- Distractors (3x) -->
  <answer fraction="0" format="html">
    <text><![CDATA[<p>Distractor with \(LaTeX\)</p>]]></text>
    <feedback><text>Explanation of why this is incorrect</text></feedback>
  </answer>
</question>
```

### 3.2 Naming Conventions

#### Question Names:
Format: `Q##-Topic-Subtopic`

**Examples**:
- `Q1-Conjuntos-Enumeracion`
- `Q2-Conjuntos-Union`
- `Q7-ValorAbsoluto-Basico`
- `Q13-ValorAbsoluto-Complejo`

#### File Names:
- Quiz: `quiz##.md`
- Question Bank: `qui##_bank.xml`
- Specification: `BANK_SPEC.md`

### 3.3 Quality Assurance Checklist

#### XML Validation:
- [ ] Well-formed XML structure
- [ ] Proper CDATA sections for HTML content
- [ ] Correct fraction values (100 for correct, 0 for incorrect)
- [ ] Valid LaTeX syntax within `\( \)` delimiters

#### Content Validation:
- [ ] Each question has exactly 4 options
- [ ] Only one correct answer per question
- [ ] Distractors are plausible but incorrect
- [ ] Feedback is educational and specific
- [ ] Mathematical expressions render correctly

#### Moodle Compatibility:
- [ ] Category structure matches course organization
- [ ] Question types are supported (multichoice)
- [ ] Grading and penalty settings are appropriate
- [ ] Answer shuffling is enabled

---

## Implementation Workflow

### Step-by-Step Process:

1. **Analyze Lesson Materials**
   - Read LaTeX content and exercise files
   - Identify key concepts and learning objectives
   - Note common exercise patterns and solutions

2. **Create Initial Quiz**
   - Develop 10 comprehensive questions
   - Include detailed step-by-step solutions
   - Cover all major topics from both lessons
   - Save as `quiz##.md`

3. **Transform to Multiple Choice**
   - Convert each question to 4-option format
   - Design 3 realistic distractors per question
   - Format all math expressions with `\( \)` delimiters
   - Add explanatory feedback for each option

4. **Generate XML File**
   - Structure according to Moodle XML schema
   - Implement proper question categorization
   - Ensure well-formed XML with CDATA sections
   - Validate LaTeX expression formatting
   - Save as `qui##_bank.xml`

5. **Quality Review**
   - Test XML import in Moodle sandbox
   - Verify mathematical expression rendering
   - Check question randomization and feedback
   - Confirm grading accuracy

---

## Best Practices

### Mathematical Content:
- Use consistent notation throughout all questions
- Ensure computational accuracy in all calculations
- Include intermediate steps in complex problems
- Provide context for abstract mathematical concepts

### Pedagogical Considerations:
- Align questions with lesson learning objectives
- Progress from simple to complex concepts
- Include application problems when possible
- Design distractors to address common misconceptions

### Technical Requirements:
- Maintain XML standards for Moodle compatibility
- Test LaTeX rendering in target environment
- Use appropriate character encoding (UTF-8)
- Follow established file naming conventions

### Documentation:
- Maintain clear records of question sources
- Document distractor rationale
- Keep version history of question banks
- Update specifications based on implementation feedback

---

## Troubleshooting Common Issues

### LaTeX Rendering Problems:
- Ensure proper delimiter usage: `\( \)` not `$ $`
- Escape special characters in XML: `&lt;`, `&gt;`, `&amp;`
- Test complex expressions before finalizing

### XML Import Failures:
- Validate XML structure with online validators
- Check for unescaped special characters
- Verify CDATA section formatting
- Ensure proper encoding declaration

### Question Quality Issues:
- Review distractor plausibility with subject experts
- Test questions with student focus groups
- Analyze item statistics after implementation
- Refine based on performance data

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-08-19 | Initial specification based on Quiz 01 implementation |

---

*This specification document should be updated as new lessons are processed and the workflow is refined based on implementation experience.*