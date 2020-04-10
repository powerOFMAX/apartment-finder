import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'
import { Chevron } from '../styled'

export function Direction({ direction, onChange }) {
  const [accordion, setAccordion] = useState(true)

  return (
    <Wrapper accordion={accordion}>
      <div>
        <h3>Dirección</h3>
        <Chevron accordion={accordion} onClick={() => setAccordion(!accordion)} />
      </div>
      <div className='search-wrapper'>
        <input
          className='search-input'
          value={direction}
          onChange={(e) => onChange(e.target.value)}
          placeholder='Buscar por dirección'
        />
        <button type='submit' className='search-button' />
      </div>
    </Wrapper>
  )
}

Direction.propTypes = {
  direction: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Direction
