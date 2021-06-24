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
              gatsbyImageData(aspectRatio: 1.5)
              fluid(maxHeight: 200, maxWidth: 400) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
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

  return (
    <Layout>
      <StaticImage 
       src="hero.jpg"
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
