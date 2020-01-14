# Command-Line Interface (CLI)

Most commond used commands.

![alt CLI](https://media.giphy.com/media/26BoEH5DpMz6bw05q/source.gif)

## [pwd](https://es.wikipedia.org/wiki/Pwd)

- list files
```sh
$ ls
```

- list hidden files
```sh
$ ls -a
```

- list files with details
```sh
$ ls -l
```

- list files with human readable sizes
```sh
$ ls -lh
```

- create directory
```sh
$ mkdir [name]
```

- create file
```sh
$ touch [name]
```

- rename a file
```sh
$ mv [file] [new-name]
```

- remove a directory (with files in it)
```sh
$ rm -r [name]
```

- remove a directory (w/o files) and files
```sh
$ rm [name]
```

- modify permissions of a file
```sh
$ chmod [number: 777, 755, etc.] [file-name]
```

- get a direct link of another file
```sh
$ ln -s [ubication-of-file]
```
- open the Nano console to edit a file
```sh
$ nano [file]
```

- execute a file (text commonly)
```sh
$ cat [file]
```
- copy a file
```sh
$ cp [original-file] [new-file]
```
- change directory
```sh
$ cd
```

- "current" (e.g. execute from current directory)
```sh
$ .  / e.g.: cd .
```

- "previous" (e.g. go to previous directory)
```sh
$ ..  / e.g.: cd ..
```

- enter an specific route
```sh
$ cd [route-path]
```

- make a file hidden (put a dot in front)
```sh
$ .[file-name]
```