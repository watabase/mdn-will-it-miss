module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'  // Use recommended React linting rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true  // Enable linting for JSX
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'  // Automatically detect the React version
    }
  },
  plugins: [
    'react'  // Enable React plugin
  ],
  rules: {
    'react/jsx-uses-react': 'off',  // Not needed in React 17+
    'react/react-in-jsx-scope': 'off',  // Not needed for React 17+
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',  // Disable if using TypeScript or not using prop types
  }
};
