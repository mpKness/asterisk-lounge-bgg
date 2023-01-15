import { parseString } from "xml2js"; 
import axios from "axios";

export const baseURL = 'https://boardgamegeek.com/xmlapi2/';

/**
 * does things
 * @returns 
 */
export async function getUser(user) {
    const results = await axios.get(`${baseURL}user?name=${user}`, {
        "Content-Type": "application/xml; charset=utf-8"
    });

    let parsedResults = null;
    parseString(results.data, function (err, results) {
      parsedResults = results;
    });

    return parsedResults;
}
