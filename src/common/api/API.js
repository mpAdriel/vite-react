// resources
import Environment from '../env/Environment';
import { isLocal } from '../utils/Utils';

import Tags from './Tags';

/* METHODS */
// const DEL = "DELETE";
const GET = 'GET';
// const POST = 'POST';
// const PUT = "PUT";

/* ANYTHING */
export const anythingEndpoint =
  ({ endpoint, options }, callbackError, callbackSuccess) =>
  async dispatch => {
    return dispatch(
      launchFetch(
        Tags.ANYTHING_ENDPOINT,
        endpoint,
        options,
        callbackError,
        callbackSuccess,
      ),
    );
  };

/* GET */
export const getRandomDog =
  (callbackError, callbackSuccess) => async dispatch => {
    const url = '/breeds/image/random';
    const options = { method: GET, body: null };

    return dispatch(
      launchFetch(
        Tags.GET_API_DOG,
        url,
        options,
        callbackError,
        callbackSuccess,
      ),
    );
  };

/* PRIVATE METHODS */
export const launchFetch =
  (tag, url, options, callbackError, callbackSuccess) => async dispatch => {
    let response = null;

    /* config base url */
    let baseUrl = '';

    if (tag === Tags.GET_API_DOG) {
      baseUrl = 'https://dog.ceo/api';
    } else {
      baseUrl = Environment.baseUrl;
    }

    if (tag === Tags.ANYTHING_ENDPOINT) {
      try {
        response = await fetch(url, options);
      } catch (error) {
        response = error;
      }
    } else {
      try {
        response = await fetch(`${baseUrl}${url}`, options);
      } catch (error) {
        response = error;
      }
    }

    await dispatch(
      processResponse(tag, response, callbackError, callbackSuccess),
    );
  };

export const processResponse =
  (tag, response, callbackError, callbackSuccess) => async () => {
    if (isLocal()) console.log('TAG: ', tag, ' | Response: ', response);
    const responseJSON = await response?.json();

    if (response === undefined || response === null) return;

    switch (response.status) {
      case 200:
        callbackSuccess(tag, responseJSON);
        break;

      case 400:
        callbackError(tag, response.data);
        break;

      case 401:
        if (isLocal()) console.warn('Not authorized 401 - Invalid credentials');
        break;

      case 404:
        callbackError(tag, response);
        break;

      default:
        if (isLocal()) {
          console.warn(`Tag ${tag} return status 500`);
          alert(`Tag ${tag} return status 500`);
        }
        callbackError(tag, response);
        break;
    }
  };
