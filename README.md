<h2> GIT & GitHub learning </h2>

**Description:**
This is my testing repository to level up my git skills.

<h4>Update 26.07.2021: Testing fundamental git commands</h4>

	 git clone <repository>
	 git config --global user.name " "
	 git config --global user.email " "
	 git status
	- git add 
	- git commit -m " " / git commit -a -m " " 
	- git push
	- git log
	
	
<h4>Update 27.07.2021: .gitignore file </h4>

	- Better security
	- Good for ressource and performance
	- Advantage in GitHub repository
	- A few methods to create a gitignore file:
		1) By creating new repository in GitHub
		2) Templates on GitHub
		3) gitignore.io website
		4) atlassian git ignore patterns website
		

<h4>Update 27.07.2021: branch commands </h4>
	
	- git branch						(branche status)	
	- git branch <name>					(create new branch)
	- git checkout <branch-name>				(change actual branche)
	- git push -u origin <branche-name> 			(first push of new branch)
	- git checkout -b <branche-name>			(new branch and change branche in one step)
	
	
<h4>Update 27.07.2021: branch merge </h4>

	- 2 possibilities to merge:
		- fast forward merge	(actual branch is new main branch)
		- no fast forward merge	(creat one branch from two merged branches)
	- Commands:
		- git merge <branch-name>	(branch-name -> actual branche)
		- git push 					
	- fast forward merge:
		- do commits on new branch (but don't push!)
		- git checkout main
		- git merge <branch-name>
		- actual branch is now new main branch
		- git push
	- no fast forward merge:
		- do commits on branches (but don't push!)
		- git checkout main
		- git merge <branch>
		- auto commit from git to do one branch from two branches
		- git push
	
<h4>Update 01.08.2021: git stash </h4>
	
	- Put on into stash 
		- git stash
	- Checkout stash status
		- git stash list
	- Checkout what is in a stash commit
		- git stash show <stash@{i}>
		- git stash show <stash@{i}> -p
	- To diffrence the stash commits
		- git stash save "[change description]"
	- Put changes from stash into code
		- git stash apply
		- git stash pop
		- git stash apply <stash@{i}>
		- git stash pop <stash@{i}>
	- Remove a stash commit from stash
		- git stash drop <stash@{i}>
	- Clear stash
		- git stash clear
	- For not in index files and .ignore files
		- git stash -u
		- git stash -a
	- Creat a branch from a stash commit
		- git stash branche <branche-name> <stash@{i}>
		

<h4>Update 01.08.2021: merge conflicts </h4>

	- Conflicts when we work on the same file in the same place on two other branches
	- Conflicts by git merge
	- To solve these conflicts we must compare two files and decide what we want in code and what not
	- In companies we should consult our decision with other programmer
	- Example:
		- branch: feature-a
			Change some files
			git status
			git add "<files>"
			git commit -m "<description>"
			git push -u origin feature-a
			git checkout main
		- branch: main
			Change the same files
			git status
			git add <file>
			git commit -m "<description"
			git push
		- merge process: feature-a to main
			git merge feature-a
			merge conflict!
			To solve: decide in editor what you want in code what not
			git add <files>
			git commit -m "<description>"
			git push
	- Tree conflicts: 
		- We work on feature-a on some file
		- On branch main this file was remove
		- By 'git merge' we can decide, if we want to add this file or remove from repository
		
<h4>Update 02.08.2021: reverting changes </h4>
	
	- Checkout to a commit from past
		- git checkout <commit id>
	- Reverse changes maded in a commit
		- git revent <commit id>
	- Remove commit from repository history
		- git reset --mixed <commit id>
		- git reset --soft <commit id>
		- git reset --hard <commit id>
		!Each commend has other level of reset!
		
<h4>Update 08.08.2021: Change commit name </h4>

	- Change commit message in last commit
		- git commit --amend -m "<message>"
	- Check the content of the last commit
		- git show <commit-ID>
	- Add a file and its changes to last commit
		- git commit --amend
	- Change commit message in a few / old commits
		- git rebase -i <commit source>
		- Example: 
			git rebase -i HEAD~4 (last 4 commits)
		- Important: pick and reword
			- pick = I won't change this commit message
			- reword = I will change this commit message
			- Write reword when you want to change
			- You don't change message in the first window!
			- GIT opens you so many windows how many 'reword' you wrote
			- You change each commit in other editor window
	- DON'T CHANGE commits, which are in GitHub! That can make mistakes and troubles!
	
<h4>Update 08.08.2021: GitHub Fork and Pull Request</h4>

	- When user A want update repository from user B
	- First user A should fork repository from user B
	- After changes can user A send these changes to user B with a Pull Request
	- 7 Steps
		1) GitHub Fork repository from user B (user A)
		2) Clone repository to local workspace (user A)
		3) Update repository (user A)
		4) Commit changes (user A)
		5) Push changes to remote repository from user A (user A)
		6) Send Pull Request with changes to user B (user A)
		7) User B can decide what he will doing with these changes
		
