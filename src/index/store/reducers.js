import initState from './initState';
import { reducer as setCityDataReducer } from './setCityData';
import { reducer as setCityDataLoadingReducer } from './setCityDataLoading';
import { reducer as setCitySelectorVisibleReducer } from './setCitySelectorVisible';
import { reducer as setDateSelectorVisibleReducer } from './setDateSelectorVisible';
import { reducer as setSelectedCityReducer } from './setSelectedCity';
import { reducer as toggleHighSpeedReducer } from './toggleHighSpeed';
import { reducer as setDateReducer } from "./setDate";

const reducers = [
  setCityDataReducer,
  setCityDataLoadingReducer,
  setCitySelectorVisibleReducer,
  setDateSelectorVisibleReducer,
  setDateReducer,
  setSelectedCityReducer,
  toggleHighSpeedReducer
];

export default function reducer(state = initState, action) {
  return reducers.reduce((s, r) => r(s, action), state);
}