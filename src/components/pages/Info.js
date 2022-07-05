import React from "react";
import Country from "../Country/Country";

import styles from "./Info.module.css";

function Info() {
    return (
        <>
            <header className={styles.srOnly}>
                <h1>
                    Find out detailed information about your selected country
                </h1>
            </header>
            <main>
                <Country />
            </main>
        </>
    );
}
export default Info;
