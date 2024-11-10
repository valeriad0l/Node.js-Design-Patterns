# Node.js Design Patterns

This repository contains implementations of various design patterns in Node.js, based on exercises from the book *Node.js Design Patterns* and *Patterns of Enterprise Application Architecture* by Martin Fowler. Each question demonstrates a specific design pattern or coding technique in Node.js, organized into separate directories.

## Table of Contents

- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Structure

```plaintext
Node.js Design Patterns/
├── .gitignore                # Git ignore file
├── question1/                # Web presentation patterns (MVC) implementation
├── question2/                # Console color factory
├── question3/                # Timestamped logs using Proxy
├── question4/                # Logging with Strategy pattern
├── question5/                # Logging with Template pattern
├── package.json              # Node.js dependencies and scripts
├── package-lock.json         # Lock file for exact dependency versions
└── README.md                 # Project documentation
``` 

**Question 1: Web Presentation Patterns (MVC)**
Implements MVC design pattern for an artist-album example using two applications. The first uses Page Controller and Template View for displaying artist information, and the second uses Front Controller and Template View to display artist and album information. <br/>
**Question 2: Console Color Factory**
Implements a console color factory that allows logging in different colors using a factory function to create color-specific console classes. <br/>
Question 3: Timestamped Logs
Uses a proxy to enhance console logging functions (log, error, info, debug) by prepending a timestamp to each log entry. <br/>
Question 4: Logging with Strategy
Implements a logging component using the Strategy pattern, allowing log messages to be sent to different outputs (console or file) based on the selected strategy. <br/>
Question 5: Logging with Template
Implements the same logging component as Question 4 but uses the Template pattern instead, with a ConsoleLogger and FileLogger.

**Tech Used:**
-Node.js
-Express
-EJS
-JavaScript ES6+
