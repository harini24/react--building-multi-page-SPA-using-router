import React, { useEffect, useReducer } from "react"
import { Route, useParams, useRouteMatch } from "react-router"
import { Link } from "react-router-dom";
import Comments from '../components/comments/Comments'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner"

const Quote = props => {
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)
    const match = useRouteMatch()
    const params = useParams()
    const quoteid = params.quoteId

    useEffect(() => {
        sendRequest(quoteid)
    }, [sendRequest, quoteid])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }
    if (error) {
        return <p className='centered focused'>{error}</p>
    }
    if (!loadedQuote.text) {
        return <p>Quote not found!..</p>
    }
    return <React.Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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