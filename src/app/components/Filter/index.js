import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Wrapper, ActualSelection } from './components/styled'
import { applyFiltersToResults } from '../../actions/results'
import { OperationType } from './components/OperationType'
import { Direction } from './components/Direction'

const Filter = () => {
  const dispatch = useDispatch()
  const [operationType, setOperationType] = useState(useSelector((state) => state.data.filters.operationType))
  const [direction, setDirection] = useState(useSelector((state) => state.data.filters.direction))

  function dispatchOperation(value) {
    setOperationType(value)
    dispatch(applyFiltersToResults(value, direction))
  }

  function onSubtmit(e) {
    e.preventDefault()
    dispatch(applyFiltersToResults(operationType, direction))
  }

  return (
    <form onSubmit={(e) => onSubtmit(e)}>
      <Wrapper>
        <ActualSelection>
          <h3>Filtrado actual</h3>
        </ActualSelection>

        <Direction
          direction={direction}
          onChange={(e) => setDirection(e)}
        />

        <OperationType
          onChange={(e) => dispatchOperation(e)}
          operationType={operationType}
        />
      </Wrapper>
    </form>
  )
}

export default Filter
