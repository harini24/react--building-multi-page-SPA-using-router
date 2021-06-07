import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning react is fun' },
    { id: 'q2', author: 'Max again', text: 'Learning react is fun funner and funnest' }
];
const Quotes = props => {
    return <QuoteList quotes={DUMMY_QUOTES} />
}
export default Quotes