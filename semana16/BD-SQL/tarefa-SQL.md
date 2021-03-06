# EXERCÍCIO 01

a) Resposta: 
- O comando VARCHAR serve para determinar o máximo de caracteres permitidos e dentro do parentese "(255)" representa o número máximo de caracteres.
- O comando DATE representa uma data(ano-mês-dia).
- PRIMARY KEY significa chave primária e o seu valor tem que ser único.
- NOT NULL significa que o valor não pode ficar vazio.


b) Resposta: 
- No comando SHOW DATABASES mostra os bancos de dados presentes no sistema.
- No comando SHOW TABLES mostra as tabelas que você criou.


c) Resposta: 
- O comando DESCRIBE Actor traz todas as informações da tabela.


# EXERCÍCIO 02

a) Resposta: 
 - Query criada.


b) Resposta: 
 - ERRO: INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "002",   "Fulana",   1200000,   "1963-08-23",   "female"   )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
 * OBS: Esse erro ocorreu porque a chave primária(id) está duplicado.


c) Resposta: 
 - ERRO: INSERT INTO Actor (id, name, salary) VALUES(   "003",   "Fernanda Montenegro",   300000,   "1929-10-19",   "female"   )	Error Code: 1136. Column count doesn't match value count at row 1

 * OBS: Esse erro ocorreu porque no "INSERT INTO Actor" estamos passando (id, name, salary) referente as colunas e no VALUES estamos informando valores a mais do que passamos nas colunas. 


d) Resposta: 
   - ERRO: INSERT INTO Actor (id, name, salary) VALUES(   "004",   400000,   "1949-04-18",   "male"   )	Error Code: 1136. Column count doesn't match value count at row 1	0.016 sec

   * OBS: Esse erro ocorreu porque no "INSERT INTO Actor" estamos passando (id, name, salary, birth_date, gender) referente as colunas e no VALUES estamos informando valores com exceção do name. Como não informamos esse valor, retornou um erro.


e) Resposta: 
 - ERRO: INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",   "Juliana Paes",   719333.33,   1979-03-26,   "female"   )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.016 sec

 * OBS: Esse erro ocorreu porque o valores das colunas birth_date e salary estão inválidos. No valor da coluna birth_date deveria ser infomado um valor no formato de uma data e na coluna salary somente números inteiros. 


f) Resposta: 
 - Queries criadas.



 # EXERCÍCIO 03


a) Resposta:
  - SELECT id, name 
    FROM Actor 
    WHERE gender = "female";


b) Resposta: 
 - SELECT id, name, salary
   FROM Actor
   WHERE name = "Tony Ramos";


c) Resposta: 
 - SELECT *
   FROM Actor
   WHERE gender = "invalid";

 - Retornou uma linha com todos as colunas da tabela, porém todas elas com valor "NULL" porque não há nenhum item com gender "invalid".


 d) Resposta: 
 - SELECT *
   FROM Actor
   WHERE salary <= 500000;


e) Resposta: 
  - ERRO: SELECT id, nome FROM Actor WHERE id = "002" LIMIT 0, 1000	Error Code: 1054. Unknown column 'nome' in 'field list'	0.031 sec

  * OBS: Esse erro ocorreu porque "nome" não pertence as colunas da tabela.

  - SUCESSO: SELECT id, name FROM Actor WHERE id = "002" LIMIT 0, 1000	1 row(s) returned	0.015 sec / 0.000 sec

  * OBS: Troquei de "nome" para "name" e funcionou corretamente, tranzendo o nome a quem pertence o id solicitado.


# EXERCÍCIO 04


a) Resposta: 
 -  A query  **SELECT (*)** seleciona todas as informações  da tabela Actor **(FROM Actor)** 
 - **(WHERE)** recebe as condições.
 - No caso do exercício as condições são:  os nomes comecem com a letra "A" ou "J" **(name LIKE "A%" OR name LIKE "J%")** e **(AND)** o salário seja maior que 300000 **(salary > 300000)**.


 b) Resposta: 
 - SELECT *
   FROM Actor
   WHERE name NOT LIKE "A%" AND salary > 350000;


c) Resposta: 
 - SELECT *
   FROM Actor
   WHERE name LIKE "%G%" OR name LIKE "%g%";


d) Resposta: 
 - SELECT * 
   FROM Actor 
   WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
   AND salary BETWEEN 35000000 AND 900000;



# EXERCÍCIO 05


a) Resposta: 
 - A Query criou uma tabela chamada **Movies** com as colunas: id, title, synopsis, release_date e rating.

 - CREATE TABLE Movies (
   id VARCHAR(255) PRIMARY KEY,
   title VARCHAR(255) NOT NULL UNIQUE,
   synopsis TEXT NOT NULL,
   release_date DATE NOT NULL,
   rating INT NOT NULL
  );


b) Resposta: 
 - INSERT INTO Movies (id, title, synopsis, release_date, rating)
   VALUES(
   "001",
   "Se eu fosse Você",
   "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
   "06/01/2006",
   7
  );


c) Resposta: 
 - INSERT INTO Movies (id, title, synopsis, release_date, rating)
   VALUES(
   "002",
   "Doce de mãe",
   "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
   "2012/12/27", 
   10
  );


d) Resposta: 
 - INSERT INTO Movies (id, title, synopsis, release_date, rating)
   VALUES(
   "003",
   "Dona Flor e Seus Dois Maridos",
   "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
   "2017/11/02",
   8
  );


e) Resposta: 
 - INSERT INTO Movies (id, title, synopsis, release_date, rating)
   VALUES(
   "004",
   "Memórias Póstumas de Brás Cubas",
   "A obra tem início com a declaração da morte de Brás Cubas, cujo narrador  e protagonista relata suas memórias depois de ter sido vítima de pneumonia.
   Pertencente a uma família abastada do século XIX, Brás Cubas narra primeiramente sua morte e enterro onde apareceram onze amigos. 
   Por conseguinte, ele relata diversos momentos de sua vida, desde eventos da sua infância, adolescência e fase adulta.",
   "2001/08/17", 
   7
  );



# EXERCÍCIO 06


a) Resposta: 
 - SELECT id, title, rating
   FROM Movies
   WHERE id = "002";


b) Resposta: 
 - SELECT id, title
   FROM Movies
   WHERE title = "Memórias Póstumas de Brás Cubas";


c) Resposta: 
 - SELECT id, title, synopsis
   FROM Movies
   WHERE rating >= 7;


# EXERCÍCIO 07


a) Resposta: 
 - SELECT *
   FROM Movies
   WHERE title LIKE "%vida%";


b) Resposta: 
 - SELECT *
   FROM Movies
   WHERE title LIKE "%anos%" OR synopsis LIKE "%anos%";


c) Resposta: 
 - SELECT *
   FROM Movies
   WHERE release_date < "2021/01/11";


d) Resposta:
 - SELECT *
   FROM Movies
   WHERE release_date < "2021/01/11"
   AND (title LIKE "Flor" OR synopsis LIKE "%Flor%")
   AND rating > 7;















