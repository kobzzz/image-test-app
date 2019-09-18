import { FETCH_IMAGE, REMOVE_IMAGE, FETCH_IMAGE_SUCCESS, CHANGE_PAGE_NUMBER } from './constants';

export const fetchImage = () => {
  return {
    type: FETCH_IMAGE,
  };
};

export const addImage = (image) => {
  return {
    type: FETCH_IMAGE_SUCCESS,
    image,
  };
};

export const removeImage = (image) => {
  return {
    type: REMOVE_IMAGE,
    image,
  };
};

export const changePageNumber = (number) => {
  return {
    type: CHANGE_PAGE_NUMBER,
    number,
  }
};