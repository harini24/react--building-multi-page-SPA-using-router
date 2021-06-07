import { useHistory } from "react-router"
import QuoteForm from "../components/quotes/QuoteForm"

const NewQuote = props => {
    const history = useHistory()
    const addQuoteHandler = QuoteData => {
        console.log(QuoteData)
        history.push("/quotes")
    }
    return <QuoteForm onAddQuote={addQuoteHandler} />
}
export default NewQuote