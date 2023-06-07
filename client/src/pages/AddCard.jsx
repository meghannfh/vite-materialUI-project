import { Link } from 'react-router-dom';

export default function AddCard() {
    return <>
        <section class='box'>
            <h1>Add a Card</h1>
            <article>
                <button>
                    <input type="file"/>Upload your card
                </button>
                <button>view existing cards already uploaded (maybe we can make it like a modal where it pops up and you can see which cards you already have uploaded)</button>
                <button>use this button to take a picture of the front of your card</button>
                <button>back of the card</button>
                <button>button to actually upload the card</button>
            </article>
        </section>
    </>
}