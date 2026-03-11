// ===============================
// Git Basics: Repository & Setup
// ===============================

// --- What is a Repository? ---
// A repository is a unique location where you can store your code.
// GitHub is open source, so you can create unlimited repositories.


// --- How to Create and Push Your Code ---
// 1. Go to your GitHub profile
// 2. Click the "+" button
// 3. Select "New Repository"
// 4. Run the following commands inside your project folder:


/*
git init
   -> Initializes git in your local folder

git add .
   -> Adds all files to the staging area (git add all)

git commit -m "first commit"
   -> Saves the changes with a unique identity (commit message)

git branch -M main
   -> Creates a main branch (renames from master to main)

git remote add origin https://github.com/SourceCode-code/Source_and_Code_Batch_4_Master.git
   -> Links your local repo with the remote GitHub repo

git push -u origin main
   -> Pushes your changes to GitHub (main branch)
*/


// --- Adding Files ---
// git add filename
// -> Adds a single file to the staging area

// git add .
// -> Adds ALL files to the staging area


// --- How to Add New Changes to Repo ---
// To push only the recent changes, run these three commands:

// git add .
// -> Adds modified files

// git commit -m "adding commands to push changes"
// -> Commits with a descriptive message

// git push origin main
// -> Pushes committed changes to GitHub


// --- Efficiency Tip ---
// Using these three commands together keeps your workflow clean & efficient.


// --- Cloning a Repository ---
// git clone "url"
// -> Clones an existing remote repo into your system


// ===============================
// Assignments
// ===============================

// Task 1: Create a new repository and push a simple file.
// Task 2: Clone our repository and explore it.


// ===============================
// Example
// ===============================

// git pull origin main
// -> Downloads the latest changes from remote repo into your local repo
