import React from "react"
import Axios from "axios"
import RoutePath from "../router/RoutePath";
import Card from "react-bootstrap/Card"
import Image from "../../assets/images/Jumbotron_5.jpg"

export default class NewsList extends React.Component {
    state = {
        data: [],
        img: []
    }
    componentDidMount() {
        Axios.get(`https://official-joke-api.appspot.com/jokes/ten`).then(res => {
            this.setState({data: res.data})
        });
    }

    render() {
        return (
            <ul>
                {this.state.data.map(news => 
                <li className="list-unstyled">
                    <Card className="mb-5" style={{ width: '30rem'}}>
                            <Card.Img variant="top" src={Image} style={{ height: '5rem'}} />
                            <Card.Body>
                                    <Card.Title>News</Card.Title>
                                    <Card.Text>
                                        {news.setup}
                                    </Card.Text>
                                    <Card.Text>
                                        {news.punchline}
                                    </Card.Text>
                                    <a href={RoutePath.home}>Read More..</a>
                            </Card.Body>
                    </Card>
                </li>)}
            </ul>
        )
    }
}
