import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Home from './components/Home';
import MasterLayout from './components/MasterLayout';
import jsonData from './data/db.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleDetail = this.handleDetail.bind(this);
  }
  state = {
    data: jsonData.data,
    detail: {}
  }
  handleDetail = (record) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        detail: record,
      }
    })
  }
  render() { 
    return (
      <Router>
      <Routes>
        <Route path='/' element={<MasterLayout />}>
          <Route index element={<Home data={this.state.data} handleDetail={this.handleDetail} />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='detail/:id' element={<Detail detail={this.state.detail} />} />
        </Route>
      </Routes>
    </Router>
    );
  }
}
 
export default App;
