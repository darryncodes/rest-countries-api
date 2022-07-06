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

    console.log(countries);
    console.log(countryInfo);

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

    const borders = countryInfo.borders;

    // const foundBorders = borders.map((border) => {
    //     console.log(border);
    //     return countries.find((country) => {
    //         // console.log(country);
    //         // console.log(border);

    //         if (country.cca3 === border) {
    //             return country.name;
    //         }
    //         // return country.cioc === border;
    //     });
    // });

    const foundBorders = borders.map((border) =>
        countries.find((country) => country.cca3 === border)
    );

    // const foundBorders = borders.map((border) =>
    //     countries.find((country) => {
    //         if (country.cca3 === border) {
    //             return country;
    //         }
    //     })
    // );

    console.log(foundBorders);

    const borderNames = foundBorders.map((border) => border.name.common);

    console.log(borderNames);

    return (
        <main>
            <Container>
                <Link to={"/"} style={{ textDecoration: "none" }}>
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
                        <div>
                            <p className={styles.border}>
                                Border countries:
                                {borderNames.map((item, id) => (
                                    <Link
                                        key={id}
                                        style={{ textDecoration: "none" }}
                                        to={{
                                            pathname: `/${item}`,
                                            state: { name: item },
                                        }}
                                    >
                                        <span className={styles.btn}>
                                            {item}
                                        </span>
                                    </Link>
                                ))}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Country;
