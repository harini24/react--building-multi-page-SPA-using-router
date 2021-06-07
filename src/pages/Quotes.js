import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'
import NoQuotesFoundComponent from '../components/quotes/NoQuotesFound'

const Quotes = props => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true)

    useEffect(() => {
        sendRequest()
    }, [])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }
    if (error) {
        return <p className='centered focused'>{error}</p>
    }
    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFoundComponent />
    }
    return <QuoteList quotes={loadedQuotes} />
}
export default Quotes