# Workout Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This web app runs with Node.js, Express.js, MongoDB and Mongoose.

A user can create a new workout session and add to existing workouts. They can also visit the dashboard to see their combined daily workout duration and the amount of pounds lifted over the course of each day. If the user logs workouts over several days, these are reflected in the dashboard as well.

---

## Table of Contents

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Images](#images)

* [Credits](#credits)

* [Questions](#questions)

---

## License

This project is licensed under the MIT License. To learn more visit:   
> [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Installation

To install the necessary dependencies, right-click on the root directory, open the intregrated terminal, and run this command:

```
npm i
```
If the package.json file is missing, create the file using this command:

```
npm init -y
```
To install the necessary dependencies, run this command for express, mongoose, nodemon, and morgan (optional npm to see status of routes in the integrated terminal).

```
npm i <dependency>
```

## Usage

To initialize the app from VS Code, open the intregrated terminal from the root directory and run:

```
nodemon server.js
```
If you wish to seed the database and test the functionality, run this command:

```
node seeders/seed.js
```

Then open your browser at: **localhost:3000/** 

</br>

> To see the deployed application in Heroku, visit <>

## Images

## Credits
MIT badge was accessed from GitHub user [Lukas Himsel](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Questions

If you have any questions, please contact me at: paolaagonzalezm@email.arizona.edu.