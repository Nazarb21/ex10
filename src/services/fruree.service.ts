import axios from 'axios';

const FLUREE_URL = 'http://localhost:8090';

export class FlureeService {
    static async transact(data: any) {
        const response = await axios.post(`${FLUREE_URL}/db/transact`, data);
        return response.data;
    }

    static async query(query: any) {
        const response = await axios.post(`${FLUREE_URL}/db/query`, query);
        return response.data;
    }
}
