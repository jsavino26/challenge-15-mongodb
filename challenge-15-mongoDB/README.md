### 1. Install TypeScript

First, you need to install TypeScript as a development dependency. You can do this by running the following command in your project directory:

```bash
npm install typescript --save-dev
```

### 2. Create a TypeScript Configuration File

Next, create a `tsconfig.json` file in the root of your project. This file will contain the configuration for the TypeScript compiler. You can create it with the following command:

```bash
npx tsc --init
```

This will generate a `tsconfig.json` file with default settings. You may want to modify it according to your needs. Here’s a basic example:

```json
{
  "compilerOptions": {
    "target": "es6", // Specify ECMAScript target version
    "module": "commonjs", // Specify module code generation
    "strict": true, // Enable all strict type-checking options
    "esModuleInterop": true, // Enables emit interoperability between CommonJS and ES Modules
    "skipLibCheck": true, // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true // Disallow inconsistently-cased references to the same file
  },
  "include": ["**/*.ts"], // Include all TypeScript files
  "exclude": ["node_modules"] // Exclude node_modules
}
```

### 3. Rename JavaScript Files to TypeScript

Now, you need to rename your JavaScript files (`.js`) to TypeScript files (`.ts`). Here’s how you can do it for the files you provided:

- Rename `server.js` to `server.ts`
- If you have any other JavaScript files, rename them similarly.

### 4. Update Your Code

You may need to make some changes to your code to accommodate TypeScript's type system. Here’s how you can update the `server.ts` file based on the provided `server.js`:

```typescript
// filepath: c:\Users\Albert\bootcamp\challenge-15-mongoDB\server.ts
import express from 'express';
import db from './config/connection';
import routes from './routes';

const PORT: number = Number(process.env.PORT) || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
```

### 5. Update Your Package.json Scripts

You may want to update your `package.json` scripts to compile TypeScript before running the server. You can add a script to compile TypeScript:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node dist/server.js", // Assuming you compile to a 'dist' folder
  "dev": "nodemon dist/server.js",
  "build": "tsc" // Add this line
}
```

### 6. Compile TypeScript

You can compile your TypeScript files to JavaScript by running:

```bash
npm run build
```

### 7. Run Your Application

After compiling, you can run your application using:

```bash
npm start
```

### 8. Update Other Files

If you have other JavaScript files (like routes, models, etc.), you should also convert them to TypeScript following similar steps. Make sure to define types for your variables and function parameters as needed.

### 9. Install Type Definitions

If you are using any libraries, you may need to install their type definitions. For example, for Express, you can install:

```bash
npm install @types/express --save-dev
```

Repeat this for any other libraries you are using.

### Summary

By following these steps, you will have successfully converted your JavaScript files to TypeScript files. Make sure to test your application thoroughly after the conversion to catch any type-related issues.