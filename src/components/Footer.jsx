import React from 'react';


let date = new Date();
date = date.getFullYear();

function Footer () {
    return( 
        <footer>
            <p>Copyright © {date}</p>
        </footer>
    )
}

export default Footer;