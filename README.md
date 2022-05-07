<h1>Back end of student books application</h1>
<h2>Follow the instructions to init</h2>
<p>Clone the Repo</p>
<p>Create the postgres database "stbooks" in psql shell</p>

```sh
CREATE DATABASE stbooks;
```

<p>Setup your postgres credentials in knexfile under db folder edit the URI String to your own</p>
<p>like: 'postgres://user:password@localhost:5432/stbooks'</p>
<p>then Open terminal cd to the cloned repo and</p>

```sh
npm install
```
<p>Create Database Relations</p>

```sh
npm run migrate
```

<p>Seed Database</p>

```sh
npm run seed
```
<p>If you want to seed repeatedly then set borrowed_by: null in seed file to avoid forign key constraints</p>
<p>finally</p>

```sh
npm start
```