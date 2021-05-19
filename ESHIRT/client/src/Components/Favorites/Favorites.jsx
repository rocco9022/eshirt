import React from 'react'

import FavoritesItems from './FavoritesItems.jsx'

export default function Favorites (){

    let favorites=[
        {
            name: 'About Us!',
            image: 'https://www.idakoos.net/H0250TC1ST0000114132323230011WH0000A1,beat-up-team-work.jpg',
            price:60
        },
        {
            name: 'Pikachu',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61cKQxn1fCL._AC_UX679_.jpg',
            price:40
        },
        {
            name: 'Joker',
            image: 'data:image/jpeg;base64,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',
            price:50
        }
    ]
    return(
        <div>
            <h1>Favorites</h1>
            {favorites.length>0?
            favorites.map(favorite => 
                {return<FavoritesItems favorite={favorite}/>})
            :<p>No items in favorites</p>}
        </div>
    )
}