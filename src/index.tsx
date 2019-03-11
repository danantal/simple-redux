import * as React from "react";
import * as ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import Button from "./Button";
import Input from "./Input";
import Display from "./Display";

import { add, subtract, reset, store } from './store'

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <div style={{ margin: "20px" }}>
                    <Input />
                    <Button title="Add" onClick={() => store.dispatch(add(store.getState().current))} />
                    <Button title="Subtract" onClick={() => store.dispatch(subtract(store.getState().current))} />
                    <Button title="Reset" onClick={() => store.dispatch(reset())} />
                    <Display />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);