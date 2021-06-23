const path = require('path');

exports.createPages = async ({graphql, actions}) =>{
    const { data } = await graphql(`{
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            title
            content
            img {
              id
              childImageSharp {
                gatsbyImageData(height: 600, width: 900, aspectRatio: 1.8)
              }
            }
          }
        }
      }
    }`)


    data.allMarkdownRemark.nodes.forEach(node=>{
        actions.createPage({
            path: '/content/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/content-details.js'),
            context: { slug: node.frontmatter.slug, title:node.frontmatter.title, content:node.frontmatter.content, img: node.frontmatter.img.childImageSharp } 
        })
    })
}