import axios from "axios";
import { parseString } from "xml2js"; 
import { timeout } from "../utils/timeout";
import { baseURL } from "./bgg-user";

const FIVE_SECONDS = 5000;

export async function getCollection(username, options = {}) {
    let results = {};
    let parsedResults = null;
    while (results.status !== 200) {
        results = await fetchCollection(username, options);
        if (results.status === 200) {
            parseString(results.data, function (err, results) {
                parsedResults = results;
            });
            return parsedResults
        } else if (results.status >= 400) {
            // TODO handle error
            return {};
        }
        await timeout(FIVE_SECONDS);
    }    
    return {};
}


async function fetchCollection(username, options) {
    let url = `${baseURL}collection?username=${username}&stats=1`;

    Object.keys(options, option => {
        url = url + '&' + option + '=' + options[option];
    });

    return await axios.get(url);
}