<h4> Update 11.08.2021: 'git pull' and 'git fetch'</h4>
	
	- 'git pull'
		- Download data from the remote repository to your local repository 
		- And immediately apply the changes to your code
	- 'git fetch'
		- Updates the state of your local repository but only in terms of meta data
		- i.e. it does not modify your code and does not apply changes to your workspace

<h4> Update 30.08.2021: Commit names (good practice)</h4>

	- BAD PRACTICE:
		-Examples:
			- "typo"
			- "more changes"
			- "add test"
			- "add file"
			- "update condition"
		- Very bad for team work 
	- Git should make our work easy and more confortable
	- We need good practice and standards 
	- GOOD PRACTICE:
		1) Divide commit for subject and description
			- Two options
				- 1) 'git commit' and write description in editor
				- 2) 'git commit -m <subject> -m <description>'
		2) Limit the number of characters
			- Short but fully description in commit
			- Max 50 characters
			- More as 72 = GIT will cut our commit
		3) Uppercase letters at the beginning
			- Syntactix sugar
			- Better for look and history reading
		4) Subject without a dot at the end
		5) Writing in an imperative
			- Bad: "Added", "Changed", "Modifed"
			- Good: "Add", "Change", "Modife"
		6) Description content: WHAT and WHY was did
			- What we did in which task, file
			- Why we did such operations "Because of ..."
			
<h4> Update 01.09.2021: History review with git log commands</h4>

	1) 'git log'		(last commits)
	2) 'git log -<number>' 	(last <number> (for ex. 3) commits)
	3) 'git log --author-<author>'	(show commits from authot)
	4) 'git log --before "<YYYY-MM-DD>"' (show commits before date)
	5) 'git log --after "<YYYY-MM-DD>"' (show commits after date)
	6) git log --after "<YYYY-MM-DD>" --before "<YYYY-MM-DD>"' (Commits between before and after)
	7) 'git log -p' (Show changes in each commit)
	8) 'git log -<number> -p' (Show last 3 commits with changes)
	9) 'git log --stat' (Show statics about the changes in commits)
	10) 'git log --oneline' (Show a list wit commit IDs and description)
	11) 'git log --oneline --stat' (List of commits with ID, description and statics)
	12) 'git log --graph' (Create a graph with changes in repository)
	13) 'git log --oneline --graph' (Optimal graph with changes)
	14) 'git log --pretty' (Show data ho you want)
		- Examples:
			- 'git log --pretty="Hash:%h"'
			- 'git log --pretty="Hash:%h, Author:%a"'
		- All options in documetation
	15) 'git log --grep' (Show commits with concret content)
		- Example:
			- 'git log --grep=".css"'
	16) 'git log -- <file>' (Show commits to concret file)
		- Examples:
			- 'git log index.html' (Commits to index.html)
			- 'git log .css/app.js' (Commits to app.js in ordner .css)
			
<h4> Update 09.09.2021: Restore history with git reflog command</h4>
	
	- Diffrence between 'git log' and 'git reflog'
		- 'git reflog' is a local history, 'git log' is history with pushed commits
		- 'git reflog' contains much more informations
	- How to restore removed commits:
		- 'git reflog -<numberOfLastCommits>'
		  'git reflog -6'
		- 'git reflog' contains our last changes, we can see what we did (also with removed commits)
		- When we see the history, we can revert a commit
		- 'git revert <commit-id>'
		
		
			
		
			



