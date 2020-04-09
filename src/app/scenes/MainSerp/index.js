import React from 'react'
import Filter from '../../components/Filter'
import SearchResult from '../../components/SearchResult'
import { Wrapper } from './components/styled'
import postings from '../../config/mockedPosting'

const MainSerp = () => (
  <Wrapper>
    <div className="left-container">
      <Filter />
    </div>
    <div className="right-container">
      <SearchResult content={postings} />
    </div>
  </Wrapper>
)

export default MainSerp
