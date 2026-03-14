/*
========================================================
GIT TERMINAL COMMANDS – STUDENT NOTES
========================================================
These notes explain commonly used Git commands for
checking changes, restoring files, viewing history,
and fetching updates from a remote repository.
*/


/*
--------------------------------------------------------
1. Checking Differences in Code
--------------------------------------------------------

git diff

Purpose:
Shows the difference between your last commit and the
current uncommitted changes in your working directory.

Use Case:
You modified a file and want to see what exactly changed
before committing.

Example:
git diff

This command will display:
- lines removed
- lines added
- file modifications
*/


/*
--------------------------------------------------------
2. Restoring Files
--------------------------------------------------------

Sometimes you may want to discard changes and return
to the last committed version of the file.

Command 1:
git checkout -f

Purpose:
Forcefully restores ALL files in your working directory
to the state of the most recent commit.

Warning:
This will remove all uncommitted changes.


Command 2:
git checkout <file-path>

Purpose:
Restores a specific file to its last committed version.

Example:
git checkout src/app.js

This will discard changes made in app.js only.
*/


/*
--------------------------------------------------------
3. Checking Status of Repository
--------------------------------------------------------

git status

Purpose:
Shows the current state of the working directory.

It displays:
- Modified files
- Untracked files
- Staged files
- Branch information

Example:
git status

This command is used very frequently while working with Git.
*/


/*
--------------------------------------------------------
4. Viewing Commit History
--------------------------------------------------------

Command 1:
git log

Purpose:
Displays the full commit history.

Information shown:
- Commit ID
- Author
- Date
- Commit message


Command 2:
git log -p

Purpose:
Shows commit history along with the actual code
changes introduced in each commit.

Useful for reviewing detailed modifications.


Command 3:
git log --oneline

Purpose:
Displays commit history in a compact format.

Example Output:
a1b2c3d Added login page
b2c3d4e Fixed bug in signup

This is very useful when you only want a quick overview.
*/


/*
--------------------------------------------------------
5. Fetching Updates from Remote Repository
--------------------------------------------------------

Command:
git pull origin main

Purpose:
Fetches the latest changes from the "main" branch
of the remote repository and merges them into
your current local branch.

Example:
git pull origin main

This ensures your local project is updated with
the latest code from GitHub.
*/


/*
--------------------------------------------------------
6. Git Fetch
--------------------------------------------------------

Command:
git fetch

Purpose:
Downloads all updates, commits, and branches from
the remote repository.

Important:
It DOES NOT automatically merge the changes into
your local branch.

This allows you to review changes before merging.


Example:
git fetch

After fetching, you can manually merge changes.
*/


/*
--------------------------------------------------------
7. Difference Between Git Fetch and Git Pull
--------------------------------------------------------

Git Fetch
------------------------------------
- Downloads updates from remote
- Does NOT merge changes
- Safer for reviewing updates
- Updates remote tracking branches


Git Pull
------------------------------------
- Downloads updates
- Automatically merges changes
- Faster workflow
- May create merge conflicts


Simplified Concept:

git fetch
"Download changes but do not apply them"

git pull
"Download changes and apply them immediately"
*/


/*
--------------------------------------------------------
8. Why Git Fetch is Useful
--------------------------------------------------------

Benefits:
- Allows developers to review changes first
- Prevents unexpected merge conflicts
- Helps when working with multiple branches
- Avoids cloning the repository repeatedly
*/


/*
--------------------------------------------------------
9. Upcoming Git Concepts
--------------------------------------------------------

Two important Git concepts to learn next:

1. Git Stashing
   Temporarily saves uncommitted changes so you
   can switch branches without committing.

2. Git Branching
   Allows developers to create separate lines
   of development for new features or fixes.
*/


/*
========================================================
END OF NOTES
========================================================
*/