class NotImplementException extends Error {
	constructor() {
		super('Not implemented exception!');
	}
}

class ICrud {
	Create(item) {
		throw new NotImplementException();
	}
	Read(query) {
		throw new NotImplementException();
	}
	Update(id, item) {
		throw new NotImplementException();
	}
	Delete(id) {
		throw new NotImplementException();
	}
}

class MongoDB extends ICrud {
	constructor() {
		super();
	}
	Create(item) {
		console.log('Item foi salvo no MongoDB!');
	}
}

class Postgres extends ICrud {
	constructor() {
		super();
	}

	Create(item) {
		console.log('Item foi salvo no Postgres!');
	}
}

class ContextStrategy {
	constructor(strategy) {
		this._database = strategy;
	}
	Create(item) {
		return this._database.Create(item);
	}
	Read(query) {
		return this._database.Read(query);
	}
	Update(id, item) {
		return this._database.Update(id, item);
	}
	Delete(id) {
		return this._database.Delete(id);
	}
}

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.Create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.Create();
contextPostgres.Read();
