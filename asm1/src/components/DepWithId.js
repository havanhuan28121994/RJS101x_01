import React, { Component } from "react";
import DepStaffs from './DepStaffsComponent';
import { fetchDepStaffs } from "../redux/ActionCreator";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
      depStaffs: state.depStaffs
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    fetchDepStaffs: (depId) => {dispatch(fetchDepStaffs(depId))},
  });

class DepWithId extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.fetchDepStaffs(this.props.match.match.params.id);
      console.log(this.props.match.match.params.id)
  }

  render() {
    return (
 
        <DepStaffs
            depStaffs={this.props.depStaffs}
            fetchDepStaffs={this.props.fetchDepStaffs}
            depId={this.props.depId}
        />
        );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepWithId);


