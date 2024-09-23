import React from 'react';
function Form() {
    const subMitted = ()=>{
        alert('Your form is submitted');
    }
    return (
        <>
            <div className='container'>
            <form>
            <label>
          Name:
          <input
            type="text" value='' id='name' placeholder='Enter your name'/>
        </label>
        <br />
        <label>
          Full Name:
          <input
            type="text" value='' placeholder='Enter your full name'/>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email" value= '' placeholder='Enter your Email'/>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password" value='' placeholder='Enter your password'/>
        </label>
        <br />
        
        <button type="submit" onClick={subMitted}>Login</button>
      </form>
            </div>
        </>
    );
}

export default Form;