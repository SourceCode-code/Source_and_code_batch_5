/*
========================================================
GIT & GITHUB BASICS – STUDENT NOTES
========================================================
*/

/*
--------------------------------------------------------
1. Email for GitHub
--------------------------------------------------------

Example email format used for GitHub account:

yournamesurname.work@gmail.com

Example:
siddhantgadakh.work@gmail.com

Note:
This email is used to create your GitHub account and link
your commits with your identity.
*/


/*
--------------------------------------------------------
2. What is Git?
--------------------------------------------------------

Git is a software used for Version Control.

Version Control means:
Tracking changes in your code over time.

Why we use Git:
- Track every change in the project
- Work with multiple developers
- Restore previous versions of code
- Manage different features using branches
*/


/*
--------------------------------------------------------
3. What is GitHub?
--------------------------------------------------------

GitHub is a website where we host and store our Git repositories online.

Think of it like:
Git  = Version control software
GitHub = Cloud platform to store and share Git repositories

Main Uses of GitHub:
- Store project code online
- Collaborate with other developers
- Backup code
- Share open-source projects
*/


/*
--------------------------------------------------------
4. What is a Repository (Repo)?
--------------------------------------------------------

Repository (Repo) = A unique location where your project is stored.

It contains:
- Project files
- Code
- Commit history
- Branches
- Collaboration details

Example:
A project like a website or application will have
its own repository.
*/


/*
--------------------------------------------------------
5. Steps to Push Code to GitHub (First Time)
--------------------------------------------------------

Step 1: Create a Repository on GitHub

Go to:
github.com

Click:
New Repository

Give:
- Repository name
- Description (optional)

Click:
Create Repository


Step 2: Connect your local project to GitHub

Clone the repository:

git clone <repository-url>


Step 3: Add your project files

Move or create your project files inside the cloned folder.
*/


/*
--------------------------------------------------------
6. Daily Workflow (Push Changes to GitHub)
--------------------------------------------------------

Before pushing any changes always pull the latest code.

Step 1: Get the latest changes from GitHub

git pull origin main


Step 2: Add files to staging area

git add .

Meaning:
Moves all changed files from Local Area to Staging Area.


Step 3: Create a commit

git commit -m "your message"

Example:
git commit -m "Added login page"

Meaning:
Creates a checkpoint with a message describing the changes.


Step 4: Push changes to GitHub

git push origin main

Meaning:
Uploads your committed changes from your local system
to the GitHub repository.
*/


/*
--------------------------------------------------------
7. Important Commands Summary
--------------------------------------------------------

git clone <repo-url>
Clones (downloads) a repository from GitHub to your computer.

git pull origin main
Gets the latest changes from GitHub.

git add .
Adds all changed files to staging.

git commit -m "message"
Creates a checkpoint with a message.

git push origin main
Uploads your commits to GitHub.
*/


/*
--------------------------------------------------------
8. Workflow for Working on a Repository
--------------------------------------------------------

Step 1
Clone the repository

git clone <repo-url>


Step 2
Make changes in project files


Step 3
Pull latest updates before pushing

git pull origin main


Step 4
Add files

git add .


Step 5
Create commit

git commit -m "message"


Step 6
Push code

git push origin main
*/


/*
--------------------------------------------------------
9. Important Rule
--------------------------------------------------------

Always pull before pushing.

Correct order:

git pull origin main
git add .
git commit -m "message"
git push origin main

This prevents conflicts and keeps your code updated.
*/


/*
========================================================
END OF NOTES
========================================================
*/