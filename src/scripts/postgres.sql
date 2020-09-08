-- creating table
DROP TABLE IF EXISTS TB_HEROIS;
CREATE TABLE TB_HEROIS (
	ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
	 NOME TEXT NOT NULL, 
	PODER TEXT NOT NULL
)
-- inserting values into the table
INSERT INTO TB_HEROIS (NOME, PODER) 
VALUES 
	('Flash', 'Velocidade, katchau!'),
	('Aquaman', 'Falar com os animais marinhos'),
	('Batman', 'Dinheiro');
-- reading data from the table
SELECT * FROM TB_HEROIS;
SELECT * FROM TB_HEROIS WHERE NOME ='Flash';
-- updatind data from the table
UPDATE TB_HEROIS SET NOME ='Goku', PODER='Deus' WHERE ID=1;
-- deleting data from the table
DELETE FROM TB_HEROIS WHERE ID=2;