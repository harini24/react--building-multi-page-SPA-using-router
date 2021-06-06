import React from "react"
import { Route, useParams } from "react-router"
import Comments from '../components/comments/Comments'
const Quote = props => {
    const params = useParams()
    const quoteId = params.quoteId
    return <React.Fragment>
        <h1>Quote page</h1>
        <p>{quoteId}</p>
        {/* <Route path={`/quotes/${quoteId}/comments`}> */}
        <Route path="/quotes/:quoteId/comments">
            <Comments></Comments>
        </Route>
    </React.Fragment>
}
export default Quote