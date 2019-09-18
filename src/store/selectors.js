import { createSelector } from 'reselect';

const getImagesArr = (state) => state.toJS().images;

export const getImages = createSelector(
  getImagesArr,
  (images) => images.length > 0 && images,
);

export const getPageCount = createSelector(
  getImagesArr,
  (images) => Math.ceil(images.length / 5),
)

export const getImagesByPage = createSelector(
  getImagesArr,
  (state) => state.toJS().pageNumber,
  (images, pageNumber) => {
    const outputImages = images.slice((pageNumber - 1) * 5, pageNumber * 5);
    if (pageNumber !== 1 && outputImages.length === 0) {
      // Перебрасываем на предыдущую страницу в случае, если на этой закончились картинки
      const prevPageNumber = pageNumber - 1;
      return images.slice((prevPageNumber - 1) * 5, prevPageNumber * 5);
    }
    return outputImages;
  },
);

export const getLastImage = createSelector(
  getImagesArr,
  (images) => {
    if (images.length > 0) {
      const imageObj = images[images.length - 1];
      return imageObj.url;
    }
  },
);