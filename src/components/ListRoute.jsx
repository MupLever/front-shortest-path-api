import React, { useState } from 'react';
import RouteItem from './RouteItem';

function ListRoute({routes}) {
    const [posts, setPosts] = useState([])
    const url = 'http://localhost:8000/api/v1/shortest_path/routes/'
    function fetchPosts() {
        const postData = async (url = '') => {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'Accept': 'application/json'}
            });
            return response.json();
        }
        postData(url)
            .then((data) => {
                setPosts(data)
                console.log(posts)
            })
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <button onClick={fetchPosts} className="btn btn-primary">Fetch</button>
            {posts.map(route => 
                <RouteItem route={route} key={route.id}/>
            )}
        </div>
  );
}

export default ListRoute;
