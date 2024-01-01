import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/auth-reducer";
import { initializeApp } from "./redux/app-reducer";
import News from "./components/News/News"
import Settings from "./components/Settings/Settings";
import Game from "./components/Game/Game";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/preloader/Preloader";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";

//Лэйзи загрузка, чтобы не перегружать первичную загрузку приложения, а подтягивать только то, что нужно
//При этом важно оборачивать компоненту в  React.Suspense, чтобы отображать что-то пока не грузанулись данные
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile/:userId?" element={<React.Suspense fallback={<Preloader />}><ProfileContainer /></React.Suspense>} />
              <Route path="/users/*" element={<React.Suspense fallback={<Preloader />}><UsersContainer /></React.Suspense>} />
              <Route path="/dialogs/*" element={<React.Suspense fallback={<Preloader />}><DialogsContainer /></React.Suspense> } />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/game/*" element={<Game />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}
export default connect(mapStateToProps, { getCurrentUser, initializeApp })(App);


