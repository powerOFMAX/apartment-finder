import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Wrapper, OperationType, Direction, ActualSelection } from './components/styled'
import RadioGroup from '../RadioGroup'
import { applyFiltersToResults } from '../../actions/results'

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

        <OperationType>
          <h3 className='operation-title'>
            Tipo de operación
          </h3>
          <div className='operation-list'>
            <RadioGroup
              defaultValue={operationType}
              name='filtros'
              options={[
                { label: 'Comprar', value: 1 },
                { label: 'Alquilar', value: 2 },
                { label: 'Temporal', value: 3 },
                { label: 'Todos', value: 4 }
              ]}
              onChange={(e) => dispatchOperation(e.target.value)}
            />
          </div>
        </OperationType>
      </Wrapper>
    </form>
  )
}

export default Filter
