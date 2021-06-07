import { useEffect } from "react"
import { useHistory } from "react-router"
import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'
const NewQuote = props => {
    const { sendRequest, status } = useHttp(addQuote)
    const history = useHistory()

    useEffect(() => {
        if (status == 'completed') {
            history.push("/quotes")
        }
    }, [status, history])
    const addQuoteHandler = QuoteData => {
        sendRequest(QuoteData)

    }
    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}
export default NewQuote