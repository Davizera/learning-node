const ICrud = require('./interfaces/interfaceCrud');

class Postgres extends ICrud {
	constructor() {
		super();
	}

	Create(item) {
		console.log('Item foi salvo no Postgres!');
	}
}

module.exports = Postgres;
