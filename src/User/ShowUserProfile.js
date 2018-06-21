import React, { Component } from 'react';
import {connect} from 'react-redux'

class ShowUserProfile extends Component {
  render() {
	  const { firstName, lastName, email, phone } = this.props.userData
	  const { waitingServer } = this.props

    return (
	  <div>
		<img alt='Loading...' className={waitingServer ? 'loaderIcon' : 'loaderIcon hidden'} src='/loader.gif' />
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
		userData: state.userData,
		waitingServer: state.waitingServer
    }
}

export default connect(mapStateToProps, null)(ShowUserProfile);
