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
              gatsbyImageData(height: 200, width: 400, aspectRatio: 1.5)
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
       width={1900}
       height={700}/>
       <h1 id="top" style={top}>TOP PRODUCTS</h1>
      <CarouselPage images={data} />
      <Content data={data} />
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
