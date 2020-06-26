import React,{Component} from 'react';
import LoginRegistration from '../Application/Routings/LoginRegistration';

export default class LoginReg extends Component{
    static navigationOptions = {
        header: false
    }
    render(){
        return(
            <LoginRegistration/>
        );
    }
}