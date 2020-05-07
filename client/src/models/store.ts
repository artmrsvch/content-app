import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";


const createAppStore = () => {
    const store = createStore(
        reducer,
        compose(
            (noop: any) => noop
        )
    );

    return store;
};



export default createAppStore;