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
                    pathname: `/${props.code}`,
                    state: { name: props.code },
                }}
            >
                <Card className={styles.card} style={{ width: "17.5rem" }}>
                    <Card.Img
                        variant="top"
                        src={props.flag}
                        alt={props.name}
                        className={styles.img}
                    />
                    <Card.Body className={styles.body}>
                        <Card.Title>
                            <span>{props.name}</span>
                        </Card.Title>
                        <Card.Text>
                            Population:{" "}
                            <span>{props.population.toLocaleString()}</span>
                        </Card.Text>
                        <Card.Text>
                            Region: <span>{props.region}</span>
                        </Card.Text>
                        <Card.Text>
                            Capital: <span>{props.capital}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

export default CountryCard;
