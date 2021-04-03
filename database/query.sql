SELECT c.name, a.titre, p.type, d.sous_titre, d.sous_partie, a.tldr
FROM T_article a
INNER JOIN T_articles_description ad ON a.id=ad.idArticle
INNER JOIN T_articles_personnes ap ON a.id=ap.idArticle
INNER JOIN T_personnes p ON p.id=ap.idPersonne
INNER JOIN T_description d ON d.id = ad.idDescription
INNER JOIN T_categorie c ON a.idCategorie=c.id
WHERE a.id=1;
