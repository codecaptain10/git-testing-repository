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
		- git resset --mixed <commit id>
		- git resset --soft <commit id>
		- git resset --hard <commit id>
		
<h4>Update 03.08.2021: ... </h4>




