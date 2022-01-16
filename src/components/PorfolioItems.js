import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const PortfolioItems = () => {
  return (
    <StaticQuery query={graphql`
      {
        allWordpressWpPortfolio{
          edges{
            node{
              title
              content
              excerpt
            }
          }
        }
      }
    `} render={props => props.allWordpressWpPortfolio.edges.map(portfolioItem => (
      <div key={portfolioItem.node.id}>
        <h2>{portfolioItem.node.title}</h2>
        <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
        <Link to={`/portfolio/$portfolioItem.node.slug`}>
          Read more
        </Link>
      </div>
    ))} />
  )
}

export default PortfolioItems;