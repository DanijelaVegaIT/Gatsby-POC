import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import CarouselPage from "../components/carusel";
import { StaticImage } from "gatsby-plugin-image";
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
  }
`


export default function IndexPage({ data }) {

  console.log(data.allGoogleSheet.nodes )
 // const src= `${data.allGoogleSheet.nodes[0].Sheet1[0]}`;
  const top = {
    color:"gray",
    fontSize:'200%',
    textAlign:"center",
    margin:"20px 0px"
  }

  return (
    <Layout>
      <StaticImage 
       src='hero.jpg'
       alt="" 
       placeholder="blurred"
       style={{width: "100%", maxHeight: 500}}/>
       <h1 id="top" style={top}>TOP PRODUCTS</h1>
      <CarouselPage images={data} />
      <Content data={data} />
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
