import React, { Component } from 'react'; //This was here before


export class Login extends Component{
    static displayName = Login.name;

    render(){

        return(

            <div className="loginPage">
                <div className='divider'>
                    <h1> </h1>
                </div>

                <div className="pageTitle">
                    <h2 className="pageTitleHistory"> </h2>


                </div>


                <form className="logInForm">
                    <h3 className="logInTop">Login</h3>
                    <div className="input-container">
                        <label>Username:</label>
                        <input type="text" name="userName"></input>
                    </div>
                    <div className="input-container">
                        <label>Password:</label>
                        <input type="password" name="passWord"></input>
                    </div>
                    <input type="submit"></input>

                </form>

                <div className='footerLogIn'> Nomar Olivas @ 2023 </div>

            </div>



        )


    }
}