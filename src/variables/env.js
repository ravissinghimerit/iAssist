const dev = {
    API_BASE_URL: 'http://localhost:5000/chakra2/us-central1',
    ASK_CF: '/ask',
    CHECK_HEALTH: '/health',
    sampleInput: `Ravi : Hi I am here to help you please tell me how can I help you
    Rohit: I need to know hot iMPP assist works
    Ravi: yes! sure can we setup a meet call at around 3 pm today`,
    samplePrompt: `summarise above conversation`
}

const prod = {
    API_BASE_URL: 'https://us-central1-chakra2.cloudfunctions.net',
    ASK_CF: '/ask',
    CHECK_HEALTH: '/health',
    sampleInput: `Ravi : Hi I am here to help you please tell me how can I help you
    Rohit: I need to know hot iMPP assist works
    Ravi: yes! sure can we setup a meet call at around 3 pm today`,
    samplePrompt: `summarise above conversation`
}

const Env = "dev";
// const Env = "prod";


export const conf = Env === "dev" ? dev : prod;