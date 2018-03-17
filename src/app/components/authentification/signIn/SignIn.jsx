import React,{Component} from 'react';
import { Link } from 'react-router';

export default class SignIn extends Component {
    render() {
        return (
            <div >
                <div >

                    <h1><span ></span> Login</h1>

                    <form action="/login" method="post">
                        <div >
                            <label>Email</label>
                            <input type="text"  name="email"/>
                        </div>
                        <div >
                            <label>Password</label>
                            <input type="password"  name="password"/>
                        </div>

                        <button type="submit" >Login</button>
                    </form>
                    <p>Need an account? <Link to="/signup">Signup</Link></p>
                </div>
            </div>
        )

    }
};
