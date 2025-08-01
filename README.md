# 🧪 String Calculator TDD Kata

Welcome to my implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)** in JavaScript.  
This project is part of the **Incubyte hiring assessment** and showcases clean, readable, and well-tested code written in small, meaningful steps.

---

## 📦 Tech Stack

- 🟨 JavaScript (Node.js)
- 🧪 Jest (Testing Framework)
- 📝 TDD + Red-Green-Refactor Approach

---
## ✅ Kata Requirements

| Feature Description                                                                 | Status |
|--------------------------------------------------------------------------------------|--------|
| Returns 0 for empty string                                                          | ✅     |
| Returns number for a single value                                                   | ✅     |
| Returns sum for two numbers separated by comma                                      | ✅     |
| Supports multiple comma-separated numbers                                           | ✅     |
| Handles newline (`\n`) as a delimiter                                               | ✅     |
| Supports custom single-character delimiters (e.g. `"//;\n1;2"`)                     | ✅     |
| Throws exception for negative numbers                                               | ✅     |
| Shows **all** negative numbers in exception                                         | ✅     |
| Supports **custom delimiters of any length** using format `"//[***]\n1***2***3"`    | ✅     |
| Ignores numbers greater than 1000 (e.g. `"2,1001"` → `2`)                           | ✅     |

---

## ▶️ How to Run the Tests

```bash
npm install
npm test
