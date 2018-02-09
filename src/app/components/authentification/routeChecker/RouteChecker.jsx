import React from "react";
import $ from "jquery";
import SignIn from "../signIn/SignIn";

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.isAuth=true;

        }
        isAuthenticated() {

            return this.isAuth;
        }
        componentWillMount() {
            var me=this;
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/isSignIn",
                async:false,
                success: function (data) {
                    me.isAuth=data;
                },
                error:function(err){
                    console.log(err);
                }
            });
        }

        render() {
            return (
                <div>
                    { this.isAuthenticated() === true ? <Component {...this.props} /> : <SignIn/> }
                </div>
            );
        }
    };
}

export default requireAuthentication;



