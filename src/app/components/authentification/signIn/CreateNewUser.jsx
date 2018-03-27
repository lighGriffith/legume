import React,{Component} from 'react';
import { Link } from 'react-router';
import image from '../../../../images/fruitLegume.jpg';

export default class CreateNewUser extends Component {
    render() {
        var styles = {
            color:'violet',
            backgroundImage: 'url('+image+')'
        };
        return (
            <div className="container-login100" style ={ styles }>
                <div className="wrap-login100 p-t-30 p-b-50">
                    <span className="login100-form-title p-b-41">Create User</span>
                        <form className="login100-form validate-form p-b-33 p-t-5" action="/signup" method="post">
                            <div className="form-group">
                                <input className="input100" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
                            <div className="form-group">
                                <input className="input100" type="text" name="password" placeholder="Password" />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
                            <div className="form-group">
                                <input className="input100" type="text" name="telephone" placeholder="Telephone" />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
                            <div className="form-group">
                                <input className="input100" type="text" name="nom" placeholder="Nom" />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
                            <div className="form-group">
                                <input className="input100" type="text" name="adresse" placeholder="Adresse" />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>
                            <div className="form-group">
                                <label className="input100">Vous êtes : </label>
                                <label className="checkbox-inline"><input type="checkbox" name="typeFermier" value="true"/>Vendeur</label>
                                <label className="checkbox-inline"><input type="checkbox" name="typeAcheteur" value=""/>Acheteur</label>
                            </div>
                            <div className="container-login100-form-btn m-t-32">
                                <button type="submit" className="login100-form-btn">
                                    Signup
                                </button>
                            </div>
                        </form>
                        <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </div>
        )

    }
};
