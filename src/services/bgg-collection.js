import axios from "axios";
import { parseString } from "xml2js"; 
import { baseURL } from "./bgg-user";

export async function getCollection(username) {
    let results = {};
    let parsedResults = null;
    while (results.status !== 200) {
        results = await axios.get(`${baseURL}collection?username=${username}&stats=1&own=1`);
        if (results.status === 200) {
            parseString(results.data, function (err, results) {
                parsedResults = results;
            });
            return parsedResults
        } else if (results.status >= 400) {
            // TODO handle error
            return {};
        }
        await setTimeout(2000);
    }    
    return {};
}
