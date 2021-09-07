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
import DepStaffs from "./DepStaffsComponent";
import { addStaff, fetchStaffs, fetchDeps, fetchSalaries } from "../redux/ActionCreator";

const mapStateToProps = state => {
  return {
    staffs : state.staffs,
    departments : state.departments,
    staffsSalaries : state.staffsSalaries
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStaff: (
    name,
    doB,
    startDate,
    department,
    salaryScale,
    annualLeave,
    overTime
  ) =>
    dispatch(
      addStaff(
        name,
        doB,
        startDate,
        department,
        salaryScale,
        annualLeave,
        overTime
      )
    ),
  fetchStaffs: () => {dispatch(fetchStaffs())},
  fetchDeps: () => {dispatch(fetchDeps())},
  fetchSalaries: () => {dispatch(fetchSalaries())}
});

class Main extends Component {
  constructor(props) {
    super(props);

    // this.updateState = this.updateState.bind(this);

    // this.state = {
    //   staffs : this.props.staffs
    // }
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDeps();
    this.props.fetchSalaries()
  }

  componentDidUpdate() {
    console.log(this.props.staffs.staffs)
  }

  render() {
    const StaffWithId = ({ match }) => {
      const staffSelected = this.props.staffs.staffs.filter(
        (staff) => staff.id === parseInt(match.params.id, 10)
      )[0];
      return (
        <Staff
          staffSelected={staffSelected}
          department={this.props.departments.departments}
          isLoading={this.props.staffs.isLoading}
          errMes={this.props.staffs.errMes}
        />
      );
    };

    const DepWithId = ({ match }) => {
      const depSelected = this.props.staffs.staffs.filter(
        (staff) => staff.departmentId === parseInt(match.params.id, 10)
      )[0];
      return (
        <DepStaffs
          depSelected={depSelected}
          departments={this.props.departments.departments}
          staffs={this.props.staffs.staffs}
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
                  staffs={this.props.staffs.staffs}
                  departments={this.props.departments.departments}
                  //updateState={(newStaff) => this.updateState(newStaff)}
                  addStaff={this.props.addStaff}
                  isLoading={this.props.staffs.isLoading}
                  errMes={this.props.staffs.errMes}
                />
              )}
            />
            <Route path="/staff/:id" component={StaffWithId} />
            <Route path="/department/:id" component={DepWithId} />
            <Route
              path="/departments"
              component={() => <DepList 
                departments={this.props.departments.departments}
                isLoading={this.props.departments.isLoading}
                errMes={this.props.departments.errMes} />}
            />
            <Route
              path="/salarylist"
              component={() => <SalaryList staffsSalaries={this.props.staffsSalaries.staffsSalaries}
              isLoading={this.props.staffsSalaries.isLoading}
                errMes={this.props.staffsSalaries.errMes} />}
            />
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
