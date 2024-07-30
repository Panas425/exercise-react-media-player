import { ILeftSection } from "./interfaces";
import abbey_road from "./assets/abbey_road.png"
import back_in_black from "./assets/back_in_black.png"
import thriller from "./assets/thriller.png"
import Rumours from "./assets/rumours.png"
import nirvana from "./assets/nirvana.png"
import darkside from "./assets/dark-side.png"
import adele25 from "./assets/25.png"
import bornto from "./assets/born_to.png"
import bruce from "./assets/bruce.png"
import lemonade  from "./assets/lemonade.png"

export const PlayLists: ILeftSection = {
    data:[
        {
            id: '1',
            key: 'Abbey Road',
            value: 'The Beatles',
            image: abbey_road,
        },
        {
            id: '2',
            key: 'Back in Black',
            value: 'AC/DC',
            image: back_in_black,
        },
        {
            id: '3',
            key: 'Thriller',
            value: 'Michael Jackson',
            image: thriller,
        },
        {
            id: '4',
            key: 'Rumours',
            value: 'Fleetwood Mac',
            image: Rumours,
        },
        {
            id: '5',
            key: 'Nevermind',
            value: 'Nirvana',
            image: nirvana,
        },
        {
            id: '6',
            key: 'The Dark Side of the Moon',
            value: 'Pink Floyd',
            image: darkside,
        },
        {
            id: '7',
            key: '25',
            value: 'Adele',
            image: adele25,
        },
        {
            id: '8',
            key: 'Born to Run',
            value: 'Bruce Springsteen',
            image: bornto,
        },
        {
            id: '9',
            key: 'Bruce Springsteen',
            value: 'Elton John',
            image: bruce,
        },
        {
            id: '10',
            key: 'Lemonade',
            value: 'Beyoncé',
            image: lemonade,
        }
    ]
}