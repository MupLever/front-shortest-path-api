import axios from 'axios';

export default class RouteService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost:8000/api/v1/shortest_path/routes/')
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:8000/api/v1/shortest_path/routes/${id}/`)
        return response.data;
    }
}
