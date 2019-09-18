import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';
import { FETCH_IMAGE } from './constants';
import { addImage } from './actions';

function* fetchImage(action) {
  try {
    const imageRaw = yield call(Api.fetchImage);
    const imageObj = yield imageRaw.json();
    const image = imageObj.data;

    yield put(addImage({
      url: image.images.downsized.url,
      name: image.slug,
      time: image.import_datetime,
    }));
  } catch(e) {
    console.error('error: ', e.message);
    // Вообще тут должен быть action creator типа FETCH_IMAGE_FAILED,
    // но обработка ошибок не предусмотрена задачей
  }
}

function* saga() {
  yield takeLatest(FETCH_IMAGE, fetchImage);
}

export default saga;