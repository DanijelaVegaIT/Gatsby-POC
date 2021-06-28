import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import CarouselPage from "../components/carusel";
import { GatsbyImage } from "gatsby-plugin-image";
import Content from "../components/content";

export const query = graphql`
 query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    } 
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
  allContentfulAsset {
        edges {
          node {
            id
            gatsbyImageData
          }
        }
      }
    }  
`

export default function IndexPage({ data }) {

  const top = {
    color:"gray",
    fontSize:'200%',
    textAlign:"center",
    margin:"20px 0px"
  }
console.log(data.allContentfulAsset.edges[0].node.gatsbyImageData.images)
  return (
    <Layout>
           <GatsbyImage
                alt='image'
                image={data.allContentfulAsset.edges[0].node.gatsbyImageData}
                loading="lazy"
                style={{width: "100%", maxHeight: 500}}
              />
       <h1 id="top" style={top}>TOP PRODUCTS</h1>
      <CarouselPage images={data} />
      <Content data={data} />
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
