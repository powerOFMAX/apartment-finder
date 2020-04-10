import React, { useState } from 'react'
import PropTypes from 'prop-types'
import RadioGroup from '../../../RadioGroup'
import { Wrapper } from './styled'

export function OperationType({ operationType, onChange }) {
  const [accordion, setAccordion] = useState(true)

  return (
    <Wrapper accordion={accordion}>
      <div>
        <h3 className='operation-title'>
          Tipo de operación
        </h3>
        <span className='chevron' onClick={() => setAccordion(!accordion)} />
      </div>
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
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </Wrapper>
  )
}

OperationType.propTypes = {
  operationType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default OperationType
