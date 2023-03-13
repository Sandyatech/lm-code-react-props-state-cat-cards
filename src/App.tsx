import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card'
import Cat from './data/cat';
import catData from './data/cat-data';

function App(): JSX.Element {

    // JavaScript/TypeScript code can be inserted here!
    const [cats, setCats] = useState<Array<Cat>>(catData);
    return (
        <>
            <Navbar />
            <Header totalcats={cats.length} />

            <main>
                <div className='cards__wrapper'>
                    {catData.map((cat, index) => (<CatCard
                        key={cat.id}
                        name={cat.name}
                        species={cat.species}
                        favFoods={cat.favFoods}
                        birthYear={cat.birthYear}
                        catIndex={index}
                    />))}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
