import * as React from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-dom';
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import slugify from "@sindresorhus/slugify"
import {
    productCardStyle,
    productHeadingStyle,
    productImageStyle,
    productDetailsStyle,
    productPrice,
  } from "../components/product-card.module.css"
import "./allproducts.css";



export default function AlgoliaSearch({ data }) {

const searchClient = algoliasearch('DHQNQ5IZ4A', 
'5788a09283650f4146b2447417886e25');

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
  console.log( hit )
    return (
    <Link
      className={productCardStyle}
      to={`/products/${hit.productType ? slugify(hit.productType) + "/" + hit.handle : hit.handle}`}
      aria-label={`View ${hit.handle} product page`}
    >
           <div className={productImageStyle} data-name="product-image-box">
          {hit.images.length ?  <GatsbyImage
              alt="product"
              image={hit.images[0].gatsbyImageData}
              loading="lazy"
              aspectratio={1}
            /> : <h1>NO IMG</h1>
          }
          </div>

          <div className={productDetailsStyle}>
          <h2 as="h2" className={productHeadingStyle}>
              NO 
            </h2>
            <div className={productPrice}>{hit.priceRangeV2.maxVariantPrice.amount}</div>
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
         gatsbyImageData(aspectRatio: 1, width: 500)
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