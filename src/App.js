import React, { useState } from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Chat from "./components/Chat/Chat"
import Login from "./components/Login/Login"

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* header */}
            < Header />
            <div className="app_body">
              {/* sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

