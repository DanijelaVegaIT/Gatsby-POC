import React from "react";
import { Link } from "gatsby";
import { contentBoxes, contentBox } from "./content.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Content({data}){

   const content = data.allMarkdownRemark.nodes;

    return(
          <div className={contentBoxes}>
          {content.map(item=>{
            return <div key={item.id} className={contentBox}>
            <Link to={"/content/" + item.frontmatter.slug} key={item.id}>
              <div>
          <GatsbyImage
          alt={item.frontmatter.title}
          image={item.frontmatter.img.childImageSharp.gatsbyImageData}
        />
            <h1><strong>{item.frontmatter.title}</strong></h1>
            <p>{item.frontmatter.content.slice(0, 200) + "..."}</p>
            </div>
            </Link>
            </div>
          }
            )}
        </div>
        
    )
}
