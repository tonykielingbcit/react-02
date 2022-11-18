import justInCaseQuotes from "../quotes.js";
import {endPointAllQuotes} from "../helpers/globals.js";

import { useState, useEffect } from "react";

const Quotes = ({title}) => {

    const [quotes, setQuotes] = useState();
    // const [originalQuotes, setOriginalQuotes] = useState();
    const [currentQuote, setCurrentQuote] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [renewQuotesArray, setRenewQuotesArray] = useState(false);

    const getQuotes = async () => {
        try {
            const q = await fetch(endPointAllQuotes);
            const freshQuotes = await q.json();
            setQuotes(freshQuotes);
            // setOriginalQuotes(freshQuotes);
        } catch (err) {
            console.log("###Error: ", err);
            setQuotes(justInCaseQuotes);
        }
    }


    const getNewQuote = () => {

        let index = 0;
        do 
            index = Math.floor(Math.random() * (quotes.length));
        while (index === currentIndex)

        setCurrentIndex(index);
        setCurrentQuote(quotes[index]);

        // const temp = quotes.filter((e, id) => id !== index);
        // setQuotes([...temp]);

    };


    useEffect(() => {
        getQuotes();
    }, []);

    /*
    useEffect(() => {
        if (quotes) {
            console.log("quotes::: ", quotes);
            (quotes.length < 2) && setRenewQuotesArray(true);
            (quotes.length === originalQuotes.length) && setRenewQuotesArray(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quotes]);


    useEffect(() => {
        renewQuotesArray && setQuotes([...originalQuotes]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renewQuotesArray]);
*/

    return(
        <section>
            <h1>{title}</h1>

            <h1>{currentQuote && currentQuote.quote}</h1>
            <h4>{currentQuote && currentQuote.author}</h4>
            <button
                onClick={getNewQuote}
            >
                Get your quotes
            </button>
        </section>
    );
};

Quotes.defaultProps = {
    title: "Wise words of the day"
}

export default Quotes;