import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';

class Signup extends Component {
  // onSubmit({ email, password, passwordConfirm }) {
  //   this.props.method({ email, password, passwordConfirm });
  // }
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    return (
      <form>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control'/>
          {password.touched && password.error && <div className='error'>{password.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>confirm Password:</label>
          <input {...passwordConfirm} type='password' className='form-control'/>
        </fieldset>
        <button action='submit' className='btn btn-primary'>Sign up</button>
      </form>
    );
  }
}

function validate(formProps) {
  //console.log(formProps);
  const errors = { };
  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!';
  }
  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);