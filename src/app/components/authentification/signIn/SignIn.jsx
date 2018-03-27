import React,{Component} from 'react';
import { Link } from 'react-router';

import '../../../../vendor/bootstrap/css/bootstrap.min.css';
import '../../../../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../../../fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../../../../vendor/animate/animate.css';
import '../../../../vendor/css-hamburgers/hamburgers.min.css'
import '../../../../vendor/animsition/css/animsition.min.css'
import '../../../../vendor/select2/select2.min.css'
import '../../../../vendor/daterangepicker/daterangepicker.css'
import '../../../../css/util.css'
import '../../../../css/main.css'
import image from '../../../../images/fruitLegume.jpg';
export default class SignIn extends Component {
    render() {
        var styles = {
            color:'violet',
            backgroundImage: 'url('+image+')'
        };
        return (
            <div className="container-login100" style ={ styles }>
                <div className="wrap-login100 p-t-30 p-b-50">
                    <span className="login100-form-title p-b-41">Login</span>
                    <form className="login100-form validate-form p-b-33 p-t-5" action="/login" method="post">
                        <div className="wrap-input100">
                            <input className="input100" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                        </div>
                        <div className="form-group">
                            <input className="input100" type="password" name="password" placeholder="Password" />
                            <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                        </div>
                        <div className="container-login100-form-btn m-t-32">
                            <button type="submit" className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </form>
                    <p>Need an account? <Link to="/signup">Signup</Link></p>
                </div>
            </div>
        )
    }
};
