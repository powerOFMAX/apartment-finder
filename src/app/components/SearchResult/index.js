import React from 'react'
import { CardWrapper } from './components/styled'
import Card from './components/Card'

const SearchResult = ({ content }) => (
  <div>
    {content.map((result, i) => (
      <ResultElement key={i} result={result} />
    ))}
  </div>
)

const ResultElement = ({ result }) => (
  <CardWrapper publicationPlan={result.publication_plan} key={result.posting_id}>
    <Card
      publishDate={result.publish_date}
      picture={result.posting_picture}
      title={result.title}
      price={result.posting_prices[0]}
      slug={result.posting_slug}
      location={result.posting_location}
      description={result.posting_description}
    />
  </CardWrapper>
)

export default SearchResult
