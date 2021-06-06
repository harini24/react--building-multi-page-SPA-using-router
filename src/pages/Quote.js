import React from "react"
import { useParams } from "react-router"

const Quote = props => {
    const params = useParams()
    const quoteId = params.quoteId
    return <React.Fragment>
        <h1>Quote page</h1>
        <p>{quoteId}</p>
    </React.Fragment>
}
export default Quote