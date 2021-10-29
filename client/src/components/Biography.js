import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";

class Biography extends Component {
    render() {
        return (
            <Container className="mt-5">
                <h2 className="text-center mb-4">Biography</h2>
                <Row>
                    <p>Justin has performed professionally in the music scene for many years.  He is diverse in many musical idioms which include: jazz, funk, blues, rock, and even classical.  Growing up in the Roaring Fork area near Aspen/Snowmass
                        in Colorado led to many great musically opportunities.  One of which led to receiving instruction from the great jazz trumpeter, pianist and music educator Tim Fox.  Tim introduced Justin to: Miles Davis,
                        John Coltrane, McCoy Tyner, Bill Evans, Chick Corea all of whom became musical influences.
                        Justin was also fortunate to study with grammy nominated Hammond B3 jazz organist Pat Bianchi and perform with Lab Band One at UNC in Greeley.
                    </p>
                    <p>
                        Justin has toured internationally and all throughout the western United States.  He's performed with Tim Fox, Lipbone Redding, Jeff Solon, The Rico Blues Project, Jes Grew, TJAAR, All The Pretty Horses and many more.  He led his own
                        jazz trio at the St. Regis Hotel in Aspen, CO which he held for several years.  He is a freelance musician and currently resides in Southwest Utah.
                    </p>
                </Row>

            </Container>
        );
    }
}

export default Biography;
