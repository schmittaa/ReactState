import React, { Component } from 'react'
import { Card, CardGroup } from 'react-bootstrap';

export default class Profile extends Component {
    constructor (){
        super()
        this.state = {
            Profile : {
                  FullName: "SCHMIDT Khaoula",
                  imgSrc: "./Picture/me.jpg",
                  Bio: "Born on december 2nd, 1992 Tunis, Tunisia. Studied at ISET Charguia, web devoleppment, worked at Teleperformance as a chat-assistante.",
                  Profession : "Fullstack developper"                
                }
          }
    }
    render() {
        return (
                <CardGroup className="App">
                    <Card class="Card">
                        <Card.Img variant="top" src={this.state.Profile.imgSrc} style={{ width: '300px', height: "350px" }} />
                        <Card.Body >
                            <Card.Title>{this.state.Profile.FullName}</Card.Title>
                            <Card.Text >
                                {this.state.Profile.Bio}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Profession : {this.state.Profile.Profession}  </small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
        )
    }
}
