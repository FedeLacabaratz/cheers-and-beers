# Command-Line Interface (CLI)

Most common used commands.

## - Path of working directory
```sh
$ pwd
```
## - Change directory
```sh
$ cd [target directory]
```
## - Create new directory (Make directory)
```sh
$ mkdir [name new directory]
```
## - Create paths
```sh
$ mkdir -p [path/to/the/last/directory]
```
## - Create new file
```sh
$ touch [name new file]
```
## - Rename directory/file
```sh
$ mv [file or directory] [new name]
```
## - Move file
```sh
$ mv [directory/file] [destination]
```
For not empty directories, use recursive:
```sh
$ mv -r [directory] [destination]
```
## - Copy directory/file
```sh
$ cp [directory/file] [destination]
```
For not empty directories, use recursive:
```sh
$ cp -r [directory/file] [destination]
```
## - List items in a directory
```sh
$ ls -l -a -h
```
#### ls flags
- -l: list
- -a: shows hidden items
- -h: human readable sizes
## - Change permissions
```sh
$ chmod [modifyer] [target item]
```
#### Permissions modifyers
- Numbers (755, 744...)
-Flags(+x, -w...)
