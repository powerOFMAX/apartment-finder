import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './components/styled'

class RadioGroup extends Component {
  constructor(props) {
    super(props)
    const { defaultValue } = this.props

    this.state = {
      checked: defaultValue
    }
  }

  onChange(e) {
    this.setState({ checked: e.target.value })
    const { onChange } = this.props
    onChange(e)
  }

  render() {
    const { primaryColor, secondaryColor, className, options, tabIndexStartsAt, name } = this.props
    const { checked } = this.state
    return (
      <Wrapper primaryColor={primaryColor} secondaryColor={secondaryColor} className={className}>
        <div className='radio-group'>
          {
            options.map((option, index) => {
              this.id = `_${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}`
              return (
                <label key={this.id} className={`radio ${option.disabled ? 'disabled' : ''}`}>
                  <input
                    checked={checked.toString() === option.value.toString()}
                    className='radio__input'
                    disabled={option.disabled ? option.disabled : false}
                    name={name}
                    tabIndex={tabIndexStartsAt + index}
                    type='radio'
                    value={option.value}
                    onChange={(e) => this.onChange(e)}
                  />
                  <span className='radio__visual-input' />
                  <span className='radio__text'>
                    {option.label}
                  </span>
                </label>
              )
            })
          }
        </div>
      </Wrapper>
    )
  }
}

RadioGroup.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  tabIndexStartsAt: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string
}

RadioGroup.defaultProps = {
  className: 'radio-group-wrapper',
  defaultValue: '',
  tabIndexStartsAt: 1,
  primaryColor: '#fc7b27',
  secondaryColor: '#FFF'
}

export default RadioGroup
