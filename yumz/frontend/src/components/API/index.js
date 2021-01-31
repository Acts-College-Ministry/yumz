import request from 'superagent';

const API = 'https://api.yumz.tisuela.com/';
const API_USER_CREATE = 'api/v0/users/create';
const API_YELP_GET = 'yelp/search';
const API_LIKES_CREATE = 'api/v0/likes/create';

let USER_CREATE_URL = API+API_USER_CREATE;
let YELP_GET_URL = API+API_YELP_GET;
let LIKES_CREATE_URL = API+API_LIKES_CREATE;

const createUser = () => {
    request.post(USER_CREATE_URL).end((err,resp)) => {
        if (!err) {
            JSON.parse(resp.text).items.map((user) =>
            const userID = user.id
            )
        }
    }
}

const getYelp = () => {
    
}

const createLike = () => {
    
}
