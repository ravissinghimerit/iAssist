import axios from 'axios';
import { conf } from 'variables/env';
export const ask = (input, prompt) => {
    console.log(input, prompt, conf);
    return axios.post(conf.API_BASE_URL + conf.ASK_CF, {
        prompt: `${input}
            ${prompt}
        `
    }).then(res => {
        console.log(res);
        return res.data
    }).then(data => {
        return data;
    })
}

export const chkHealth = (input, prompt) => {
    console.log(input, prompt, conf);
    return axios.post(conf.API_BASE_URL + conf.CHECK_HEALTH, {
        prompt: `${input}
            ${prompt}
        `
    }).then(res => {
        console.log(res);
        return res.data
    }).then(data => {
        return data;
    })
}