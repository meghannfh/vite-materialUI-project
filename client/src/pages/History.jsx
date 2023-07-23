import HistoryCard from '../components/HistoryCard';
import CreateHistoryPost from '../components/CreateHistoryPost'

export default function History() {
    return <>
        <section class='box'>
            <CreateHistoryPost />
            <h1>Medical History</h1>
            <input placeholder='ex. Chest X-Ray . . .' type="text" /><button>Search</button>
            <br />
            <br />
            <section className='cardBoard'>
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
            </section>
        </section>
    </>
}