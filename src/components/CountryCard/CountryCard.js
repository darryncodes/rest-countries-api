import React from "react";

import Card from "react-bootstrap/Card";
import styles from "./CountryCard.module.css";

import img from "./../../test-image.svg";

function CountryCard() {
    return (
        <>
            <Card className={styles.card}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Country</Card.Title>
                    <Card.Text>Population:</Card.Text>
                    <Card.Text>Region:</Card.Text>
                    <Card.Text>Capital:</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CountryCard;
