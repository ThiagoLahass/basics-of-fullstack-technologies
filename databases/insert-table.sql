INSERT INTO cliente(id, nome, salario, pontos, nascimento, administrador, data_inclusao)
VALUES (5, 'Th', 10000.00, 150, '2002-07-13', TRUE, NOW());

INSERT INTO cliente (id, nome, salario, pontos, nascimento, administrador, data_inclusao) 
VALUES 
    (2,     'Maria Oliveira',   2500.00, 28,    '1995-03-15',  FALSE,   NOW()),
    (3,     'Carlos Pereira',   4200.00, 35,    '1988-08-10',  TRUE,    NOW()),
    (4,     'Ana Costa',        3200.00, 27,    '1996-11-23',  FALSE,   NOW());
    
INSERT INTO cliente(id, nome)
VALUES (5, 'Th');

SELECT * FROM cliente;