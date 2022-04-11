import axios from "axios";

export default class PostServise{
    static async service(limit, page){
        var data = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page    
            }
        });
        return data;
    }

    static async Service(limit, Page){
        var data = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: Page    
            }
        });
        return data;
    }

    static async ZaprosID(id){
        var data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return data;
    }
    static async ComZaprosID(id){
        var data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return data;
    }
}
