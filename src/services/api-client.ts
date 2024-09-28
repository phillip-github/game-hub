import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {    
        key: 'fab6315e10d54fb0bf837d27f8828ad8'
    }
})