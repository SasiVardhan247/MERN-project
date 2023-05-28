# MERN-project

### Note : Please push your updates/changes by creating a seperate branch , Never push your changes to main/master brnaches

# How to **use**?

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

# How to **Collaboratre**?

_If you're not comfortable with command line, [here are tutorials using GUI tools.](https://medium.com/@pawanpiumal1/basics-of-git-gui-71366702fc26)_
_If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/)._

**1.**  Clone this repository.

```
git clone  https://github.com/Harikaraja/MERN-project
```

**3.** Navigate to the project directory :file_folder: .

```
cd MERN-project
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream  https://github.com/Harikaraja/MERN-project
```

**5.** Check the remotes for this repository.
```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.


**9.** Track your changes:heavy_check_mark: .

```
git add .
```

**10.** Commit your changes .

```
git commit -m "Your message"
```

**11.** Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```
