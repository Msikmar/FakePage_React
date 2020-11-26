import React, {useEffect, useState, useContext } from "react"
import { UserContext } from "../../global/Userprovider"
import RoutePath from "../router/RoutePath";
import { useHistory } from 'react-router-dom'
import Form from "react-bootstrap/Form"
import Jumbotron from "../../components/layout/Jumbotron"
import Background from "../../assets/images/Jumbotron_1.jpg";

export const Login = () => {

    const [data,setData] = useState([]);

    const testData = [
        {'username': 'abc', 'password': 'abc123'},
        {'username': 'abcd', 'password': 'abc1234'},
        {'username': 'richa', 'password': 'richa123'}
    ];

    const history = useHistory()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const getData = () => {
        fetch("data.json",{
            headers : {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        )
        .then(function(response){
            return response.json();
        })
        .then(function(newdata){
           setData(newdata)
        });
    }
    useEffect( () => {
        getData()
    },[])

    const loginUser = () => {
        if (data.username === username && data.password === password) {
            setAuthenticatedUser(username)
            localStorage.setItem("username", username)
            history.push(RoutePath.home)
        }
        else {
            document.getElementById("errorMessage").style.display = "block";
        }
    }

    return (
        <div>
            <Jumbotron 
            h1={"Login Page"}
            p={"Please log in"}
            background={Background}
            />
            <div className="text-center" id="errorMessage">
                <h3>Username or password is wrong please try again.</h3>
            </div>
            <Form className="loginForm">
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" onChange={event => setUserName(event.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
            </Form.Group>
            <button className=" btn btn-block loginButton" onClick={() => loginUser()}>Login</button>
            <div className="text-center">
                <a href={RoutePath.home}>Sign up</a>
                <span className="p-2">|</span>
                <a href={RoutePath.home}>Forgot Password</a>
            </div>
        </Form>
        </div> 
    )
}