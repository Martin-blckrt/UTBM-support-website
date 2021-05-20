CREATE TABLE T_admin
(
    id       int NOT NULL AUTO_INCREMENT,
    username VARCHAR(20),
    password VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE T_people
(
    id   int NOT NULL AUTO_INCREMENT,
    type VARCHAR(20),
    PRIMARY KEY (id)
);

CREATE TABLE T_category
(
    id   int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE T_article
(
    id           int NOT NULL AUTO_INCREMENT,
    idCategory   int NOT NULL,
    articleTitle VARCHAR(100),
    tldr         VARCHAR(255),
    content         VARCHAR(10000),
    PRIMARY KEY (id),
    FOREIGN KEY (idCategory) REFERENCES T_category (id) ON DELETE CASCADE
);

CREATE TABLE T_articles_people
(
    idPeople  int NOT NULL,
    idArticle int NOT NULL,
    FOREIGN KEY (idArticle) REFERENCES T_article (id) ON DELETE CASCADE,
    FOREIGN KEY (idPeople) REFERENCES T_people (id) ON DELETE CASCADE
);


