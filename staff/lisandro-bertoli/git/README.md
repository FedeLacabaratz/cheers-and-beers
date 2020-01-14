# git - the stupid content tracker

## initialize a new repo

```sh
$ git init
```

## show the status of the repo

```sh
$ git status
```

## adds changes to be tracked - staging area -

```sh
$ git add staff
```

### adding all files in current directory

```sh
$ git add .
```

## creates a history point for the files added to the staging area

```sh
$ git commit -m "message"
```

## shows repo history of commits and branches

```sh
$ git log
```

## shows history in a vertical graph mode

```sh
$ git log --graph
```

## showing the config

```sh
$ git config --list
```

## showing the global config

```sh
$ git config --list --global
```

## showing the differences of changed files

```sh
$ git diff
```

## testing a pull request before aprooving it

```sh
$ git fetch origin pull/ID/head:BRANCHNAME
```

BRANCHNAME per convention is pr-branchid

```sh
[master] $ git checkout BRANCHNAME
> Switched to a new branch 'BRANCHNAME'
```

then we can delete that local branch and merge the pull request.
