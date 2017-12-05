<img src="/images/vwc.gif" alt="Drawing" style="width: 200px;"/>


# [Vets Who Code Curriculum](http://www.vetswhocode.io/)

## Week 1, Day 1: Installfest

Hello troops, today's focus is making sure you have all the tools that you will need for sessions.
We will also be answering any questions you have about class afterwards.

If you can not make it to class for some reason, please send us a message in the slack channel.

### Things to Download and Install:

First thing you need to download besides _**[Slack](https://www.slack.com/)**_, is _**[Zoom](https://www.zoom.us/)**_ and Google [Chrome](https://www.google.com/chrome/browser/desktop/index.html).
During this time we will go over the [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) and the [Chrome React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
Finally, last thing you will need to download is a good local editor. [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/) and [Sublime](https://www.sublimetext.com/3) are all great text editors to choose from.

### Sites to Bookmark for Heavy Usage:
If you did the prework you should have your [GitHub](https://github.com/), [Repl.it](https://repl.it), [Codepen](https://codepen.io/), and [C9.io](https://c9.io) accounts created by now. Please bookmark them so that they are easy to find.


### Mandatory Reading:

During these sessions, especially in the regards of Javascript, these three sites will be your version of the holy trinity, so bookmark them, read them, do the programming in them and along with the sessions and the homework, you will be successful.
They are the [Mozilla MDN](https://developer.mozilla.org/en-US/), [The Front End Developer Handbook](https://frontendmasters.com/books/front-end-handbook/2017/), and [Eloquent Javascript](http://eloquentjavascript.net/). These three online resources will fast track you and shorten the lag time from newbie to adept developer. We also want everyone to read the article [What Is Code](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/) by Paul Ford and [Advice from an Old Programmer](https://learnpythonthehardway.org/book/advice.html) by Zed Shaw.
Your first written assignments will be based off of these two writings.


## Week 1, Day 2: Command Line Interface

Today we will go over the history, importance and how to use the command line interface.


### What is the Command line Interface?

A command-line interface or command language interpreter (CLI),is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines). A program which handles the interface is called a command language interpreter or shell.

The CLI was the primary means of interaction with most computer systems until the introduction of the Graphical User Interface (GUI) in the mid-1960s, and continued to be used throughout the 1970s and 1980s on OpenVMS, Unix systems and personal computer systems including MS-DOS, CP/M and Apple DOS. The interface is usually implemented with a command line shell, which is a program that accepts commands as text input and converts commands into appropriate operating system functions.

Command-line interfaces to computer operating systems are less widely used by casual computer users, who favor graphical user interfaces or menu-driven interaction.


### History Of The CLI

> The command-line interface evolved from a form of dialog once conducted by humans over teleprinter (TTY) machines, in which human operators remotely exchanged information, usually one line of text at a time. Early computer systems often used teleprinter machines as the means of interaction with a human operator. The computer became one end of the human-to-human teleprinter model. So instead of a human communicating with another human over a teleprinter, a human communicated with a computer.

> The mechanical teleprinter was replaced by a "glass tty", a keyboard and screen emulating the teleprinter. "Smart" terminals permitted additional functions, such as cursor movement over the entire screen, or local editing of data on the terminal for transmission to the computer. As the microcomputer revolution replaced the traditional – minicomputer + terminals – time sharing architecture, hardware terminals were replaced by terminal emulators — PC software that interpreted terminal signals sent through the PC's serial ports. These were typically used to interface an organization's new PC's with their existing mini- or mainframe computers, or to connect PC to PC. Some of these PCs were running Bulletin Board System software.

>Early operating system CLIs were implemented as part of resident monitor programs, and could not easily be replaced. The first implementation of the shell as a replaceable component was part of the Multics time-sharing operating system. In 1964, MIT Computation Center staff member Louis Pouzin developed the RUNCOM tool for executing command scripts while allowing argument substitution. Pouzin coined the term "shell" to describe the technique of using commands like a programming language, and wrote a paper about how to implement the idea in the Multics operating system. Pouzin returned to his native France in 1965, and the first Multics shell was developed by Glenda Schroeder.

> The first Unix shell, the V6 shell, was developed by Ken Thompson in 1971 at Bell Labs and was modeled after Schroeder's Multics shell. The Bourne shell was introduced in 1977 as a replacement for the V6 shell. Although it is used as an interactive command interpreter, it was also intended as a scripting language and contains most of the features that are commonly considered to produce structured programs. The Bourne shell led to the development of the Korn shell (ksh), Almquist shell (ash), and the popular Bourne-again shell (or Bash).[6]

> Early microcomputers themselves were based on a command-line interface such as CP/M, MS-DOS or AppleSoft BASIC. Throughout the 1980s and 1990s—especially after the introduction of the Apple Macintosh and Microsoft Windows—command line interfaces were replaced in popular usage by the Graphical User Interface. The command line remains in use, however, by system administrators and other advanced users for system administration, computer programming, and batch processing.

> In November 2006, Microsoft released version 1.0 of Windows PowerShell (formerly codenamed Monad), which combined features of traditional Unix shells with their proprietary object-oriented .NET Framework. MinGW and Cygwin are open-source packages for Windows that offer a Unix-like CLI. Microsoft provides MKS Inc.'s ksh implementation MKS Korn shell for Windows through their Services for UNIX add-on.

> Since 2001, the Macintosh operating system is based on a variation of Unix called Darwin. On these computers, users can access a Unix-like command-line interface called Terminal found in the Applications Utilities folder. This terminal uses bash by default.


### Usage

> A CLI is used whenever a large vocabulary of commands or queries, coupled with a wide (or arbitrary) range of options, can be entered more rapidly as text than with a pure GUI. This is typically the case with operating system command shells. CLIs are also used by systems with insufficient resources to support a graphical user interface. Some computer language systems (such as Python, Forth, LISP, Rexx, and many dialects of BASIC) provide an interactive command-line mode to allow for rapid evaluation of code.

> CLIs are often used by programmers and system administrators, in engineering and scientific environments, and by technically advanced personal computer users. CLIs are also popular among people with visual disability, since the commands and responses can be displayed using Refreshable Braille displays.


### List Of Commands

| Key/Command | Description |
| ----------- | ----------- |
| Ctrl + A   | Go to the beginning of the line you are currently typing on.  This also works for most text input fields system wide.  Netbeans being one exception |
| Ctrl + E   | Go to the end of the line you are currently typing on.  This also works for most text input fields system wide.  Netbeans being one exception |
| Ctrl + Q   | Clears everything on current line |
| Ctrl + L   | Clears the Screen |
| Cmd + K    | Clears the Screen |
| Ctrl + U   | Cut everything backwards to beginning of line |
| Ctrl + K   | Cut everything forward to end of line |
| Ctrl + W   | Cut one word backwards using white space as delimiter |
| Ctrl + Y   | Paste whatever was cut by the last cut command |
| Ctrl + H   | Same as backspace |
| Ctrl + C   | Kill whatever you are running |
| Ctrl + D   | Exit the current shell when no process is running, or send EOF to a the running process |
| Ctrl + Z   | Puts whatever you are running into a suspended background process. fg restores it. |
| Ctrl + _   | Undo the last command. (Underscore.  So it's actually Ctrl + Shift + minus) |
| Ctrl + T   | Swap the last two characters before the cursor |
| Ctrl + F   | Move cursor one character forward |
| Ctrl + B   | Move cursor one character backward |
| Esc + F  | Move cursor one word forward |
| Esc + B  | Move cursor one word backward |
| Esc + T  | Swap the last two words before the cursor |
| Tab  | Auto-complete files and folder names |

## CORE COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| cd [folder] | Change directory e.g. `cd Documents` |
| cd |  Home directory |
| cd ~ |  Home directory |
| cd /  | Root of drive |
| cd -  | Previous directory |
| ls | Short listing |
| ls -l | Long listing |
| ls -a | Listing incl. hidden files |
| ls -lh| Long listing with Human readable file sizes |
| ls -R | Entire content of folder recursively |
| sudo [command] | Run command with the security privileges of the superuser (Super User DO) |
| open [file] | Opens a file ( as if you double clicked it ) |
| top | Displays active processes. Press q to quit |
| nano [file] | Opens the file using the nano editor |
| vim [file] | Opens the file using the vim editor |
| clear |  Clears the screen |
| reset |  Resets the terminal display |

## CHAINING COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| [command-a]; [command-b] | Run command A and then B, regardless of success of A |
| [command-a] && [command-b] | Run command B if A succeeded |
| [command-a] || [command-b] | Run command B if A failed |
| [command-a] & | Run command A in background |


## PIPING COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| [command-a] \| [command-b] | Run command A and then pass the result to command B e.g ps auxwww \| grep google
|


## COMMAND HISTORY

| Key/Command | Description |
| ----------- | ----------- |
| history n |  Shows the stuff typed – add a number to limit the last n items |
| Ctrl + r  | Interactively search through previously typed commands |
| ![value] |  Execute the last command typed that starts with ‘value’ |
| !! |  Execute the last command typed |

## FILE MANAGEMENT

| Key/Command | Description |
| ----------- | ----------- |
| touch [file] |   Create a new file |
| pwd | Full path to working directory |
| . |  Current folder, e.g. `ls .` |
| .. | Parent/enclosing directory, e.g. `ls ..` |
| ls -l .. | Long listing of parent directory |
| cd ../../ | Move 2 levels up |
| cat | Concatenate to screen |
| rm [file] |  Remove a file, e.g. `rm data.tmp` |
| rm -i [file] | Remove with confirmation |
| rm -r [dir] | Remove a directory and contents |
| rm -f [file] | Force removal without confirmation |
| cp [file] [newfile] | Copy file to file |
| cp [file] [dir] | Copy file to directory |
| mv [file] [new filename] |  Move/Rename, e.g. `mv file1.ad /tmp` |
| pbcopy < [file] | Copies file contents to clipboard |
| pbpaste | Paste clipboard contents |
| pbpaste > [file] | Paste clipboard contents into file, `pbpaste > paste-test.txt` |

## DIRECTORY MANAGEMENT

| Key/Command | Description |
| ----------- | ----------- |
| mkdir [dir] | Create new directory |
| mkdir -p [dir]/[dir] |  Create nested directories |
| rmdir [dir] | Remove directory ( only operates on empty directories ) |
| rm -R [dir] | Remove directory and contents |
| [command] \| [command] | Allows to combine multiple commands that generate output, e.g. `cat data.txt | pbcopy` |
| less |  Output content delivered in screensize chunks |
| [command] > [file] |  Push output to file, keep in mind it will get overwritten |
| [command] >> [file] | Append output to existing file |
| [command] < [file] |  Tell command to read content from a file |

## SEARCH

| Key/Command | Description |
| ----------- | ----------- |
| find [dir] -name [search_pattern] | Search for files, e.g. `find /Users -name "file.txt"` |
| grep [search_pattern] [file] | Search for all lines that contain the pattern, e.g. `grep "Tom" file.txt` |
| grep -r [search_pattern] [file] | Recursively search for all lines that contain the pattern |
| grep -v [search_pattern] [file] | Search for all lines that do NOT contain the pattern |
| grep -i [search_pattern] [file] | Search for all lines that contain the case-insensitive pattern |
| mdfind [search_pattern] | Spotlight search for files (names, content, other metadata), e.g. `mdfind skateboard` |
| mdfind -onlyin [dir] -name [pattern] | Spotlight search for files named like pattern in the given directory |

## HELP

| Key/Command | Description |
| ----------- | ----------- |
| [command] -h |  Offers help |
| [command] --help | Offers help |
| info [command] | Offers help |
| man [command] |  Show the help manual for [command] |
| whatis [command] | Gives a one-line description of [command] |
| apropos [search-pattern] | Searches for command with keywords in description |





<img
  src="/images/git.png"
  width="70"
  align="left"
/>

## Week 1, Day 3: Useful Git Commands

### About it
> Have you recently started using Git? This should give you the base commands you need to perform the most common actions in Git. If you find a command that is not here, or could be explained better, please don't hesitate in * [Contributing](#contributing). Cheers!

### Table of contents

* [Install git](#install-git)
* [Setting up git](#setting-up-git)
* [Applying colour to git ](#applying-colour-to-git)
* [Initializing a repository in an existing directory](#initializing-a-repository-in-an-existing-directory)
* [Checking the status of your files](#checking-the-status-of-your-files)
* [Staging files](#staging-files)
* [Stashing files](#stashing-files)
* [Committing files](#committing-files)
* [Branching and merging](#branching-and-merging)
* [Resetting](#resetting)
* [Git remote](#git-remote)
* [Git grep](#git-grep)
* [Git blame](#git-blame)
* [Git log](#git-log)
* [Checking what you are committing](#checking-what-you-are-committing)
* [Useful Commands](#useful-commands)
* [Useful Alias](#useful-alias)
* [Contributing](#contributing)

#### Git

Git is a distributed version control system, very easy to learn and supper fast!

#### Install Git

There are a few different ways to install git (from source or for Linux) but the purpose of this page is to focus on git commands, so I am going to assume you are installing git on a Mac.

To view other ways of installing it visit the [Git official site](http://git-scm.com/book/en/Getting-Started-Installing-Git)

Click [here](http://git-scm.com/download/mac) to download and install Git

##### Setting up git

```sh
$ git config --global user.name "User Name"

$ git config --global user.email "email"
```

##### Applying colour to git

```sh
$ git config --global color.ui true
```

##### Initializing a repository in an existing directory

If you’re starting to track an existing project in Git, you need to go to the project’s directory and type:

```sh
$ git init
```
This creates a new subdirectory named .git that contains all of your necessary repository files — a Git repository skeleton. At this point, nothing in your project is tracked yet.

To start version-controlling existing files you should start by tracking those files and do an initial commit. To accomplish that you should start with a few  `$ git add` that specifies the files you want to track followed by a commit.

```sh
$ git add <file>
$ git add README
$ git commit -m 'Initial project version'
```
#### Checking the status of your files

The main tool you use to determine which files are in which state is the `$ git status` command. If you run this command directly after a clone, you should see something like this:

```sh
$ git status
# On branch master
nothing to commit (working directory clean)
```

If you add a new file to your project, and the file didn't exist before, when you run a `$ git status` you should see your untracked file like this:

```sh
$ git status
# On branch master
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#   README
nothing added to commit but untracked files present (use "git add" to track)
```

#### Staging files

After initializing a git repository in the chosen directory, all files will now be tracked. Any changes made to any file will be shown after a `$ git status` as changes not staged for commit.

To stage changes for commit you need to add the file(s) - or in other words, stage file(s).

```sh
# Adding a file
$ git add filename

# Adding all files
$ git add -A

# Adding all files changes in a directory
$ git add .

# Choosing what changes to add (this will got through all your changes and you can 'Y' or 'N' the changes)
$ git add -p
```

#### Stashing files

Git stash is a very useful command, where git will 'hide' the changes on a dirty directory - but no worries you can re-apply them later. The command will save your local changes away and revert the working directory to match the HEAD commit.

```sh
# Stash local changes
$ git stash

# Stash local changes with a custom message
$ git stash save "this is your custom message"

# Re-apply the changes you saved in your latest stash
$ git stash apply

# Re-apply the changes you saved in a given stash number
$ git stash apply stash@{stash_number}

# Drops any stash by its number
$ git stash drop stash@{0}

# Apply the stash and then immediately drop it from your stack
$ git stash pop

# 'Release' a particular stash from your list of stashes
$ git stash pop stash@{stash_number}

# List all stashes
$ git stash list

# Show the latest stash changes
$ git stash show

# See diff details of a given stash number
$ git diff stash@{0}
```

#### Committing files

After adding/staging a file, the next step is to commit staged file(s)

```sh
# Commit staged file(s)
$ git commit -m 'commit message'

# Add file and commit
$ git commit filename -m 'commit message'

# Add file and commit staged file
$ git commit -am 'insert commit message'

# Amending a commit
$ git commit --amend 'new commit message' or no message to maintain previous message

# Squashing commits together
$ git rebase -i
This will give you an interface on your core editor:
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell

# Squashing commits together using reset --soft
$ git reset --soft HEAD~number_of_commits
$ git commit
** WARNING: this will require force pushing commits, which is OK if this is on a branch before you push to master or create a Pull Request.
```

#### Branching and merging

```sh
# Creating a local branch
$ git checkout -b branchname

# Switching between 2 branches (in fact, this would work on terminal as well to switch between 2 directories - $ cd -)
$ git checkout -

# Pushing local branch to remote
$ git push -u origin branchname

# Deleting a local branch - this won't let you delete a branch that hasn't been merged yet
$ git branch -d branchname

# Deleting a local branch - this WILL delete a branch even if it hasn't been merged yet!
$ git branch -D branchname

# Remove any remote refs you have locally that have been removed from your remote (you can substitute <origin> to any remote branch)
$ git remote prune origin

# Viewing all branches, including local and remote branches
$ git branch -a

# Viewing all branches that have been merged into your current branch, including local and remote
$ git branch -a --merged

# Viewing all branches that haven't been merged into your current branch, including local and remote
$ git branch -a --no-merged

# Viewing local branches
$ git branch

# Viewing remote branches
$ git branch -r

# Rebase master branch into local branch
$ git rebase origin/master

# Pushing local branch after rebasing master into local branch
$ git push origin +branchname
```

#### Fetching and checking out remote branches

```sh
# This will fetch all the remote branches for you.
$ git fetch origin

# With the remote branches in hand, you now need to check out the branch you are interested in, giving you a local working copy:
$ git checkout -b test origin/test

# Deleting a remote branch
$ git branch -rd origin/branchname
$ git push origin --delete branchname  or  $ git push origin:branchname
```

#### Merging branch to trunk/master

```sh
# First checkout trunk/master
$ git checkout trunk/master

# Now merge branch to trunk/master
$ git merge branchname

# To cancel a merge
$ git merge --abort
```

#### Updating a local repository with changes from a Github repository

```sh
$ git pull origin master
```

#### Tracking existing branch

```sh
$ git branch --set-upstream-to=origin/foo foo
```

#### Resetting

```sh
# Mixes your head with a give sha
# This lets you do things like split a commit
$ git reset --mixed [sha]

# Upstream master
$ git reset HEAD origin/master -- filename

# The version from the most recent commit
$ git reset HEAD -- filename

# The version before the most recent commit
$ git reset HEAD^ -- filename

# Move head to specific commit
$ git reset --hard sha

# Reset the staging area and the working directory to match the most recent commit. In addition to unstaging changes, the --hard flag tells Git to overwrite all changes in the working directory, too.
$ git reset --hard
```

#### Git remote

```sh
# Show where 'origin' is pointing to and also tracked branches
$ git remote show origin

# Show where 'origin' is pointing to
$ git remote -v

# Change the 'origin' remote's URL
$ git remote set-url origin https://github.com/user/repo.git

# Add a new 'origin'
# Usually use to 'rebase' from forks
$ git remote add [NAME] https://github.com/user/fork-repo.git
```

#### Git grep

```sh
# 'Searches' for parts of strings in a directory
$ git grep 'something'

# 'Searches' for parts of strings in a directory and the -n prints out the line numbers where git has found matches
$ git grep -n 'something'

# 'Searches' for parts of string in a context (some lines before and some after the grepped term)
$ git grep -C<number of lines> 'something'

# 'Searches' for parts of string and also shows lines BEFORE the grepped term
$ git grep -B<number of lines> 'something'

# 'Searches' for parts of string and also shows lines AFTER the grepped term
$ git grep -A<number of lines> 'something'
```

#### Git blame

```sh
# Show alteration history of a file with the name of the author
$ git blame [filename]

# Show alteration history of a file with the name of the author && SHA
$ git blame [filename] -l
```

#### Git log

```sh
# Show a list of all commits in a repository. This command shows everything about a commit, such as commit ID, author, date and commit message.
$ git log

# List of commits showing commit messages and changes
$ git log -p

# List of commits with the particular expression you are looking for
$ git log -S 'something'

# List of commits by author
$ git log --author 'Author Name'

# Show a list of commits in a repository in a more summarised way. This shows a shorter version of the commit ID and the commit message.
$ git log --oneline

# Show a list of commits in a repository since yesterday
$ git log --since=yesterday

# Shows log by author and searching for specific term inside the commit message
$ git log --grep "term" --author "name"
```

#### Checking what you are committing

```sh
# See all (non-staged) changes done to a local repo
$ git diff

# See all (staged) changes done to a local repo
$ git diff --cached

# Check what the changes between the files you've committed and the live repo
$ git diff --stat origin/master
```

#### Useful commands

```sh
# Check if a sha is in production
$ git tag --contains [sha]

# Number of commits by author
$ git shortlog -s --author 'Author Name'

# List of authors and commits to a repository sorted alphabetically
$ git shortlog -s -n

# List of commit comments by author
$ git shortlog -n --author 'Author Name'
# This also shows the total number of commits by the author

# Number of commits by contributors
$ git shortlog -s -n

# Undo local changes to a File
$ git checkout -- filename

# Shows more detailed info about a commit
$ git cat-file sha -p

# Show number of lines added and removed from a repository by an author since some time in the past.
$ git log --author="Author name" --pretty=tformat: --numstat --since=month | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }'
```

#### Useful alias
To add an alias simply open your .gitconfig file on your home directory and include the alias code

```sh
# Shows the log in a more consisted way with the graph for branching and merging
lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

### Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push -u origin my-new-feature`
5. Submit a pull request - cheers!


## Week 1, Day 4: Markdown Tutorial
![](http://i.imgur.com/IMTN5cy.png)  


In this tutorial you will learn the most basics things about Markdown.  


*******
Tables of contents  
 1. [What is Markdown?](#whatismarkdown)
 2. [Why use Markdown?](#why)
 3. [Tools for Markdown](#tools)
 4. [Markdown Syntax](#syntax)

*******

<div id='whatismarkdown'/>  

## What is markdown ?  
According to Wikipedia :  

  >*Markdown is a lightweight markup language with plain text formatting syntax designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.*   


`SIMPLY: IT'S JUST ANOTHER TYPE OF TEXT FILE, LIKE .txt .doc ....( now it's .md :laughing:) AND IT HAS SOME SPECIAL SYNTAX.`  
<div id='why'/>  

*There is no clearly defined Markdown standard. This has led to fragmentation as different vendors write their own variants of the language to correct flaws or add missing features.. A list of markdown flavour is available [here](https://github.com/jgm/CommonMark/wiki/Markdown-Flavors).*

From now, this guide will mainly focus on Github Flavoured Markdown.

## Why use markdown?
Because it's :
 * **EZ** : The syntax is so easy that you can learn in a minute or two then write without noticing anything weirdo  or geeky.
 * **FAST** : It saves time compared to other types of text files/formats. It helps boost the productivity and workflows of writer.
 * **CLEAN** : Both the syntax and output are clean, not messy with our eyes and simple to manage.
 * **FLEXIBLE** : With just a little set-up, your text will be translated cross any platform out there, editable in any text-editing software and convertible to a wide array of formats.
<br></br>
**In short**, normal users will find it useful in any cases, especially when you are in need of something better than plain text but less functional than Microsoft Word.  
**For Developers**, if you are lazy to write HTML code , you will love markdown. **Moreover**, **Github** and many sites favor markdown for readme file of projects. That means you gonna meet markdown in your life one way or another.  
<div id='tools'/>  

## Tools for markdown
As said above, any editors can be used to edit markdown. However, there are a few tools that may be useful for you when it comes to edit markdown.
 * **[*Stackedit*](https://stackedit.io)** : Ok, you can stop reading right now. Click the link then start your markdown tour in an eziest way ever. Just type normal text then use your mouse, click click done. You dont have to know the syntax.  It's good, but it will make you reliant and most developers prefers keyboards.
 * **[*Dillinger*](http://dillinger.io/)** : Online tool, support live view (split screen) and export to html. Nothing too special but very neat and handy.
 * **[*Typora*](https://www.typora.io/)** : Available for Mac and Windows, minimal, distraction free, live view seemlessly, bundled with a lot of other stuffs like Images, Lists, Tables, Code Fences, Math Blocks, YAML, Front Matters,Toc,...
 * **[*Atom*](https://atom.io/)** : popular hackable text editor (you may be using this). Yeah, this is versatile. Markdown Support? Just a part of it but is greatly built in.
 * **[*Minimalist Markdown*](https://chrome.google.com/webstore/detail/minimalist-markdown-edito/pghodfjepegmciihfhdipmimghiakcjf?hl=en)** : Chrome app. Works everywhere if you have Chrome installed ( this is my favorite one).
 * **[*Macdown*](http://macdown.uranusjr.com/)** : best for Mac.
 * **[*MarkdownPad*](http://markdownpad.com/)** : best for Windows.
 * **[*Remarkable*](https://remarkableapp.github.io/)** : best for Linux.
 * **[*GITBOOK*](http://www.gitbook.com/)** : GitBook is a modern publishing toolchain. Making both writing and collaboration easy. It does both support Markdown and have a close relation with the beloved Github.
<div id='syntax'/>  

## Markdown Syntax  
All Syntax can be found [here](https://daringfireball.net/projects/markdown/syntax) . It would take a lot of effort to describe syntax in text (they will be formatted) so please consider this table below for the whole basics syntax.  

| Format        | Syntax      | Example |
| ------|-----|-----|
| Italic  	| \*Text\* 	| *This is italic* 	|
| Bold  	| \*\*Bold\*\* 	| **This is bold** 	|
| Inline links 	| \[Description text\](url here) 	| A [link](http://www.github.com) 	|
| Images 	| \![Caption\](url to img) 	| An image ![image](http://i.imgur.com/hRLuez2.png) 	|
| Link+images 	| \[\![Caption\](url to img)\](url to a page)\] 	| Click me [![me](http://i.imgur.com/hRLuez2.png)](https://www.youtube.com) 	|
| Footnotes  	| I have more \[^1\] to say.   \[^1\]: say it down here. 	| <a href="#section1">Hey,Please read the note below this table.  	|
| Line breaks 	| Double space + enter 	|  	|
| Unordered Lists 	| \* Item1     \*Item 2 	| <ul><li>item1</li><li>item2</li><li>item3</li><li>item4</li></ul> 	|
| Ordered Lists 	| 1. Item a    2. Item b 	| <ol><li>itema</li><li>itemb</li><li>itemc</li><li>itemd</li></ol>  	|
| Mixed Lists 	| 1. Item 1      * item 1a 	|  <ol><li>itema</li></ol><ul><li> item1</li></ul>	|
| Block quote 	| \> Quoted text 	|  <blockquote>Stay Hungry Stay Foolish</blockquote> 	|
| Preformatted 	| Begin each line with,two spaces or more to,make text look,e x a c t l y,like,you,type i,t. 	|   Begin each line with,two spaces or more to,make text look,e x a c t l y,like,you,type i,t. 	|
| Code 	| \`Insert Code\` 	| `cout<<"Hello world";` 	|
| Code block/ Syntax highlighting 	| \`\`\`insert code\`\`\` 	|  <a href="#section1">Hey,Please read the note below this table. 	|
| Headers 	| \#, \##, \###, \####, \#####, \###### (from h1 to h6) 	|  <h3>This is a h3 header</h3>	|
| Strike through 	| \~~Insert text here\~~ 	| ~~I am dead~~ 	|
| Tables 	| \| Tables   \|      Are      \|  Cool \| \|\----------\|\:\-------------\:\|------\:\| \| col 1 is\|  left-aligned \| $1600 \| | ![](http://i.imgur.com/EItt7mh.png) |

<br></br>
 <br></br>
 <p id="section1">Note: **Footnote** actually doesnt render properly in table (and github preview), but it kinda looks like this     ![](http://i.imgur.com/pmeBr28.png)
   <br></br>
   The same goes for **block code/syntax hightlighting**. It kinda looks like this picture :
   ![](http://i.imgur.com/z8KrxAz.png).</p>

These characteristics are dependent upon each markdown flavour.

## Useful notes  :
 * Markdown allows you to use backslash escapes to generate literal characters which
would otherwise have special meaning in Markdown’s formatting syntax. One commonly used backslash escape character is : \     
 `So? \*This\* isnt italic  anymore but is surrounded by literal asterisks.`

 * Youtube videos require some additional work.
  ```
  They can't be added directly but you can add an image with a link to the video like this:
  <a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
  " target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
  alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
  ```
 * Markdown does support Emojii :laughing: :laughing: :kissing_heart: :innocent: :green_heart: ( get some emojies [here](http://www.emoji-cheat-sheet.com/) )
 * You can use \<br/> tag to force line break.
 * Double space then enter if you want to make a new line if there is trouble making new lines.
 * Seeing is not as good as practicing. You can either create a markdown file for yourself to practice or do it online [here](http://www.markdowntutorial.com).
 *  Footnotes and syntax highlighting are not part of the original markdown and are only supported by certain flavors of markdown.
 *  Any URL (like http://www.github.com/) will be automatically converted into a clickable link.  
 *  Markdown table support is designed to handle most tables for most people; it doesn’t cover all tables for all people. If you need complex tables you will need to create them by hand or with a tool specifically designed for your output format.  

## Homework for Week 1

* Two medium posts, one on "What is Code to you" and one on what do you want to do with code.
* Add your info to the readme
* Pick your Defender and add the image and html to the defender folder.

# Defender Bios

## Instructors
Jerome Hardaway

## Troops

| Name | Superhero you chose | Add your Twitter with url |
|------------|-------------|--------------------------|
|Andrew James | Deadpool | [My Twitter](https://twitter.com/_ANDREWTJAMES)|
|David Gage Hall | Beast | [My Twitter](https://www.twitter.com/thedavidgage)|
|KJ Samora | Doctor Strange | [My Tweets for My Peeps](https://www.twitter.com/Que_Jay)|
|Mattie Fuller | The Incredible Hulk | [LinkedIn Because Some Days I Feel Too Old For Twitter](https://www.linkedin.com/in/mattierocks)|
|Osvaldo Vargas | Colossus | [My Twitter](https://www.twitter.com/ozzie_v91) and [LinkedIn](https://www.linkedin.com/in/osvaldo-vargas)|
|Schuster Braun| Namor| [Tweet Me](https://twitter.com/RonJonBraun)
| Terry Odom | Luke Cage | [My Twitter](https://twitter.com/TerrellOdom) and [My LinkedIn](https://www.linkedin.com/in/terryodom/)|

### **_My 5th attempt at Markdown_**
* ### Stephanie Samuelson 
  * She-hulk  
  * [Twitter](https://twitter.com/mrsmugee)