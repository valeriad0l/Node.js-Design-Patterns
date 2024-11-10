# Web-Based Enterprise Application Design A2 ♪

## Description:
This assignment requires implementations of various design patterns in Node.js, based on exercises from the book *Node.js Design Patterns* and *Patterns of Enterprise Application Architecture* by Martin Fowler. Each question demonstrates a specific design pattern or coding technique in Node.js, organized into separate directories.

### Project Structure

```plaintext
Node.js Design Patterns/
├── question1/                # Web presentation patterns (MVC) implementation
├── question2/                # Console color factory
├── question3/                # Timestamped logs using Proxy
├── question4/                # Logging with Strategy pattern
├── question5/                # Logging with Template pattern
``` 

**Question 1: Web Presentation Patterns (MVC)**  
Implements MVC design pattern for an artist-album example using two applications. The first uses Page Controller and Template View for displaying artist information, and the second uses Front Controller and Template View to display artist and album information.  

**Question 2: Console Color Factory**  
Implements a console color factory that allows logging in different colors using a factory function to create color-specific console classes.  

**Question 3: Timestamped Logs**  
Uses a proxy to enhance console logging functions (`log`, `error`, `info`, `debug`) by prepending a timestamp to each log entry.  

**Question 4: Logging with Strategy**  
Implements a logging component using the Strategy pattern, allowing log messages to be sent to different outputs (console or file) based on the selected strategy.  

**Question 5: Logging with Template**  
Implements the same logging component as Question 4 but uses the Template pattern instead, with a `ConsoleLogger` and `FileLogger`.  

**Technologies Used:**  
- Node.js  
- Express  
- EJS  
- JavaScript ES6+  

