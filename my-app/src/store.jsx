import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import { reducer } from "../JobFeature/reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({todoState:TodosReducer,counterState:CounterReducer})
export const store=createStore(rootReducer,compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())
    )