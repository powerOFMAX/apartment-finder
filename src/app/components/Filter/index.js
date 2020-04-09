import React from 'react'
import { Wrapper, OperationType, Direction, ActualSelection } from './components/styled'
import RadioGroup from '../RadioGroup'


const Filter = () => (
  <Wrapper>
    <ActualSelection>
      <h3>Filtrado actual</h3>
    </ActualSelection>

    <Direction>
      <h3>Dirección</h3>
      <div className="search-wrapper">
        <input className="search-input" placeholder="Buscar por dirección"/>
        <button className="search-button" />
      </div>
    </Direction>

    <OperationType>
      <h3 className="operation-title">Tipo de operación</h3>
      <div className="operation-list">
        <RadioGroup
          defaultValue="comprar"
          name="filtros"
          options={[
            { label: 'Comprar', value: 'comprar' },
            { label: 'Alquilar', value: 'alquilar' },
            { label: 'Temporal', value: 'temporal' },
            { label: 'Todos', value: 'todos' },
          ]}
        />
      </div>
    </OperationType>
  </Wrapper>
)

export default Filter
