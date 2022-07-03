import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./CountryCard.module.css";

function CountryCard(props) {
    return (
        <Col>
            <Link
                style={{ textDecoration: "none" }}
                to={{
                    pathname: `/${props.name}`,
                    state: { name: props.name },
                }}
            >
                <Card className={styles.card} style={{ width: "15rem" }}>
                    <Card.Img variant="top" src={props.flag} alt={props.name} />
                    <Card.Body className={styles.body}>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            Population: {props.population.toLocaleString()}
                        </Card.Text>
                        <Card.Text>Region: {props.region}</Card.Text>
                        <Card.Text>Capital: {props.capital}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

export default CountryCard;
