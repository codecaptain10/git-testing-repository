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
		- fast forward merge
		- no fast forward merge
	- Commands:
		- git merge <branch-name>	(branch-name -> actual branche)
		- git push 					(by fast forward)
		
<<<<<<< HEAD

Update 27.07.2021: Wait! Hier ist your MAIN branch!
=======
Update 27.07.2021: Hier is your TEST!
>>>>>>> test
