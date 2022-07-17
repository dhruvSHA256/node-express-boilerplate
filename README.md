# Node Expree MongoDB boilerplate code 

## Setup
- create a project on [MongoDB](https://cloud.mongodb.com/v2#/org/5ff9e330301abb0bd06f44f6/projects/create)
- make new collection in project
- copy .env.example to .env and set env variables (DB_USER, DB_PASS) to what your
  credentials for MongoDB and export them
- copy .gitignore.example to .gitignore
- install required modules
```bash
$ yarn install
```
- run the app
```bash
$ yarn run dev
```

## Host it on Heroku
- login to heroku
```bash
$ heroku login
```
- create new heroku project 
```bash
$ heroku create
```
- run locally
```bash
$ heroku local web
```
- set env vars (DB_USER, DB_PASS) in heroku project
```bash
$ heroku config:set DB_USER=joesmith DB_PASS=password
```
- push it on heroku 
```bash
$ git push heroku main -f
```
