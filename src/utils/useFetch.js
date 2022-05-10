const PATH = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const consumirApi = (url) => {
    return fetch(PATH + url, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(res => res.json())
}

export default consumirApi;