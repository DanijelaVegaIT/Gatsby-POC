const path = require('path');

exports.createPages = async ({graphql, actions}) =>{
    const { data } = await graphql(`{
  allGoogleSheet {
    nodes {
      id
      Sheet1 {
        text
        title
        slug
      }
    }
  }
    }`)


    data.allGoogleSheet.nodes[0].Sheet1.forEach(node=>{
        actions.createPage({
            path: '/content/' + node.slug,
            component: path.resolve('./src/templates/content-details.js'),
            context: { slug: node.slug, title:node.title, content:node.text } 
        })
    })
}