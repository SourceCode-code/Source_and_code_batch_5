/*
========================================================
GIT & GITHUB – ADVANCED COMMIT COMMANDS
========================================================
These commands are used for advanced Git operations such as
temporarily saving work, inspecting commits, and reverting
changes in a repository.
*/


/*
--------------------------------------------------------
1. Git Stash
--------------------------------------------------------

Command:
git stash

Purpose:
Temporarily saves (stashes) your uncommitted changes and
removes them from your working directory.

This allows you to switch branches or work on another task
without committing unfinished work.

Example Use Case:

You are working on Feature A but suddenly need to fix a bug
on another branch.

Instead of committing incomplete work, you can run:

git stash

Now your working directory becomes clean and you can
switch branches.

Later, you can bring back the saved changes.
*/


/*
--------------------------------------------------------
2. Git Stash Apply
--------------------------------------------------------

Command:
git stash apply

Purpose:
Restores the changes that were previously saved using
git stash.

Example:

git stash apply

This will reapply the most recent stash to your working
directory.

Note:
The stash remains saved even after applying it.
*/


/*
--------------------------------------------------------
3. Git Blame
--------------------------------------------------------

Command:
git blame <file-path>

Purpose:
Shows detailed information about each line of a file,
including:

- Which commit introduced the change
- Who made the change
- When the change was made

Example:

git blame app.js

Use Case:
Helpful for identifying which developer modified a
specific line of code.
*/


/*
--------------------------------------------------------
4. Git Show
--------------------------------------------------------

Command:
git show <commit-id>

Purpose:
Displays detailed information about a specific commit.

Information shown:
- Author of the commit
- Date of the commit
- Commit message
- Code changes made in that commit

Example:

git show a1b2c3d
*/


/*
--------------------------------------------------------
5. Git Reset
--------------------------------------------------------

Command:
git reset

Purpose:
Moves files from the Staging Area back to the
Working Directory.

In simple terms:
It unstages files that were added using git add.

Example:

git reset

This removes files from staging but keeps the
changes in your working directory.
*/


/*
--------------------------------------------------------
6. Git Reset Hard
--------------------------------------------------------

Command:
git reset --hard <commit-id>

Purpose:
Resets the repository to a specific commit.

Effect:
- All commits after the given commit are removed
- All file changes are discarded
- The repository returns to the exact state of
  the specified commit

Example:

git reset --hard a1b2c3d


WARNING ⚠

This is a dangerous command because:

- It permanently deletes commit history
- All changes after that commit will be lost
- Cannot easily be recovered

Use with caution.
*/


/*
--------------------------------------------------------
7. Git Revert
--------------------------------------------------------

Command:
git revert <commit-id>

Purpose:
Reverts a specific commit by creating a new commit
that reverses the changes.

Difference from reset:

git reset
- Deletes commit history

git revert
- Keeps history safe
- Creates a new commit to undo changes

Example:

git revert a1b2c3d

This will create a new commit that cancels the
changes made in commit a1b2c3d.
*/


/*
--------------------------------------------------------
8. Quick Summary of Advanced Commands
--------------------------------------------------------

git stash
Temporarily saves uncommitted work.

git stash apply
Restores stashed changes.

git blame <file>
Shows who changed each line of a file.

git show <commit-id>
Displays detailed information about a commit.

git reset
Unstages files.

git reset --hard <commit-id>
Resets repository to a previous commit (dangerous).

git revert <commit-id>
Creates a new commit to undo a previous commit safely.
*/


/*
========================================================
END OF NOTES
========================================================
*/