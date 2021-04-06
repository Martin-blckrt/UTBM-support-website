
//marche pas, à voir si on peut utiliser react Helmet pour ajouter un script; mais le top serait d'utiliser ca :
// https://www.gatsbyjs.com/docs/data-fetching/
// https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/
// https://www.gatsbyjs.com/docs/node-creation/

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
