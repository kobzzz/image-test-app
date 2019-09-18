import React from 'react';
import './style.css';
import Trash from '../../assets/svg/Trash.jsx';

class Image extends React.Component {

  render() {
    const text = this.props.withText && <div className='image__text'>Динамическая картинка</div>;
    const trash = this.props.onRemove && <div onClick={this.props.onRemove}><Trash className='image__remove-icon'/></div>

    return (
      <div className='image__wrapper'>
        {this.props.image
          ? <img
            className='image'
            src={this.props.image}
            alt='Изображение'
          />
          : text
        }
        {trash}
      </div>
    );
  }
};

export default Image;