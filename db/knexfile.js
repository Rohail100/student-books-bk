module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://postgres:Myweb@234@localhost:5432/stbooks'
};
