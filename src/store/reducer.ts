import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";

export const reducer = combineReducers({
	global: globalSlice,
});
