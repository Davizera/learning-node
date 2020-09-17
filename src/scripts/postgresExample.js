const Sequelize = require('sequelize');
const driver = new Sequelize('heroes', 'dxss', 'minhasenha', {
	host: 'localhost',
	dialect: 'postgres',
	quoteIdentifiers: false,
	operatorAliases: false,
});

async function Main() {
	const Heroes = driver.define(
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
	await Heroes.sync();
	await Heroes.create({
		nome: 'Homem-Aranha',
		poder: 'Soltar teias e escalar paredes',
	});
	const heroes = await Heroes.findAll({ raw: true });
	console.log(heroes);
}

Main();
