import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { STAFFS, DEPARTMENTS } from './shared/staffs';
import StaffList from './components/StaffListComponent';
import Header from './components/HeaderComponent'

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        staffs : STAFFS,
        departments : DEPARTMENTS
      };
  }

  render(){
      return (
          <div>
            <Header />
            <StaffList staffs={this.state.staffs} departments={this.state.departments} />
          </div>
      )
  }
}

export default App;
