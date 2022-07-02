import React, { useEffect, useState } from "react";

import CountryCard from "./../CountryCard/CountryCard";
import Container from "react-bootstrap/Container";

function Home() {
    const [countries, setCountries] = useState([]);

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
                <CountryCard />
            </Container>
        </main>
    );
}
export default Home;
