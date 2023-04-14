'use strict';

import BASE_URL from '../configs/api.js';


export default async function getUsers(resultsAmount){
    try {
        const responseFetch = await fetch(`${BASE_URL.BASE_URL}?results=${resultsAmount}&seed=name`);
        return await responseFetch.json();
    }
    catch(err) {
        console.log(`${err}`);
    }  
}