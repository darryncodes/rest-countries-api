import React, { useEffect, useState } from "react";

import CountryCard from "./../CountryCard/CountryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsSearch } from "react-icons/bs";

import styles from "./Home.module.css";

function Home() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [regionFilter, setRegionFilter] = useState("");

    let [loading, setLoading] = useState(true);

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };
    const filterInputHandler = (e) => {
        setRegionFilter(e.currentTarget.value);
    };

    // setLoading(true);
    const getData = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const allCountries = await response.json();

            sessionStorage.setItem("countries", JSON.stringify(allCountries));
            setCountries(allCountries);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (!sessionStorage.getItem("countries")) {
            getData();
        } else {
            setCountries(JSON.parse(sessionStorage.getItem("countries")));
        }
        setLoading(false);
    }, []);

    const searchFunction = (countries) => {
        return countries.filter((item) => {
            if (regionFilter && search) {
                return (
                    item.name.common
                        .toLowerCase()
                        .includes(search.toLowerCase()) &&
                    item.region === regionFilter
                );
            }
            if (regionFilter && !search) {
                return item.region === regionFilter;
            }
            return item.name.common
                .toLowerCase()
                .includes(search.toLowerCase());
        });
    };

    return (
        <>
            <header className={styles.srOnly}>
                <h1>Find out information about countries around the world</h1>
            </header>
            <main>
                <Container>
                    <div className={styles.row}>
                        <Col>
                            <label
                                htmlFor="search"
                                aria-label="Search here for a country"
                            >
                                <BsSearch className={styles.search} />
                                <input
                                    id="search"
                                    type="text"
                                    value={search}
                                    onChange={searchHandler}
                                    placeholder="Search for a country ..."
                                />
                            </label>
                        </Col>
                        <div>
                            <label
                                htmlFor="filter"
                                aria-label="Filter your search here by region"
                            >
                                <select
                                    id="filter"
                                    onChange={filterInputHandler}
                                >
                                    <option value="">Filter by Region</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Americas">America</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Oceania">Oceania</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {loading && (
                        <div className={styles.loader}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}
                </Container>
                <Container>
                    <Row>
                        {searchFunction(countries).map((item, id) => {
                            return (
                                <>
                                    <CountryCard
                                        key={id}
                                        flag={item.flags.png}
                                        name={item.name.common}
                                        population={item.population}
                                        region={item.region}
                                        capital={item.capital}
                                    />
                                </>
                            );
                        })}
                    </Row>
                </Container>
            </main>
        </>
    );
}
export default Home;
