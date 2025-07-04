
---

### 📗 `TDD_LOG.md`

```markdown
# 📘 TDD Log – String Calculator Kata

This document logs each **TDD cycle** (Red → Green → Refactor) to show how the solution evolved step-by-step, in alignment with TDD best practices.

---

## 🌀 Cycle 0: Initial Setup

### ✅ Actions Performed:
- Initialized Node.js project with `npm init -y`
- Installed Jest (`npm install --save-dev jest`)
- Created the following folder structure:
  - `src/` → contains main logic (`calculator.js`)
  - `test/` → contains unit tests (`calculator.test.js`)
  - `screenshots/` → for visuals like test results and commit history
- Created boilerplate files:
  - `.gitignore` → to ignore `node_modules/` and `screenshots/`
  - `README.md` → project overview and instructions
  - `TDD_LOG.md` → this file for tracking TDD evolution
- Added `.gitkeep` inside `screenshots/` to include empty folder in Git

---

🧭 **Next Step:** Start Cycle 1 → Handle empty string input with test, implementation, and refactor (if needed)
