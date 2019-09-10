# Node JS - Beginner

## Installation
New Version 
```bash
lsb_release -a 
sudo apt install nodejs
sudo apt install npm
```
## My Specification
- node version v8.10.0
- npm  version 3.5.2
- ubuntu 18.04 

## Command Hello World
1. File hello-world.js
```bash
node hello-world.js
```
## Make Webserver Node Js
1. File server.js

## Make Management Project with npm
1. Make folder 
```bash
mkdir name_folder
sudo chmod 777 -R /location_folder/../name_folder
```
2. Make Project with npm
```bash
npm init
```
fill out the project data to be created.Npm init make package.json

3. Get to know the package.json file
- information project
- script
- author and license

Selain properti-properti di atas, masih ada lagi properti lain:

- depedencies berisi keterangan modul atau library yang dibutuhkan aplikasi.
- devDependencies berisi keterangan modul atau library yang dibutuhkan untuk pengembangan aplikasi.

4. Installing Modules with NPM
```bash
npm install <nama module>
```
cek module in [npm](https://www.npmjs.com/)
5. Install Module for global and dev
Good person for developer
```bash
sudo npm install gulp -g
```
6. Delete Module
```bash
npm unistall <nama module>
```
7. Run Script in package.json
Cek package.json
```bash
npm run hello 
```
8. Module File System Read and Write
File on and run project
```bash
node <name file>
```
Read File System
- make-fs-read.js
- file-system.html

Append File System
- make-fs-append.js
>if you execute loopping text in file newfile.txt

Open File System
- make-fs-open.js // for write
- make-fs-open-wr.js // for write and read

Update Name File System
- make-fs-rename.js

Delete File System
-make-fs-delete