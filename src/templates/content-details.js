import React from 'react'
import {Layout} from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { contentPage } from "./content.module.css"
 
export default function ContentDetails({pageContext}) {

    return (
        <Layout>
        <div className={contentPage}>
        <h1>{pageContext.title}</h1>
        <GatsbyImage
          alt={pageContext.title}
          image={pageContext.img.gatsbyImageData}
          loading="lazy"
        />
        <br/>
        <br/>
        <p>{pageContext.content}</p>
        </div>
        </Layout>
    )
}
