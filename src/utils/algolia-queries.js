

const pagePath = `products`
const indexName = `test_CUST`

const pageQuery =`{
    products:  allShopifyProduct {
      edges {
        node {
          id
          priceRangeV2 {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images {
            gatsbyImageData(layout: CONSTRAINED, width: 300, height: 300 aspectRatio: 1)
            product {
              title
            }
          }
          handle
        }
      }
    }
      }
  `

function pageToAlgoliaRecord({ node: { id, priceRangeV2,  images , handle } }) {
  return {
    objectID: id,
    id,
    images, 
    priceRangeV2, 
    handle
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.products.edges.map(pageToAlgoliaRecord), 
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries