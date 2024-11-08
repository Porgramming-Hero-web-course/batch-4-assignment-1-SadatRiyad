# Batch 4 Assignment 1: Basic Problem Solving with TypeScript

## Overview
This repository contains solutions to a series of TypeScript problems that aim to demonstrate fundamental concepts of the language, including data typing, interfaces, class inheritance, type checking, and data structure manipulation. Each problem is carefully designed to illustrate efficient problem-solving techniques while adhering to TypeScript's best coding practices.

## Features
- **Type-Safe Code**: Solutions emphasize type safety, a core benefit of using TypeScript.
- **Diverse Problem Set**: Problems range from array operations to complex type guards and interface usage.
- **Educational Content**: Each problem is accompanied by example input and output to help users understand how TypeScript can be applied to practical scenarios.
- **Code Clarity**: Well-structured and readable code to promote understanding and maintainability.

## Project Structure
```
├── Blog_1.md             # Blog post explaining union and intersection types in TypeScript
├── problem_1.ts          # Function to sum an array of numbers
├── problem_2.ts          # Function to remove duplicates from an array
├── problem_3.ts          # Function to count word occurrences in a string
├── problem_4.ts          # Function to calculate the area of different shapes using union types
├── problem_5.ts          # Additional problem-solving example
├── problem_6.ts          # Additional problem-solving example
├── problem_7.ts          # Additional problem-solving example
├── problem_8.ts          # Additional problem-solving example
```

## Problem Overview (1-4)
### Problem 1: Sum of Array Elements
Write a TypeScript function `sumArray` that takes an array of numbers and returns the sum of all elements.

```typescript
// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
```

### Problem 2: Remove Duplicates from an Array
Create a TypeScript function `removeDuplicates` that accepts an array of numbers and returns a new array with duplicates removed, preserving the original order.

```typescript
// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// Sample Output:
[1, 2, 3, 4, 5];
```

### Problem 3: Count Word Occurrences
Create a function called `countWordOccurrences` that takes a sentence and a word and returns the number of times the word appears in the sentence, ignoring case.

```typescript
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;
```

### Problem 4: Shape Area Calculation with Union Types
Define a union type `Circle` and `Rectangle`, each with unique properties. Implement a function `calculateShapeArea` that uses type guards to determine the area based on the shape type.

```typescript
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 5 });

// Sample Output 2:
20;
```

## Getting Started
To set up and run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/your-repo-name.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd your-repo-name
   ```
3. **Install TypeScript (if not installed)**:
   ```bash
   npm install -g typescript
   ```
4. **Compile TypeScript files**:
   ```bash
   tsc
   ```
5. **Run the compiled JavaScript files**:
   ```bash
   node dist/problem_1.js   # Replace with the desired problem file
   ```

## Additional Notes
- **Contributions**: Feel free to fork the repository and submit pull requests with improvements or additional solutions.
- **Feedback**: For any questions or further clarification, please join our Facebook group for discussions.
- **Support**: If you're facing issues or need help with the setup, please don't hesitate to reach out to us.