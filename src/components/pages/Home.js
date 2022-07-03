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

    // const filterData = () => {
    //     countries
    //         .filter((item) =>
    //             item.name.toLowerCase().includes(search.toLowerCase())
    //         )
    //         .filter(
    //             (item) => regionFilter === "" || item.region === regionFilter
    //         )
    //         .map((item, id) => {
    //             return {
    //                 key: id,
    //                 flag: item.flags.png,
    //                 name: item.name,
    //                 population: item.population,
    //                 region: item.region,
    //                 capital: item.capital,
    //             };
    //         });
    // };

    // const filteredData = () => {
    //     countries
    //         .filter((item) =>
    //             item.name.toLowerCase().includes(search.toLowerCase())
    //         )
    //         .filter(
    //             (item) => regionFilter === "" || item.region === regionFilter
    //         );
    //     return item;
    // };

    console.log(countries);

    return (
        <main>
            <Container>
                <Col className="d-flex justify-content-between py-5">
                    <label htmlFor="search">
                        <BsSearch />
                        <input
                            id="search"
                            type="text"
                            value={search}
                            onChange={searchHandler}
                            placeholder="Search for a country ..."
                        />
                    </label>
                    <label htmlFor="filter">
                        <select id="filter" onChange={filterInputHandler}>
                            <option value="">Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </label>
                </Col>
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
                    {countries.map((item, id) => {
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
    );
}
export default Home;
