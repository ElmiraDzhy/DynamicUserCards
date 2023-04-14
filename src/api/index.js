import BASE_URL from './../configs/api';


/**
 *
 * @param {object} query
 * @param {number} [query.page]
 * @param {number} [query.results]
 * @param {string} [query.seed]
 * @return {Promise<*>}
 */

export const getUsers = query =>
    fetch(`${BASE_URL}?${queryString.stringify(query)}`)
    .then(res => {
        console.log()
        res.json()
    });