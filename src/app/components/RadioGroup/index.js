import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './components/styled'

class RadioGroup extends Component {
  static defaultProps = {
    name: '',
    className: 'radio-group-wrapper',
    label: '',
    options: [],
    defaultValue: '',
    tabIndexStartsAt: 1,
    primaryColor: '#fc7b27',
    secondaryColor: '#FFF',
    onChange: () => {},
  }

  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    tabIndexStartsAt: PropTypes.number,
    onChange: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      checked: this.props.defaultValue
    }
  }

  onChange (e) {
    this.setState({checked: e.target.value})
    this.props.onChange(e)
  }

  render () {
    return (
      <Wrapper primaryColor={this.props.primaryColor} secondaryColor={this.props.secondaryColor} className={this.props.className}>
        <div className='radio-group'>
          {
            this.props.options.map((option, index) => {
              this.id = '_' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
              return (
                <label key={this.id} className={`radio ${option.disabled ? 'disabled' : ''}`}>
                  <input
                    checked={this.state.checked.toString() === option.value.toString()}
                    className='radio__input'
                    disabled={option.disabled ? option.disabled : false}
                    name={this.props.name}
                    tabIndex={this.props.tabIndexStartsAt + index}
                    type='radio'
                    value={option.value}
                    onChange={e => this.onChange(e)}
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

export default RadioGroup