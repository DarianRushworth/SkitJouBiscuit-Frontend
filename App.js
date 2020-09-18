import * as React from "react"
import { Provider as StoreProvider } from "react-redux"
import rootReducer from "./store/rootReducer"
import Nav from "./Navigation/Nav"


function App() {
  return (
    <StoreProvider store={rootReducer} >
    <Nav />
    </StoreProvider>
  );
}

export default App;