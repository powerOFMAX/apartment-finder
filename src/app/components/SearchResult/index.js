import React from 'react'
import PropTypes from 'prop-types'
import { CardWrapper } from './components/styled'
import Card from './components/Card'
import NoResults from './components/NoResults'

const SearchResult = ({ content }) => (
  <div>
    {content.length ? content.map((result, i) => {
      const key = `${i}${result.id}`
      return (
        <ResultElement key={key} result={result} />
      )
    })
      : <NoResults />}
  </div>
)

const ResultElement = ({ result }) => (
  <CardWrapper publicationPlan={result.publication_plan} key={result.posting_id}>
    <Card
      id={result.posting_id}
      publishDate={result.publish_date}
      picture={result.posting_picture}
      title={result.title}
      price={result.posting_prices[0]}
      slug={result.posting_slug}
      location={result.posting_location}
      description={result.posting_description}
      publicationPlan={result.publication_plan}
    />
  </CardWrapper>
)

SearchResult.propTypes = {
  content: PropTypes.array
}

ResultElement.propTypes = {
  result: PropTypes.object
}

export default SearchResult
