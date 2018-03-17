import React,{Component} from 'react';
import { Link } from 'react-router';

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
                    <div >
                        <label>Telephone</label>
                        <input type="text"  name="telephone"/>
                    </div>
                    <div >
                        <label>Nom</label>
                        <input type="text"  name="nom"/>
                    </div>
                    <div >
                        <label>Adresse</label>
                        <input type="text"  name="adresse"/>
                    </div>
                    <div>
                        <input type="checkbox" name="typeFermier" value="true"/>
                        <label>Avez-vous des produits à proposer?</label>
                    </div>
                    <button type="submit" >Signup</button>
                </form>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        )

    }
};
