# Supervisor Mapping #

This application's primary functionality is to provide a better interface to map the supervisors of the folks by an authorized user. The features it provides to achieve the same are as follows:

* Upload a new Excel file to make changes
* Individually modify the supervisor of each person
* Moving multiple supervisees under a particular supervisor to a new supervisor
* Compare and approve/disaprove the changes made in the supervisor mapping
* Download the updated mapping of the supervisors as an Excel file




## Prerequisites ##

* Installation of node
    * Download from [here](https://nodejs.org/en/download/) and install it
* Installation of mongoDB
    * Download from [here](https://docs.mongodb.com/tutorials/install-mongodb-on-windows/) and follow the instructions there on




## How do I get set up? ##

* `npm install`
    * Installs all dependency present in package.json



* 	`Mongo DB connection`
	* run: mongod --dbpath `path to database direcory`  [cmd-1]
	* run: mongo [cmd-2]
	* run: use `database name as provided in the application` [cmd-2]
	* run: db.createUser({ user: `user-name as provided in the application`, pwd: `password as provided in the application`, roles: [{ role: "dbOwner", db: `database name as provided in the application`}] }) [cmd-2]
	* restart the mongodb connection
	* run: mongod --auth --dbpath `path to database direcory`  [cmd-1]
	* run: mongo [cmd-2]
	* run: use `database name as provided in the application` [cmd-2]
	* run: db.auth(`user-name as provided in the application`,`password as provided in the application`) [cmd-2]



* `npm run build`
	* To babelify the es6 javascript files, browserify the client-side javascript files, minify the css and javascript files and moving all the code to the build directory [./dist]



* `npm run start`
	* To start the application
	* To check if the app is running, browse to: [localhost:6363](http://localhost:6363)




## Who do I talk to? ##

- [Abhiraj Kumar](mailto:abhirajambasta@gmail.com)