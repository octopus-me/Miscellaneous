# STARTING A REACT PROJECT

## Step 1: Install Node.js and npm

Before starting, ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org). npms is included with Node.js, so installing Node.js will also install npm.

```
node -v
npm -v
```

## Step 2: Set Up a New React Project

The easiest way to start a React project is by using Create React App, a command-line tool that sets up a new React project with a morder build setup and sensible defaults.

1. **Open your terminal.**
2. **Navigate to the directory** where you want to create your project
3. **Run the following command** to create a new React project

```
npx create-react-app my-app
```

## Step 3: Navigate into the project Directory

```
cd my-app
```

## Step 4: Start the Developmente Server

Now that you have set up your project, you can start the developmente server:

```
npm start
```

## Step 5: Explore the project Structure

Your newly created React Project will have the following basic structure

```
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

- node_modules/: Contains all the dependencies for your React app.
- public/: Contains static files and the HTML template for your app.
- src/: Contains the JavaScript and CSS files for your React components and logic.
- package.json: Contains metadata about your project and the list of dependencies.
- .gitignore: Specifies files and directories that should be ignored by Git.

## Step 6: Start Developing

Now you can start developing your React application. Edit the src/App.js file to begin modifying the main component of your app.
