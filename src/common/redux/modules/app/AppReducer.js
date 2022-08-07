// resources
import { getCurrentLanguage } from '../../../translations/i18n';

// resources
import Types from './Types';

const INITIAL_STATE = {
  /* languages */
  currentLanguage: getCurrentLanguage(),
  /* loading app */
  isLoadingApp: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_VALUE_APP:
      return { ...state, [action.payload.prop]: action.payload.value };

    default:
      return state;
  }
};
