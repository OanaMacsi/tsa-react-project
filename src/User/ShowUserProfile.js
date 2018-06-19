import React, { Component } from 'react';
import {connect} from 'react-redux'

class ShowUserProfile extends Component {
  render() {
	  const { firstName, lastName, email, phone } = this.props.userData

    return (
      <div>
		<p>Nume: {lastName}</p>
		<p>Prenume: {firstName}</p>
		<p>Email: {email}</p>
		<p>Phone: {phone}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		userData: state
    }
}

export default connect(mapStateToProps, null)(ShowUserProfile);
