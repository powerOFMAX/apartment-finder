import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Wrapper, Direction, ActualSelection } from './components/styled'
import { applyFiltersToResults } from '../../actions/results'
import { OperationType } from './components/OperationType'

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

        <Direction>
          <h3>Dirección</h3>
          <div className='search-wrapper'>
            <input
              className='search-input'
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              placeholder='Buscar por dirección'
            />
            <button type='submit' className='search-button' />
          </div>
        </Direction>

        <OperationType
          onChange={(e) => dispatchOperation(e)}
          operationType={operationType}
        />
      </Wrapper>
    </form>
  )
}

export default Filter
