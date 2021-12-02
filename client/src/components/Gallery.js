import React from 'react';
import {Carousel, Col, Container, Image, Row} from "react-bootstrap";
import picture_1 from '../assets/gallery/gallery_1.jpg'
import picture_2 from '../assets/gallery/gallery_2.jpg'
import picture_3 from '../assets/gallery/gallery_3.jpg'
import picture_4 from '../assets/gallery/gallery_4.jpg'

function Gallery() {

    const galleryImageStyle = {
        width:  "500px",
        height: "400px",
        objectFit: "contain",
        objectPosition: "center"
    }

            return (
                <Container className="mt-3 mb-5 text-center" id="gallery">
                    <Row>
                        <Col>
                            <h2>Gallery</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <Image className="w-100"
                                       src={picture_1}
                                       alt="Picture 1"
                                       style={galleryImageStyle}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src={picture_2}
                                    alt="Picture 2"
                                    style={galleryImageStyle}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src={picture_3}
                                    alt="Picture 3"
                                    style={galleryImageStyle}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src={picture_4}
                                    alt="Picture 4"
                                    style={galleryImageStyle}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>

            );
        }



export default Gallery;
