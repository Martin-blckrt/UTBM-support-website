CREATE TABLE T_admin (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(20),
    password VARCHAR(30),
    PRIMARY KEY(id));

CREATE TABLE T_personnes (
    id int NOT NULL AUTO_INCREMENT,
    type VARCHAR(20),
    PRIMARY KEY(id));

CREATE TABLE T_description (
    id int NOT NULL AUTO_INCREMENT,
    sous_titre VARCHAR(75),
    sous_partie VARCHAR(2000),
    PRIMARY KEY(id));

CREATE TABLE T_categorie (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id));

CREATE TABLE T_article (
    id int NOT NULL AUTO_INCREMENT,
    idCategorie int NOT NULL,
    titre VARCHAR(100),
    tldr VARCHAR(255),
    PRIMARY KEY(id),
    FOREIGN KEY(idCategorie) REFERENCES T_categorie(id) ON DELETE CASCADE);

CREATE TABLE T_articles_personnes (
   idPersonne int NOT NULL,
   idArticle int NOT NULL,
   FOREIGN KEY(idArticle) REFERENCES T_article(id) ON DELETE CASCADE,
   FOREIGN KEY(idPersonne) REFERENCES T_personnes(id) ON DELETE CASCADE);

CREATE TABLE T_articles_description (
   idDescription int NOT NULL,
   idArticle int NOT NULL,
   FOREIGN KEY(idArticle) REFERENCES T_article(id) ON DELETE CASCADE,
   FOREIGN KEY(idDescription) REFERENCES T_description(id) ON DELETE CASCADE);
