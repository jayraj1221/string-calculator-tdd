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
---

## 🧪 Cycle 5: Support Newline Characters as Delimiters

### 🔴 Test
- Added test: `add("1\n2,3")` should return `6`

### 🟢 Code
```js
function add(numbers) {
  if (numbers === "") return 0;

  const delimiters = /[,\n]/;
  const parts = numbers.split(delimiters).map(n => n.trim()).filter(n => n !== "");
  const parsedNumbers = parts.map(Number);

  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}
```
### ♻️ Refactor
- Moved delimiter logic to a separate `tokenize()` helper
- Used `!numbers` for a broader empty-check (covers `null`, `undefined`)
- Kept main `add()` logic focused on parsing and summing only

```js
function add(numbers) {
  if (!numbers) return 0;

  const values = tokenize(numbers);
  const sum = values.reduce((acc, num) => acc + parseInt(num), 0);
  
  return sum;
}

function tokenize(input) {
  const delimiterRegex = /[,\n]/;
  return input
    .split(delimiterRegex)
    .map(n => n.trim())
    .filter(n => n !== "");
}
```
---

## 🧪 Cycle 6: Support Custom Delimiter using `//[delimiter]\n[numbers]` Format

### 🔴 Test
- Added test: `add("//;\n1;2")` should return `3`

### 🟢 Code
```js
function add(numbers) {
  if (!numbers) return 0;

  const values = tokenize(numbers);
  return values.reduce((sum, num) => sum + parseInt(num), 0);
}

function tokenize(input) {
  let delimiterRegex = /[,\n]/;  
  let numberSection = input;

  const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)/);
  if (customDelimiterMatch) {
    const customDelimiter = customDelimiterMatch[1];      
    numberSection = customDelimiterMatch[2];              
    delimiterRegex = new RegExp(`[${customDelimiter}\n]`); 
  }

  return numberSection
    .split(delimiterRegex)
    .map(n => n.trim())
    .filter(n => n !== "");
}
```