import React, { Component } from 'react';
import {connect} from 'react-redux'
import { FormContainer } from './EditUserProfile'

class ShowUserProfile extends Component {
  render() {
	  const { firstName, lastName, email, phone } = this.props.userData
	  const { waitingServer } = this.props

    return (
	  <FormContainer>
		<img alt='Loading...' className={waitingServer ? 'loaderIcon' : 'loaderIcon hidden'} src='/loader.gif' />
		<p>Nume: {lastName}</p>
		<p>Prenume: {firstName}</p>
		<p>Email: {email}</p>
		<p>Phone: {phone}</p>
      </FormContainer>
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
