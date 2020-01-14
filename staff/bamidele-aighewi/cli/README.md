# Command-Line Interface (CLI)

Most common used commands.

![CLI](https://media.giphy.com/media/26BoEH5DpMz6bw05q/giphy.gif)

## [pwd](https://en.wikipedia.org/wiki/PWD)

- view previous command history
```sh
$ history
```

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

- list with details and human-readable sizes
```sh
$ ls -lh
```

- to show the current file path
```sh
$ pwd
```

- create a new folder
```sh
$ mkdir
```

- create multiple folders
```sh
$ mkdir -p
```

- create multiple folders
```sh
$ mkdir -p
```

- to edit a file
```sh
$ nano hello-world.txt
```

- to inform text editor to save then press enter
```sh
$ ctrl + o
```

- to exit text editor
```sh
$ ctrl + x
```

- to exit text editor
```sh
$ cat hello-world.txt
```

- to change file name (and extension if necessary)
```sh
$ mv hello-world.txt hello-mundo.sh
```

- to execute file
```sh
$ ./hello.sh
```

- to add executable flag
```sh
$ chmod +x
```

- to remove read flag
```sh
$ chmod -r
```

- recursive copy of a folder’s content to another (basically copies all files to new folder)
```sh
$ cp -r demo demo-2
```

- to remove folder without contents
```sh
$ rmdir demo-2
```

- create link to a file
```sh
$ ln -s ./bin/ls-info.sh
```

- to hide file
```sh
$ mv file-to-hide .file-to-hide
```

### chmod
- |---|---|---<br/>
d[d, -, l] | G1 | G2 | G3<br/>
<br/>
000 -> 0<br/>
001 -> 1<br/>
010 -> 2<br/>
011 -> 3<br/>
100 -> 4<br/>
101 -> 5<br/>
110 -> 6<br/>
111 -> 7 -> r<br/>

chmod 744<br/>