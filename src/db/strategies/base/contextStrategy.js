const ICrud = require('../interfaces/interfaceCrud');

class ContextStrategy extends ICrud {
	constructor(strategy) {
		super();
		this._database = strategy;
	}
	Create(item) {
		return this._database.Create(item);
	}
	Read(item) {
		return this._database.Read(item);
	}
	Update(id, item) {
		return this._database.Update(id, item);
	}
	Delete(id) {
		return this._database.Delete(id);
	}
	IsConnected() {
		return this._database.IsConnected();
	}
	Connect() {
		return this._database.Connect();
	}
}

module.exports = ContextStrategy;
