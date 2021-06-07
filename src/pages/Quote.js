import React, { useReducer } from "react"
import { Route, useParams, useRouteMatch } from "react-router"
import { Link } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning react is fun' },
    { id: 'q2', author: 'Max again', text: 'Learning react is fun funner and funnest' }
];

const Quote = props => {
    const match = useRouteMatch()
    const params = useParams()
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <p>Quote not found!..</p>
    }
    return <React.Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={match.path} exact>
            <div className='centered'>
                <Link className='btn-flat' to={`${match.url}/comments`}>Comment</Link>
            </div>
        </Route>
        {/* <Route path={`/quotes/${quoteId}/comments`}> */}
        {/* <Route path="/quotes/:quoteId/comments"> */}
        <Route path={`${match.path}/comments`}>
            <Comments></Comments>
        </Route>
    </React.Fragment>
}
export default Quote