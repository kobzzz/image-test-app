import React from 'react';
import { connect } from 'react-redux';
import { removeImage } from '../../store/actions';
import { Image } from '../.';
import './style.css';

class ImageItem extends React.Component {
  render() {
    const { className, image } = this.props;

    return (
      <div className={`${className} image-item`}>
        <div className='image-item__image-wrapper'>
          <Image image={image.url} onRemove={() => this.props.removeImage(image)}/>
        </div>
        <div className='image-item__text-section'>
          {image.name &&
            <div className='text-section__title'>
              { image.name }
            </div>
          }

          {image.time &&
            <div className='text-section__time'>
              { image.time }
            </div>
          }
        </div>
      </div>
    );
  }
}

// Подключил компонент к redux, т.к. опускать пропс на
// 2 уровня ниже показалось еще более грязным решением
const mapDispatchToProps = {
  removeImage,
};

export default connect(
  null,
  mapDispatchToProps,
)(ImageItem);