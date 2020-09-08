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
	IsConnected() {
		throw new NotImplementException();
	}
}

module.exports = ICrud;
