const getLandByName = (name) => {
    const landNameAPI = "http://localhost:5000/lands/name?"

    const request = {
        method: "GET",
        headers: { "Content-type": "application/json" },
    };
    
    return fetch(landNameAPI + new URLSearchParams({
        name: name
    }), request)
        .then((response) => response.json())
        .then((res) => Promise.resolve(res))
        .catch(() => Promise.reject({}));
}

const getLandByType = (type) => {
    const landTypeAPI = "http://localhost:5000/lands/type?"

    const request = {
        method: "GET",
        headers: { "Content-type": "application/json" },
    };
    
    return fetch(landTypeAPI + new URLSearchParams({
        type: type
    }), request)
        .then((response) => response.json())
        .then((res) => Promise.resolve(res))
        .catch(() => Promise.reject({}));
}

export {getLandByName, getLandByType}