import React from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../../store/actions';
import { getLastImage } from '../../store/selectors';
import { Image } from '../../components';
import './style.css';

class MainPage extends React.Component {

  render() {
    return (
      <div className='main-page'>
        <div className='main-page__title'>
          Главная
        </div>
        <div className='main-page__content'>
          <div className='main-page__image-wrapper'>
            <Image key='unique-image-key' withText image={this.props.image && this.props.image}/>
          </div>
          <button className='main-page__button' onClick={this.props.fetchImage}>
            Загрузить
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    image: getLastImage(state),
  };
};

const mapDispatchToProps = {
  fetchImage,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
