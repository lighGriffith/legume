import React,{Component} from 'react';

export default class CreateNewUser extends Component {
    render() {
        return (
            <div>
                <form action="/signup" method="post">
                    <div >
                        <label>Email</label>
                        <input type="text"  name="email"/>
                    </div>
                    <div >
                        <label>Password</label>
                        <input type="password"  name="password"/>
                    </div>
                    <button type="submit" >Signup</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        )

    }
};
