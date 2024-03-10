import axios from 'axios';

export default class RouteService {
    static async getAll(limit = 10, page = 1) {
        const auth = localStorage.getItem('auth')
        if (auth) {
            const response = await axios.get(
                'http://localhost:8000/api/v1/shortest_path/routes/',
                {
                    headers: {
                        'Authorization': 'Bearer ' + auth,
                        'Accept': 'application/json'
                    }
                }
            )
            return response.data;
        }
    }

    static async getById(id) {
        const auth = localStorage.getItem('auth')
        if (auth) {
            const response = await axios.get(
                `http://localhost:8000/api/v1/shortest_path/routes/${id}/`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + auth,
                        'Accept': 'application/json'
                    }
                }
            )
            return response.data;
        }
    }
}
