import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { STAFFS } from './shared/staffs';
import StaffList from './components/StaffListComponent';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        staffs : STAFFS
      };
  }

  render(){
      return (
          <div>
            <StaffList staffs={this.state.staffs} />
          </div>
      )
  }
}

export default App;
