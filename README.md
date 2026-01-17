# Focus Blocker – Command Line Utility (Node.js)

## 1. Project Title
Focus Blocker: A Command-Line Tool to Reduce Distractions



## 2. Problem Statement

While studying and coding, I frequently get distracted by websites like YouTube, which negatively affects my focus and productivity. Manually blocking such websites by editing system files is inconvenient and error-prone.

I needed a simple, fast, and reusable solution that allows me to block and unblock distracting websites using a single command.



## 3. Solution Overview

To solve this problem, I developed a Node.js-based command-line utility that:

- Blocks distracting websites (e.g., YouTube)
- Unblocks them when needed
- Checks the current blocking status
- Works at the system level, independent of browser

The tool modifies the system’s hosts file to redirect selected websites to 127.0.0.1, effectively blocking access.



## 4. Technology Stack

- Programming Language: JavaScript
- Runtime Environment: Node.js
- Libraries Used (Standard Only):
  - fs (File System)
  - os (Operating System detection)
  - process (Command-line arguments)

No external libraries or frameworks were used.


## 5. Project Structure

focus-blocker-js/
│
├── blocker.js
├── DOCUMENTATION.md
├── screenshots/
│   ├── 
└── 

---

 6. How to Run the Project

 Prerequisites
- Node.js installed
- Administrator privileges (required to modify system files)

Steps

1. Open PowerShell as Administrator
2. Navigate to the project folder:


3. Run the following commands based on your requirement:

--for block the above command
   node blocker.js block

--for unblock
  node blocker.js unblock

