import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./screens/Home"
import store from "./store"

const App = () => (
  <Provider store={store}>
    <Router>
      {<header></header>}
      {console.log({store})}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
)

export default App
