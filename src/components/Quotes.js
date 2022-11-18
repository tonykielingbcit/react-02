import justInCaseQuotes from "../quotes.js";
import {endPointAllQuotes} from "../helpers/globals.js";

import { useState, useEffect } from "react";

const Quotes = () => {

    const [quotes, setQuotes] = useState();
    const [currentQuote, setCurrentQuote] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Get Quote");


    // function to fetch the quotes
    const getQuotes = async () => {
        try {
            const q = await fetch(endPointAllQuotes);
            const freshQuotes = await q.json();
            setQuotes(freshQuotes);
            setLoading(false);
        } catch (err) {
            console.log("###Error: ", err);
            setQuotes(justInCaseQuotes);
        }
    }


    // function to get a new quote
    const getNewQuote = () => {

        setButtonLabel("Get Another Quote");

        let index = 0;
        do 
            index = Math.floor(Math.random() * (quotes.length));
        while (index === currentIndex)

        setCurrentIndex(index);
        setCurrentQuote(quotes[index]);
    };


    // starting point
    useEffect(() => {
        setLoading(true);
        getQuotes();
    }, []);



    // component that performs the main logic
    const MainComponent = () => {
        return(
            <div className = "content-container">
                { !currentQuote &&
                        <p className = "p-initial">
                            {!loading && "Click the button to get a quote"}
                        </p>
                }

                { currentQuote
                    ?
                        <>
                            <h1>{currentQuote.quote}</h1>
                            <h4>{currentQuote.author}</h4>
                        </>
                    : <></>
                }

                <button
                    onClick={getNewQuote}
                    className = {`bt ${currentQuote ? "bt-after" : "bt-before"}`}
                >
                    { buttonLabel }
                </button>
            </div>

        );
    }


    return(
        <section className = "common-settings">
            
            { loading
                ? <p className = "p-initial">loading Quotes..</p>
                : <MainComponent />
            }
        </section>
    );
};

Quotes.defaultProps = {
    title: "Wise words of the day"
}

export default Quotes;