import axios from 'axios';

export default class RouteService {
    static async getAll(limit = 10, page = 1) {
        const auth = localStorage.getItem('auth')
        if (auth) {
            try {
                const response = await axios.get(
                    'http://localhost:8000/api/v1/shortest_path/routes/',
                    {
                        headers: {
                            'Authorization': `Bearer ${auth}`,
                            'Accept': 'application/json'
                        }
                    }
                )
                return await response.data

            } catch (error) {
                return error.response.data
            }
        }
    }

    static async getById(id) {
        const auth = localStorage.getItem('auth')
        if (auth) {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/v1/shortest_path/routes/${id}/`,
                    {
                        headers: {
                            'Authorization': `Bearer ${auth}`,
                            'Accept': 'application/json'
                        }
                    }
                )
                return await response.data

            } catch (error) {
                return error.response.data
            }
        }
    }

    static async create({data}) {
        const auth = localStorage.getItem('auth')
        if (auth) {
            const url = 'http://localhost:8000/api/v1/shortest_path/routes/'
            try {
                const response = await axios.post(url, data, {headers: {
                    'Authorization': `Bearer ${auth}`,
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                }})
                return response

            } catch (error) {
                return error.response.data
            }
        }
    }
}
