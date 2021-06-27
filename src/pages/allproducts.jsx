import * as React from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-dom';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import slugify from "@sindresorhus/slugify"
import {
    productCardStyle,
    productHeadingStyle,
    productImageStyle,
    productDetailsStyle
  } from "../components/product-card.module.css"
import "./allproducts.css";



export default function AlgoliaSearch({ data }) {

const searchClient = algoliasearch('I90VV32WX6', 
'3e98a576ae2a9b992b0ee44aa82e61a1');

  return (
    <Layout>
      <div>
      <InstantSearch searchClient={searchClient} indexName="test_CUST">
      <SearchBox />
      <Pagination
  defaultRefinement={1}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  padding={10}
  totalPages={10}
  translations={{
    previous: '‹',
    next: '›',
    first: '«',
    last: '»',
    page(currentRefinement) {
      return currentRefinement;
    },
    ariaPrevious: 'Previous page',
    ariaNext: 'Next page',
    ariaFirst: 'First page',
    ariaLast: 'Last page',
    ariaPage(currentRefinement) {
      return `Page ${currentRefinement}`;
    },
  }}
/>
      <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
    </Layout>
  )
}


const Hit = ({hit}) =>{
  console.log( hit.images )
    return (
    <Link
      className={productCardStyle}
      to={`/products/${hit.productType ? slugify(hit.productType) + "/" + hit.handle : hit.handle}`}
      aria-label={`View ${hit.handle} product page`}
    >
           <div className={productImageStyle} data-name="product-image-box">
          {hit.images[0] !== undefined ?  <GatsbyImage
              alt="product"
              image={hit.images[0].gatsbyImageData}
              loading="lazy"
              aspectratio={1}
            /> : 
            <StaticImage alt="no image" src="../icons/noimg.png" />
          }
          </div>

          <div className={productDetailsStyle}>
          <h2 as="h2" className={productHeadingStyle}>
              {hit.title}
            </h2>
          </div>

        </Link>
)
}

//  {hit.images[0].product.title}

const pageQuery =`{
  allShopifyProduct {
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
         gatsbyImageData(aspectRatio: 1, width: 200)
       }
       handle
       title
       productType
       excerpt(pruneLength: 5000)
     }
   }
 }
   }
`