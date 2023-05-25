module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'npm test', 'prettier --write'],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
}
