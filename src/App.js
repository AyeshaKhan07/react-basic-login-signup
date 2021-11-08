import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/LoginSignup" component={LoginSignup} />
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
