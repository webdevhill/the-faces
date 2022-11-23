import React from "react";

const SignIn = ({ onRouteChange }) => {

// class Signin extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         signInEmail: '',
//         signInPassword: ''
//       }
//     }

//     render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 washed-yellow fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                      <label className="db  washed-yellow fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        // onChange={this.onEmailChange}
                      />
                    </div>
                    <div className="mv3">
                      <label className="db washed-yellow fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        // onChange={this.onPasswordChange}
                      />
                    </div>
                  </fieldset>
                  <div className="">
                    <input
                      onClick={() => onRouteChange('home')}
                      className="b--washed-yellow washed-yellow ph3  washed-yellow pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Sign in"
                    />
                  </div>
                  <div className="lh-copy mt3">
                    <p  
                        onClick={() => onRouteChange('register')} 
                        className="f6 washed-yellow link dim black db pointer">
                        Register
                    </p>
                  </div>
                </div>
              </main>
            </article> 
        )
    // }
}

export default SignIn;
