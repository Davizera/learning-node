const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres());
const MOCK_HEROI_CADASTRAR = {
	nome: 'Gavião Arqueiro',
	poder: 'A mira mais braba',
};

describe('Postgres Strategy', function () {
	this.timeout(Infinity);
	this.beforeAll(async function () {
		await context.Connect();
	});
	it('PostgresSQL Connection', async function () {
		const result = await context.IsConnected();
		assert.equal(result, true);
	});
	it('Cadastrar novo héroi', async function () {
		const result = await context.Create(MOCK_HEROI_CADASTRAR);
		delete result.id;

		assert.deepEqual(result, MOCK_HEROI_CADASTRAR);
	});
	it('Read heróis', async function () {
		const [result] = await context.Read({ nome: MOCK_HEROI_CADASTRAR.nome });
		delete result.id;

		assert.deepEqual(result, MOCK_HEROI_CADASTRAR);
	});
});
