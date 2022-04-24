import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './styles.css';
import routes from "./routes.js";
import Header from "./Header";
import firebase from 'firebase';
import firebaseConfig from "./firebase.config";
import reportWebVitals from "./reportWebVitals"
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn}}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />

          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
                />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();