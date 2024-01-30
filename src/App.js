import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/pages/About';
import Offers from './components/pages/Offers';
import Career from './components/pages/Career';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;