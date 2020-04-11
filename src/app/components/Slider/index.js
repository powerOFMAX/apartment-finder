import Carousel from 'nuka-carousel'
import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, ImageCounter, CameraIcon } from './components/styled'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    const { images } = this.props

    this.state = {
      slideIndex: 0,
      wrapAround: images.length > 1,
      slidesToShow: 1,
      slidesToScroll: 'auto',
      cellAlign: 'left',
      transitionMode: 'scroll',
      heightMode: 'max',
      withoutControls: false
    }
  }

  render() {
    const { images, height, alt } = this.props
    const {
      withoutControls,
      transitionMode,
      cellAlign,
      slidesToShow,
      slidesToScroll,
      wrapAround,
      heightMode,
      slideIndex
    } = this.state

    return (
      <Wrapper>
        <Carousel
          withoutControls={withoutControls}
          transitionMode={transitionMode}
          cellAlign={cellAlign}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          wrapAround={wrapAround}
          heightMode={heightMode}
          afterSlide={(value) => this.setState({ slideIndex: value })}
          defaultControlsConfig={{
            nextButtonText: ' ',
            prevButtonText: ' ',
            nextButtonClassName: 'next-button',
            prevButtonClassName: 'prev-button'
          }}
          renderBottomCenterControls={null}
        >
          {images.map((item) => {
            this.id = `_${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}`
            return (
              <img
                key={this.id}
                height={height}
                src={item}
                alt={alt}
              />
            )
          })}
        </Carousel>
        <ImageCounter>
          <div>
            <CameraIcon />
            <span className='number'>{`${slideIndex + 1} / ${images.length}`}</span>
          </div>
        </ImageCounter>
      </Wrapper>
    )
  }
}

Slider.propTypes = {
  images: PropTypes.array,
  alt: PropTypes.string,
  height: PropTypes.string
}

export default Slider
