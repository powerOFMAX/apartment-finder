import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../../components/Filter'
import SearchResult from '../../components/SearchResult'
import { Wrapper } from './components/styled'

const MainSerp = () => {
  const postings = useSelector((state) => state.list)

  return (
    <Wrapper>
      <div className='left-container'>
        <Filter />
      </div>
      <div className='right-container'>
        <SearchResult content={postings} />
      </div>
    </Wrapper>
  )
}

export default MainSerp
