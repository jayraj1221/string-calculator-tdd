# 📘 TDD Log – String Calculator Kata

This document logs each **TDD cycle** (Red → Green → Refactor) to show how the solution evolved step-by-step, in alignment with TDD best practices.

---

## 🌀 Cycle 0: Initial Setup

### ✅ Actions Performed:
- Initialized Node.js project with `npm init -y`
- Installed Jest (`npm install --save-dev jest`)
- Created folder structure:
  - `src/` → main logic
  - `test/` → unit tests
  - `screenshots/` → for result images
- Added boilerplate files:
  - `.gitignore`, `README.md`, `TDD_LOG.md`
- Created `.gitkeep` inside `screenshots/`

---

## 🧪 Cycle 1: Handle Empty String

### 🔴 Test
- Wrote a test to ensure `add("")` returns `0`

### 🟢 Code
```js
function add(numbers) {
  if (numbers === "") return 0;
}
```
---

## 🧪 Cycle 2: Handle Single Number Input

### 🔴 Test
- Write test to check that `add("5")` returns `5`

### 🟢 Code
```js
function add(numbers) {
  if (numbers === "") return 0;
  return parseInt(numbers);
}
```
---

## 🧪 Cycle 3: Handle Exactly Two Comma-Separated Numbers

### 🔴 Test
- Add test: `add("1,2")` should return `3`

### 🟢 Code
```js
function add(numbers) {
  if (numbers === "") return 0;

  const nums = numbers.split(",");
  if (nums.length === 1) return parseInt(nums[0]);
  if (nums.length === 2) return parseInt(nums[0]) + parseInt(nums[1]);
}
```
---

## 🧪 Cycle 4: Handle Multiple Comma-Separated Numbers

### 🔴 Test
- Added test: `add("1,2,3,4")` should return `10`

### 🟢 Code
```js
function add(numbers) {
  if (numbers === "") return 0;

  const nums = numbers.split(",").map(n => parseInt(n));
  return nums.reduce((sum, num) => sum + num, 0);
}
```