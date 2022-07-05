import React from "react";
import { Link } from "react-router-dom";

import styles from "./Country.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Country() {
    const location = decodeURI(window.location.hash).replace("#/", "");

    const countries = JSON.parse(sessionStorage.getItem("countries"));
    const countryInfo = countries.find((item) => item.name.common === location);

    // console.log(countryInfo);

    const name = countryInfo.name.common;
    const nativeName = countryInfo.name.nativeName;
    const flags = countryInfo.flags.png;
    const { population, region, subregion, capital, tld, currencies } =
        countryInfo;

    const nameType = Object.keys(nativeName);
    const currencyType = Object.keys(currencies);

    // languages
    const languageKeys = Object.keys(countryInfo.languages);
    const languagesArray = languageKeys.map(
        (key) => countryInfo.languages[key]
    );

    // const bordersArray = [];
    // const borders = countryInfo.borders;

    // console.log(borders);

    // const cioc = countries.forEach((element) => {
    //     return element.cioc;
    // });

    // console.log(cioc);

    // borders.forEach((element) => {
    //     if (element === cioc) {
    //         bordersArray.push(countries.name);
    //     }
    // });

    return (
        <main>
            <Container>
                <Link
                    to={"/"}
                    style={{ textDecoration: "none", outline: "none" }}
                >
                    <button className={styles.btn}>&#8592; Back</button>
                </Link>
            </Container>
            <Container>
                <Row>
                    <Col md className="d-flex align-items-center">
                        <img src={flags} alt={name} />
                    </Col>
                    <Col className="py-4">
                        <h2>{name}</h2>
                        <div className={styles.info}>
                            <div>
                                <p>
                                    Native Name:{" "}
                                    <span>
                                        {nativeName[nameType[0]].common}
                                    </span>
                                </p>
                                <p>
                                    Population:{" "}
                                    <span>{population.toLocaleString()}</span>
                                </p>
                                <p>
                                    Region: <span>{region}</span>
                                </p>
                                <p>
                                    Sub Region: <span>{subregion}</span>
                                </p>
                                <p>
                                    Capital: <span>{capital}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Top Level Domain: <span>{tld}</span>
                                </p>
                                <p>
                                    Currencies:{" "}
                                    <span>
                                        {currencies[currencyType[0]].name}
                                    </span>
                                </p>
                                <p>
                                    Languages:{" "}
                                    {languagesArray.map((item, id) => {
                                        return <span key={id}> {item}</span>;
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className={styles.border}>
                            {/* {bordersArray.map((item, id) => (
                                <Link
                                    key={id}
                                    style={{ textDecoration: "none" }}
                                    to={{
                                        pathname: `/${item}`,
                                        state: { name: item },
                                    }}
                                >
                                    <button className={styles.btn}>
                                        {item}
                                    </button>
                                </Link>
                            ))} */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Country;
