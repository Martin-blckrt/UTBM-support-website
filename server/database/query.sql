SELECT c.name, a.titre, p.type, d.sous_titre, d.sous_partie, a.tldr
FROM T_article a
INNER JOIN T_articles_description ad ON a.id=ad.idArticle
INNER JOIN T_articles_personnes ap ON a.id=ap.idArticle
INNER JOIN T_personnes p ON p.id=ap.idPersonne
INNER JOIN T_description d ON d.id = ad.idDescription
INNER JOIN T_category c ON a.idCategory=c.id
WHERE a.id=1;


SELECT a.articleTitle,
       group_concat(distinct d.subtitle order by d.id)   as subtitle,
       group_concat(distinct d.subsection order by d.id) as subsection,
       group_concat(distinct p.type)                     as type
FROM T_article a
         INNER JOIN T_articles_description ad ON a.id = ad.idArticle
         INNER JOIN T_description d ON d.id = ad.idDescription
         INNER JOIN T_articles_people ap ON a.id = ap.idArticle
         INNER JOIN T_people p ON p.id = ap.idPeople
WHERE a.id = ${req.query.idArticle}
