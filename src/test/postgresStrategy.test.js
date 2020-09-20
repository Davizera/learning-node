const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres());
const MOCK_HEROI_CADASTRAR = {
	nome: 'Gavião Arqueiro',
	poder: 'A mira mais braba',
};
const MOCK_HEROI_ATUALIZAR = {
	nome: 'Batman',
	poder: 'Roteiro',
};

describe('Postgres Strategy', function () {
	this.timeout(Infinity);
	this.beforeAll(async function () {
		await context.Connect();
		await context.Create(MOCK_HEROI_ATUALIZAR);
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
	it('Read heroes', async function () {
		const [result] = await context.Read({ nome: MOCK_HEROI_CADASTRAR.nome });
		delete result.id;

		assert.deepEqual(result, MOCK_HEROI_CADASTRAR);
	});
	it('Update heroes', async function () {
		const [read] = await context.Read({nome: MOCK_HEROI_ATUALIZAR.nome});
		const itemToUpdate = {
			nome: "Lanterna Verde",
			poder: "Anel dos lanternas"
		}
		const result = await context.Update(read.id, itemToUpdate);
		delete result.id;
		assert.deepEqual(result, itemToUpdate);
	});
	it('Delete heroes', async function () {
		const deleteItem = await context.Create(MOCK_HEROI_CADASTRAR);
		const [read] = await context.Read({nome: deleteItem.nome});
		console.log(read);
		const result =  await context.Delete(read.id);
		assert.equal(result, true)
	});
});
