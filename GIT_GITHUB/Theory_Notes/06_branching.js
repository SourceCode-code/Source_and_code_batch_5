/*
========================================================
GIT BRANCHING – STUDENT NOTES
========================================================
Git Branching allows developers to work on new features
or tasks without affecting the main project code.
This helps multiple developers work safely on the
same repository.
*/


/*
--------------------------------------------------------
1. What is Git Branching?
--------------------------------------------------------

Git Branching allows a developer to create an exact copy
of an existing branch (usually the main branch) and work
on it independently.

This means:
- Changes made in a branch do NOT affect the main branch
- Developers can work safely on new features
- The main branch remains stable
*/


/*
--------------------------------------------------------
2. Case Study – Real World Problem
--------------------------------------------------------

Problem Statement:

Assume we have one repository with a "main" branch.

A task is assigned to 30 developers to:
- Add files
- Modify code
- Push changes

If all 30 developers directly push to the main branch,
several problems can occur.
*/


/*
--------------------------------------------------------
3. Problems Without Branching
--------------------------------------------------------

1. Merge Conflicts
Multiple developers editing the same file can create conflicts.

2. Data Loss
One developer’s code might overwrite another developer’s work.

3. Increased Downtime
If broken code is pushed to the main branch, the project may stop working.

4. No Review Mechanism
There is no proper way to review code before it becomes part of the main project.
*/


/*
--------------------------------------------------------
4. Solution – Git Branching
--------------------------------------------------------

To solve these issues, developers work in separate branches.

Each developer creates their own branch and works independently.

Example Structure:

main
 |
 |
 |--- ashiya
 |--- shivani
 |--- vaibhav
 |--- tejas


Each developer:
- Creates a branch
- Adds their code
- Pushes changes to their branch

The main branch remains untouched until changes are reviewed.
*/


/*
--------------------------------------------------------
5. Pull Request (PR)
--------------------------------------------------------

After completing work in a branch, developers create a
Pull Request (PR).

Pull Request means:
Requesting the project maintainer or senior developer
to review and merge the changes into the main branch.

Process:
1. Developer finishes work in branch
2. Developer raises a Pull Request
3. Senior reviews the code
4. If approved, the code is merged into main
*/


/*
--------------------------------------------------------
6. Features of Git Branches
--------------------------------------------------------

1. Unlimited Branches
You can create many branches in a repository.

2. Stable Main Branch
The main branch remains clean and stable.

3. Parallel Development
Multiple developers can work simultaneously on the
same repository without interfering with each other.
*/


/*
--------------------------------------------------------
7. Practical Flow of Git Branching
--------------------------------------------------------

Step 1 – Create a Branch

You can create a branch using:

Option 1:
GitHub UI

Option 2:
Git Terminal
*/


/*
--------------------------------------------------------
8. Creating a Branch from Terminal
--------------------------------------------------------

Step 1
Fetch latest repository information

git fetch


Step 2
Pull latest changes from main

git pull origin main


Step 3
Create a new branch

git checkout -b branchname

Example:
git checkout -b feature-login


Important:
The new branch will be created from the branch
you are currently on.
*/


/*
--------------------------------------------------------
9. Branch Naming Rules
--------------------------------------------------------

1. Branch name must be unique

2. Spaces are not allowed

3. Special characters should be avoided

Example of good branch names:

feature-login
bugfix-header
add-payment-page
*/


/*
--------------------------------------------------------
10. Adding Code and Pushing to Branch
--------------------------------------------------------

Step 1
Fetch latest changes

git fetch


Step 2
Pull latest main branch updates

git pull origin main


Step 3
Add files to staging

git add .


Step 4
Create a commit

git commit -m "message"

Example:
git commit -m "Added login page"


Step 5
Push code to your branch

git push origin branchname

Example:
git push origin feature-login
*/


/*
--------------------------------------------------------
11. Creating a Pull Request
--------------------------------------------------------

Pull Requests are usually created using the GitHub UI.

Steps:

1. Go to your repository on GitHub
2. Click "Compare & Pull Request"
3. Add description of your changes
4. Submit the Pull Request

This allows reviewers to inspect your code before merging.
*/


/*
--------------------------------------------------------
12. Merging the Code
--------------------------------------------------------

After review, a senior developer or repository maintainer
merges the branch into the main branch.

Once merged:
- Your changes become part of the main project
- The feature branch can be deleted
*/


/*
--------------------------------------------------------
13. Important Branch Commands
--------------------------------------------------------

Switch branch:

git checkout branchname


Create a new branch:

git checkout -b branchname


Example:

git checkout feature-login
git checkout -b add-dashboard
*/


/*
--------------------------------------------------------
14. Recommended Developer Workflow
--------------------------------------------------------

1. Pull latest code

git fetch
git pull origin main


2. Create branch
git checkout -b branchname

3. Work on feature

4. Add files
git add .

5. Commit changes
git commit -m "message"


6. Push branch
git push origin branchname


7. Create Pull Request
8. Get code reviewed and merged
*/


/*
========================================================
END OF NOTES
========================================================
*/