
//marche pas, à voir si on peut utiliser react Helmet pour ajouter un script; mais le top serait d'utiliser ca :
// https://www.gatsbyjs.com/docs/data-fetching/

export default function requestDB(){
    $("#requestButton").ajax({
        type: 'GET',
        contentType: 'application/json',
        url: '/articleData',
        success: function(data) {
            console.log(data); // show Hello world
        }
    });
}
