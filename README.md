# git-testing-repository
This is my testing repository to level up my git skills.

Update 26.07.2021: Testing fundamental git commands

	- git clone <repository>
	- git config --global user.name " "
	- git status
	- git add 
	- git commit -m " " / git commit -a -m " " 
	- git push
	- git log
	
Update 27.07.2021: .gitignore file

	- Better security
	- Good for ressource and performance
	- Advantage in GitHub repository
	- A few methods to create a gitignore file:
		1) By creating new repository in GitHub
		2) Templates on GitHub
		3) gitignore.io website
		4) atlassian git ignore patterns website
		

Update 27.07.2021: branch commands
	
	- git branch						(branche status)	
	- git branch <name>					(create new branch)
	- git checkout <branch-name>				(change actual branche)
	- git push -u origin <branche-name> 			(first push of new branch)
	- git checkout -b <branche-name>			(new branch and change branche in one step)
	
	
Update 27.07.2021: branch merge

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
	
Update 01.08.2021: git stash

		- git stash
		- git stash list
		- git stash show <stash@{i}>
		- git stash show <stash@{i}> -p
		- git stash save "[change description]"
		- git stash apply
		- git stash pop
		- git stash apply <stash@{i}>
		- git stash pop <stash@{i}>
		- git stash drop <stash@{i}>
		- git stash clear
		- git stash -u
		- git stash -a
		- git stash branche <branche-name> <stash@{i}>
		

