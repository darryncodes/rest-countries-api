import React from "react";
import { Link } from "react-router-dom";

import styles from "./Country.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img from "./../../test-image.svg";

function Country() {
    return (
        <main>
            <Container>
                <Link to={"/"}>
                    <button className={styles.btn}>&#8592; Back</button>
                </Link>
            </Container>
            <Container>
                <Row>
                    <Col md>
                        <img src={img} alt="" />
                    </Col>
                    <Col className="py-4">
                        <div className={styles.info}>
                            <div>
                                <p>Native Name:</p>
                                <p>Population:</p>
                                <p>Region:</p>
                                <p>Sub Region:</p>
                                <p>Capital:</p>
                            </div>
                            <div>
                                <p>Top Level Domain:</p>
                                <p>Currencies:</p>
                                <p>Languages:</p>
                            </div>
                        </div>
                        <div className={styles.border}>
                            <p>Border Countries:</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Country;
