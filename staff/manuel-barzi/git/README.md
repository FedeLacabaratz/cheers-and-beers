# git - the stupid content tracker

## initializing a repo

```sh
$ git init
```

## showing the status of the repo

```sh
$ git status
```

## adding content or changes to be tracked in a repo

```sh
$ git add staff
```

### adding all files from current directory

```sh
$ git add .
```

## creating a history point for the files set under control

```sh
$ git commit -m "add initial code"
```

## showing the repo's history of commits and branches

```sh
$ git log
```

### showing the history in a vertical graph mode

```sh
$ git log --graph
```

## showing the config

```sh
$ git config --list
```

### showing the global config

```sh
$ git config --list --global
```

## showing the differences of files changed

```sh
$ git diff
```