import React, { Component } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import StaffList from "./StaffListComponent";
import Staff from "./StaffComponent";
import Header from "./HeaderComponent";
import DepList from "./DepartmentComponent";
import Footer from "./FooterComponent";
import SalaryList from "./SalaryList";
import Error from "./ErrorComponent";

const mapStateToProps = state => {
  return {
    staffs : state.staffs,
    departments : state.departments
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const data = localStorage.getItem("Staffs");
    if (data) {
      this.props.staffs.concat(JSON.parse(data));
    } else {
      localStorage.setItem("Staffs", JSON.stringify(this.props.staffs));
    }
  }

  updateState(staff) {
    const currentStaffs = this.props.staffs;
    const FullCurrentStaffs = currentStaffs.concat([staff]);
    this.props.staffs.concat([FullCurrentStaffs]);
    localStorage.setItem("Staffs", JSON.stringify(currentStaffs.concat([staff])));
  }

  render() {
    const StaffWithId = ({ match }) => {
      const staffSelected = this.props.staffs.filter(
        (staff) => staff.id === parseInt(match.params.id, 10)
      )[0];
      return (
        <Staff
          staffSelected={staffSelected}
          department={this.props.departments}
        />
      );
    };

    return (
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <StaffList
                  staffs={this.props.staffs}
                  departments={this.props.departments}
                  updateState={(newStaff) => this.updateState(newStaff)}
                />
              )}
            />
            <Route path="/staff/:id" component={StaffWithId} />
            <Route
              path="/departments"
              component={() => <DepList departments={this.props.departments} />}
            />
            <Route
              path="/salarylist"
              component={() => <SalaryList staffs={this.props.staffs} />}
            />
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
