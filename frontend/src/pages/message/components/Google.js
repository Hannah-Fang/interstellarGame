import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

// todo: convert to functional component

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        // params doc: https://developers.google.com/identity/sign-in/web/reference?hl=en#gapiauth2initparams
        .init({
          client_id:
            '1054065807793-5p0rkni1fj0ktvlp9l5e7ef3dp5pdon9.apps.googleusercontent.com',
          ux_mode: 'popup',
          // access users' email
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          console.log(this.auth)
          // https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinget

          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          // this.onAuthchange()
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
        .catch((e) => {
          console.log(e)
        })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  // sign in
  onLogInClick = () => {
    this.auth.signIn()
    const currentUserId = this.auth.currentUser.get().getId()
    const currentUserMail = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getEmail()
    const currentUseName = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getName()

    localStorage.setItem('userId', currentUserId)
    localStorage.setItem('userMail', currentUserMail)
    localStorage.setItem('username', currentUseName)

    this.props.history.goBack()
  }
  // register a user
  onSignUpClick = () => {
    this.auth.signIn()
    const currentUserId = this.auth.currentUser.get().getId()
    const currentUserMail = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getEmail()
    const currentUseName = this.auth.currentUser
      .get()
      .getBasicProfile()
      .getName()
    axios
      .post('http://localhost:8080/register-google', {
        currentUserId,
        currentUserMail,
        currentUseName,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // sing out
  onLogOutClick = () => {
    this.auth.signOut()
    localStorage.clear()
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onLogOutClick} className="btn btn-info">
          log out
        </button>
      )
    } else {
      return (
        <>
          <button onClick={this.onLogInClick} className="btn btn-success">
            log in with Google
          </button>
          <button onClick={this.onSignUpClick} className="btn btn-primary">
            sign up with Google
          </button>
        </>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default withRouter(GoogleAuth)
