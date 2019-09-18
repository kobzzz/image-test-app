import { FETCH_IMAGE_SUCCESS, REMOVE_IMAGE, CHANGE_PAGE_NUMBER } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  images: [],
  pageNumber: 1,
});

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_SUCCESS: {
      return state.set('images', state.get('images').push(action.image));
    }
    case REMOVE_IMAGE: {
      const targetImage = action.image;
      return state.set(
        'images',
        state.get('images').remove(state.get('images').findIndex((image) => image.name === targetImage.name))
      );
    }
    case CHANGE_PAGE_NUMBER: {
      return state.set('pageNumber', action.number);
    }
    default:
      return state;
  }
};

export default reducers;
