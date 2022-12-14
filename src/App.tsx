import { Route, Switch } from "wouter"
import Home from "./pages/Home"
import About from "./pages/About"
import "./App.css"

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default App
