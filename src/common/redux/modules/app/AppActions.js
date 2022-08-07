import { getRandomDog } from '../../../api/API';
import { isLocal } from '../../../utils/Utils';
import Types from './Types';

export const setValueApp =
  ({ prop, value }) =>
  async dispatch => {
    dispatch({
      type: Types.SET_VALUE_APP,
      payload: { prop, value },
    });
  };

export const apiGetRandomDog = () => async dispatch => {
  await dispatch(
    getRandomDog(
      (_, response) => {
        if (isLocal()) console.log('apiGetRandomDog - Error', response);
      },
      (_, response) => {
        if (isLocal()) console.log('apiGetRandomDog - Success', response);
      },
    ),
  );
};
