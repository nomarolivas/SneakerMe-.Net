import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, requireAuth, ...rest } = route;
            return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}

// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Sale from './Sale';
// import Sneakers from './Sneakers';
// import Login from './Login';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="routes">
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Sneakers" element={<Sneakers />} />
//           <Route path="/sale" element={<Sale />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} >

//           </Route>

//         </Routes>

//       </div>
//     </Router>
    
//   );
// }

// export default App;
