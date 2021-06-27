
const indexName = `test_CUST`

const pageQuery =`{
     products: allShopifyProduct(limit: 200) {
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
            gatsbyImageData(aspectRatio: 1, width: 500)
          }
          handle
          title
          productType
        }
      }
    }
  }
  `

function pageToAlgoliaRecord({ node: { id, handle, title, productType, images } }) {
  return {
    objectID: id,
    handle,
    images,
    title,
    productType
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
