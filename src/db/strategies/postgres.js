const ICrud = require('./interfaces/interfaceCrud');
const Sequelize = require('sequelize');

const driver = new Sequelize('heroes', 'dxss', 'minhasenha', {
	host: 'localhost',
	dialect: 'postgres',
	quoteIdentifiers: false,
	operatorAliases: false,
});
class Postgres extends ICrud {
	constructor() {
		super();
		this._driver = null;
		this._heroes = null;
	}

	async Create(item) {
		const { dataValues } = await this._heroes.create(item);
		return dataValues;
	}

	async Read(item = {}) {
		return await this._heroes.findAll({ where: item, raw: true });
	}

	async Update(id, item = {}){
		const [,result] = await this._heroes.update(item, {where: {id: id}, returning: true});
		return result[0].dataValues;
	}

	async Delete(id){
		const result = await this._heroes.destroy({where:{id: id}});
		return !!result;
	}

	async IsConnected() {
		try {
			await this._driver.authenticate();
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	async DefineModel() {
		this._heroes = this._driver.define(
			'Heroes',
			{
				id: {
					type: Sequelize.INTEGER,
					required: true,
					primaryKey: true,
					autoIncrement: true,
				},
				nome: {
					type: Sequelize.STRING,
					required: true,
				},
				poder: {
					type: Sequelize.STRING,
					required: true,
				},
			},
			{
				tableName: 'TB_HEROIS',
				freezeTableName: false,
				timestamps: false,
			}
		);
		await this._heroes.sync();
	}
	async Connect() {
		this._driver = new Sequelize('heroes', 'dxss', 'minhasenha', {
			host: 'localhost',
			dialect: 'postgres',
			quoteIdentifiers: false,
			operatorAliases: false,
		});
		await this.DefineModel();
	}
}

module.exports = Postgres;
