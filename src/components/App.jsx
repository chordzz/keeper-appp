import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Note from './Note';
// import notes from '../notes';
import CreateNote from './CreateNote';

function App () {
    return( 
        <div>
            <Header />
            < CreateNote />
            <Footer />
        </div>
    )
}

export default App;