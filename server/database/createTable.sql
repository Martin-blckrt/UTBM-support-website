create table T_admin
(
    id       int auto_increment
        primary key,
    username varchar(20) null,
    password varchar(30) null
);

create table T_category
(
    id   int auto_increment
        primary key,
    name varchar(30) null
);

create table T_article
(
    id           int auto_increment
        primary key,
    idCategory   int          not null,
    articleTitle varchar(100) null,
    tldr         varchar(255) null,
    constraint T_article_ibfk_1
        foreign key (idCategory) references T_category (id)
            on delete cascade
);

create index idCategory
    on T_article (idCategory);

create table T_description
(
    id         int auto_increment
        primary key,
    subtitle   varchar(75)   null,
    subsection varchar(2000) null
);

create table T_articles_description
(
    idDescription int not null,
    idArticle     int not null,
    constraint T_articles_description_ibfk_1
        foreign key (idArticle) references T_article (id)
            on delete cascade,
    constraint T_articles_description_ibfk_2
        foreign key (idDescription) references T_description (id)
            on delete cascade
);

create index idArticle
    on T_articles_description (idArticle);

create index idDescription
    on T_articles_description (idDescription);

create table T_people
(
    id   int auto_increment
        primary key,
    type varchar(20) null
);

create table T_articles_people
(
    idPeople  int not null,
    idArticle int not null,
    constraint T_articles_people_ibfk_1
        foreign key (idArticle) references T_article (id)
            on delete cascade,
    constraint T_articles_people_ibfk_2
        foreign key (idPeople) references T_people (id)
            on delete cascade
);

create index idArticle
    on T_articles_people (idArticle);

create index idPeople
    on T_articles_people (idPeople);


