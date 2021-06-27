import React from "react";
import { Link } from "gatsby";
import { contentBoxes, contentBox } from "./content.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Content({data}){

   const content = data.allGoogleSheet.nodes[0].Sheet1;

    return(
          <div className={contentBoxes}>
          {content.map((item,index)=>{
            return <div key={index} className={contentBox}>
            <Link to={"/content/" + item.slug} key={index}>
              <div>
            <h1><strong>{item.title}</strong></h1>
            <p>{item.text.slice(0, 200) + "..."}}</p>
            </div>
            </Link>
            </div>
          }
            )}
        </div>
        
    )
}
