import React, { useState } from 'react';

export default function Home() {
  const initFormStates = {
    userEmail: '',
    userPassword: '',
  };
  const [userFormValues, setUserFormValues] = useState(initFormStates);

  const handleSubmit = (event) => {
    event.preventDefault();
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = re.test(userFormValues.userEmail);
    if (result === false) {
      const emailEl = document.getElementsByName('Email');
      emailEl.focus();
      alert('Email is not Valid');
    } else {
      console.log('userFormValues : ', userFormValues);
    }
  };

  const changeValues = (e) => {
    const { name, value } = e.target;
    // if (name === "userName") {
    //   setUserFormValues({ ...userFormValues, userName: value });
    // }
    if (name === 'userEmail') {
      setUserFormValues({ ...userFormValues, userEmail: value });
    }
    if (name === 'userPassword') {
      setUserFormValues({ ...userFormValues, userPassword: value });
    }
  };
  return (
    <>
      {/* //Navbar */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4">E-Mart</a>
          </div>
        </nav>
      </div>

      {/* Login Form */}
      <div className="container">
        {/* <div className="row justify-content-md-center"></div> */}
        <div className="row justify-content-center">
          <div className="card my-5" style={{ width: '27rem' }}>
            {/* <img src={LoginImage} className="card-img-top" alt="bg" /> */}
            <div className="card-body">
              <h2 className="fw-bold">Login</h2>
              <form>
                <div className="mb-3 justify-content-start">
                  <label for="exampleInputEmail1" className="form-label" style={{ float: 'left' }}>
                    Email address
                  </label>
                  <input type="email" className="form-control" id="exampleInputEmail1" name="userEmail" value={userFormValues.userEmail} onChange={(event) => changeValues(event)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label" style={{ float: 'left' }}>
                    Password
                  </label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="userPassword" value={userFormValues.userPassword} onChange={(event) => changeValues(event)} />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1" style={{ float: 'left' }}>
                    Check me out
                  </label>
                </div>
                <button className="btn btn-primary" onClick={(event) => handleSubmit(event)}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
