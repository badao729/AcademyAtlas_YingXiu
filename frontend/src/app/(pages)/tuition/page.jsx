'use client'

import NavButton from "../../components/navigation/navButton"
import { useEffect, useState } from 'react';
// import prisma from '../../../lib/prisma';


export default function Tuition() {

    // const [id, setId] = useState('');

    // useEffect(() => {

    //     fetch('/api/data')
    //         .then(response => response.json())
    //         .then(data => {
              
    //             setId(data.id);
    //         });
    // }, []); 


    return (
        <>
        <NavButton />
        <div className="tuition">tuition</div>

        </>
    )
}