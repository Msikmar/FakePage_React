import React, {useEffect, useState } from "react"
import Jumbotron from "../../components/layout/Jumbotron"
import Background from "../../assets/images/Jumbotron_2.jpg";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export const Home = () => {

  const [jumbotronP, setJumbotronP] = useState("“Be yourself; everyone else is already taken.”");
  const [jumbotronH1, setJumbotronH1] = useState("Welcome to FakePage")

  useEffect(() => { 
      setTimeout(() => {
        setJumbotronH1("FakePage the place to be")
        setJumbotronP("“Better to remain silent and be thought a fool than to speak out and remove all doubt.”")
      }, 10000)
    return () => {
       alert("You are now leaving the home page")
    }
  }, [jumbotronH1])

    return (
        <div>
            <Jumbotron 
            h1={jumbotronH1}
            p ={jumbotronP}
            background={Background}
            />
            <div className="container home">
            <CardGroup>
            <Card className="text-center mr-5 custom-card">
            <i class="fas fa-pencil-ruler fa-5x"></i>
              <Card.Body>
                <Card.Title className="mt-4 mb-3">Graphic Design</Card.Title>
                <Card.Text>
                Etiam consequat a metus ac bibendum. Donec tempor facilisis nisi, 
                id mattis nibh tincidunt a. Sed ac tortor at enim fringilla finibus vitae quis enim. 
                Vestibulum semper ipsum est, in ullamcorper neque tempus ut.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center mr-5 custom-card">
            <i class="fas fa-laptop fa-5x"></i>
              <Card.Body>
              <Card.Title className="mt-4 mb-3">Web Development</Card.Title>
                <Card.Text>
                Quisque ultricies eu ante sit amet lacinia. Vivamus auctor felis quis ullamcorper blandit. 
                Phasellus tempor augue et tellus varius, eu sodales turpis egestas. 
                Aliquam aliquam hendrerit mi ac porttitor.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center custom-card">
            <i class="fas fa-bullhorn fa-5x"></i>
              <Card.Body>
              <Card.Title className="mt-4 mb-3">Online Advertising</Card.Title>
                <Card.Text>
                Aenean quis venenatis mauris. Etiam in lectus non ipsum scelerisque porttitor. 
                Integer ultrices, nunc sed blandit consectetur, dui dolor lobortis massa, 
                eu condimentum libero nunc et nibh.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup className="mt-5">
            <Card className="text-center mr-5 custom-card">
            <i class="fas fa-cloud-download-alt fa-5x"></i>
              <Card.Body>
              <Card.Title className="mt-4 mb-3">Website Hosting</Card.Title>
                <Card.Text>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Aliquam viverra maximus justo id feugiat. Fusce elementum feugiat nisi at fermentum. 
                Vivamus suscipit, massa non pretium dictum, massa est tempus ligula, 
                ut euismod tortor tortor non lectus.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center mr-5 custom-card">
            <i class="fas fa-cogs fa-5x"></i>
              <Card.Body>
              <Card.Title className="mt-4 mb-3">SEO</Card.Title>
                <Card.Text>
                Vivamus scelerisque magna nec tempor pulvinar. Morbi tellus risus, 
                posuere gravida semper quis, dapibus bibendum eros. Nulla eu lacus et ex dignissim tincidunt. 
                Curabitur cursus velit nunc. Curabitur semper vulputate turpis, in semper elit.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center custom-card">
            <i class="fas fa-comments fa-5x"></i>
              <Card.Body>
              <Card.Title className="mt-4 mb-3">Social Media</Card.Title>
                <Card.Text>
                Nam est magna, iaculis sed porttitor vitae, semper sed enim. 
                Etiam nec sodales orci, ut condimentum neque. Curabitur ac mi quis sapien mollis euismod. 
                Praesent egestas sapien ac interdum tempus.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
            </div>
        </div>
    )
}
