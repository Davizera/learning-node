const ContextStrategy = require('./db/strategies/base/contextStrategy.js');
const MongoDB = require('./db/strategies/mongodb');
const Postgres = require('./db/strategies/postgres');

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.Create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.Create();
// contextPostgres.Read(); //Throw a NotImplementException just for test porpuses
