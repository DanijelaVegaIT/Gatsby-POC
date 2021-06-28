import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carusel.css";

 const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function CarouselPage({images}){

  return (
    <div className="caruselDiv">
    <Slider {...settings} className="carusel">
   {images.shopifyCollection.products.map((image,index) =>{
      return  <Link to={image.slug} key={index}>  
      <GatsbyImage
                alt='image'
                image={image.images[0].gatsbyImageData}
                loading="lazy"
                style={{width: 245, height: 245}}
              />
              </Link>
    })
  }
    </Slider>
    </div>
  )
}

