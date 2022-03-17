import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TextImageRight = ({ slice }) => {
  console.log({slice})
  return (
  <section className={slice.variation}>
    <div className="textImageContent">
      <span className="title">
        {
          slice.primary.title ?
          <PrismicRichText field={slice.primary.title}/>
          : <h2>Template slice, update me!</h2>
        }
      </span>
      {
        slice.primary.description ?
        <PrismicRichText field={slice.primary.description}/>
        : <p>start by editing this slice from inside Slice Machine!</p>
      }
    </div>
    <div className="textImageImage">
      <img src={slice.primary.mainImage.url} alt={slice.primary.mainImage.alt} />
    </div>

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
          display: flex;
          gap: 2rem;
          align-items: center;
          flex-direction: column;
        }
        @media (min-width:800px){
          section {
            flex-direction: row;
          }
        
          section > div {
            flex: 0 0 50%;
          }

          section.imageLeft .textImageContent {
            order: 2;
          }

          section.imageLeft .textImageImage {
            order: 1;
          }
        }
        
        .title {
          color: cornFlowerBlue;
        }
    `}</style>
  </section>
)}

export default TextImageRight