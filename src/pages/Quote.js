import React from "react"
import { Route, useParams } from "react-router"
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning react is fun' },
    { id: 'q2', author: 'Max again', text: 'Learning react is fun funner and funnest' }
];

const Quote = props => {
    const params = useParams()
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <p>Quote not found!..</p>
    }
    return <React.Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        {/* <Route path={`/quotes/${quoteId}/comments`}> */}
        <Route path="/quotes/:quoteId/comments">
            <Comments></Comments>
        </Route>
    </React.Fragment>
}
export default Quote