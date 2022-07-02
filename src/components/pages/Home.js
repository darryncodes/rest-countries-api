import React, { useEffect, useState } from "react";

import CountryCard from "./../CountryCard/CountryCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { BsSearch } from "react-icons/bs";

function Home() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };
    const filterInputHandler = (e) => {
        setFilter(e.currentTarget.value);
        console.log(filter);
    };

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
    }, []);

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
                <CountryCard />
            </Container>
        </main>
    );
}
export default Home;
