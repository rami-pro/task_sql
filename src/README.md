# TASK_SQL

This application (a **# TASK_SQL**) was built using **Nodejs**, **Express** and **Mysql** database using **Sequelize ORM** . I have built the following routes within this application:

```bash
//USERS ROUTES
POST /users                //CREATE a new user
POST /users/signin

//COLLECTIONS ROUTES
POST /collections
PATCH /collections/:id
GET /collections
DELETE /collections/:id

//COLLECTIONS ROUTES
POST /tasks
PATCH /tasks/:id
GET /tasks/:collectionId
DELETE /tasks/:id
```

I used MVC (just a design pattern) to build my REST-API.

# Data relations

```javascript
User.hasMany(Task);
Task.belongsTo(User);

User.hasMany(Collection);
Collection.belongsTo(User);

Collection.hasMany(Task);
Task.belongsTo(Collection);
```

# try project

```bash
git clone https://github.com/rami-pro/task_sql.git
cd task_sql
yarn start

//enjoy ;)
```
