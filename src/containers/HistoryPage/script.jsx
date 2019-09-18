import React from 'react';
import { connect } from 'react-redux';
import { getPageCount, getImagesByPage } from '../../store/selectors';
import { changePageNumber } from '../../store/actions';
import Arrow from '../../assets/svg/Arrow.jsx';
import './style.css';
import { ImageItem } from '../../components';
import { Link } from 'react-router-dom';

class HistoryPage extends React.Component {

  render() {
    let pageNumbers = [];

    if (this.props.pageCount > 1) {
      const iterableArr = new Array(this.props.pageCount);
      for (let i = 0; i < iterableArr.length; i++) {
        pageNumbers.push(i + 1);
      }
    }

    return (
      <React.Fragment>
        <div className='history-page'>
          <div className='history-page__title'>
            <Link to='/'>
              <Arrow fill='#707070' className='history-page__back-icon' />История
            </Link>
          </div>
          <div className='history-page__content'>
            {this.props.images.length > 0
              ? this.props.images.map((image, index) => (
                  <ImageItem onRemove={() => this.props.removeImage(index)} image={image} className='history-page__image-item' key={image.name} />
                ))
              : <div>История изображений пуста</div>
            }
          </div>

        </div>
        {pageNumbers.length > 0 &&
            <div className='history-page__page-count'>
              {pageNumbers.map((number) => <button key={number} onClick={() => this.props.changePageNumber(number)}>{number}</button>)}
            </div>
          }
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    images: getImagesByPage(state),
    pageCount: getPageCount(state),
  };
};

const mapDispatchToProps = {
  changePageNumber,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryPage);
