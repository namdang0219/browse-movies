import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer,
	middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
