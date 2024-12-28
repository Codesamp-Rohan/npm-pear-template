# npm-pear-template

Welcome to the **npm-pear-template**, a streamlined solution for creating and distributing GUI applications using the **Pear framework**. This template is designed to help you build and publish your app to NPM, making it easily accessible with a single command on any system.

---

## Features
- **Pre-configured Pear setup**: Save time with a ready-to-use configuration.
- **Cross-platform deployment**: Publish your app on NPM for universal usage.
- **Customizable structure**: Modify HTML, CSS, and JavaScript to fit your needs.
- **Global execution**: Run your app on any system using a custom command.

---

## Getting Started

### 1. Clone the Template
Clone this repository and navigate to the project directory:

```bash
git clone https://github.com/Codesamp-Rohan/npm-pear-template.git
cd npm-pear-template
```

### 2. Install Dependencies
Ensure you have Node.js and the Pear framework installed. Then, install project dependencies:

```bash
npm install
```

---

### 3. Customize Your App
Start editing the files to make the application your own:
 - **HTML**: Edit index.html to define your app's structure.
 - **CSS**: Customize styles in styles.css.
 - **JavaScript**: Add functionality in script.js.

---

### 4. Test Locally
Run your app locally during development:
```bash
pear run -d .
```
---

### 5. Prepare for NPM:
Modify the package.json file for publishing:

 - Set the name field to your desired package name.
 - Update the bin field to specify the command users will use to run your app. Example:
 ```bash
 "bin": {
    "your-command": "./bin/gui.js"
 }
 ```
 Ensure that gui.js initializes the Pear framework and loads index.html as the GUI.

---

### 6. Publish Your App
Publish your app to NPM:
```bash
npm login
npm publish
```
---

### 7. Install and Run Your App
After publishing, users can install your app globally via NPM:
```bash
npm install -g your-package-name
```
And run it using the specified command:
```bash
your-command
```
---

## Project Structure

```bash
npm-pear-template/
├── bin
├    └── gui.js         # Main entry point for the app
├── src
├     ├── index.html     # App UI
├     ├── styles.css     # Styles for the app
├     └── script.js      # Logic for the app
├── package.json   # NPM configuration
├── README.md      # Documentation
└── node_modules/  # Dependencies
```
---

### Contributions
Contributions are welcome! Fork this repository, make changes, and submit a pull request. Let's build amazing GUI applications together! 😊

---

### Contact

Have questions or suggestions? Reach out!

- **Email:** rohanchaudhary.bkbiet2022@gmail.com  
- **LinkedIn:** [Rohan Chaudhary](https://www.linkedin.com/in/rohan-chaudhary-399742255)
- **GitHub Issues:** [Open an issue](https://github.com/Codesamp-Rohan/npm-run-template/issues) 