const functions = require('firebase-functions');
const scraper = require('scrape-twitter');
const cors = require('cors')({ origin: true, });

exports.getTweets = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const tweets = async () => {
            const username = 'bjpadhy';
            const list = 'corona-gujarat';
            let result = new scraper.ListStream(username, list, 3);
            const chunks = [];
            for await (const chunk of result) {
                chunks.push(chunk);
            }
            return chunks[0];
        };
        tweets().then(result => {
            console.log(result);
            response.status(200).send("success");
        }).catch(error => {
            response.status(500).send(`${error}`);
        });
        
    });
});
