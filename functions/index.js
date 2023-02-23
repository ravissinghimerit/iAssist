const functions = require("firebase-functions");
// import functions from "firebase-functions";

// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors')({ origin: '*', "methods": "GET,HEAD,PUT,PATCH,POST,DELETE" });

const config = new Configuration({
    apiKey: "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"//personal
    // apiKey: "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"//iMerit ravi.ss
});

const openai = new OpenAIApi(config);



const ask = async (prompt) => {
    // return prompt + ' from ask';
    return openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 2000,
        best_of: 1
    }).then(response => {
        console.log(response.data.choices[0].text);
        return response.data.choices[0].text
    })
}

const hcheck = async (prompt) => {
    console.log(prompt);
    return prompt;
}



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.health = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        functions.logger.info("health logs!", { structuredData: true });
        functions.logger.info('request body', { body: request.body })


        // return response.send(prompt)
        let resultText;
        try {
            const { prompt } = request.body;
            console.log('prompt : ' + prompt);
            resultText = await hcheck(prompt)
        } catch (error) {
            console.log('catched at health : ', error);
            return response.status(500).send({ err: error });
        }

        console.log('resultText: ' + resultText);
        return response.status(200).send(resultText);
    });

})

exports.ask = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        functions.logger.info("ask logs!", { structuredData: true });
        functions.logger.info('request body', { body: request.body })


        // return response.send(prompt)
        let resultText;
        try {
            const { prompt } = request.body;
            console.log('prompt : ' + prompt);
            resultText = await ask(prompt)
        } catch (error) {
            console.log('catched at ask : ', error);
            return response.status(500).send({ err: error });
        }
        console.log('resultText: ' + resultText);
        return response.status(200).send(resultText);
        return response.send(resultText);
    });

});
