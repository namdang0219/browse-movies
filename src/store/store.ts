import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer,
	middleware: (gDM) => gDM().concat(sagaMiddleware),
	// middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
