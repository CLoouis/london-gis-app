const getPlaceByName = (name) => {
    const placeNameAPI = "http://localhost:5000/places/name?"

    const request = {
        method: "GET",
        headers: { "Content-type": "application/json" },
    };
    
    return fetch(placeNameAPI + new URLSearchParams({
        name: name
    }), request)
        .then((response) => response.json())
        .then((res) => Promise.resolve(res))
        .catch(() => Promise.reject({}));
}

const getPlaceByType = (type) => {
    const placeTypeAPI = "http://localhost:5000/places/type?"

    const request = {
        method: "GET",
        headers: { "Content-type": "application/json" },
    };

    return fetch(placeTypeAPI + new URLSearchParams({
        type: type
    }), request)
        .then((response) => response.json())
        .then((res) => Promise.resolve(res))
        .catch(() => Promise.reject({}));
}

export { getPlaceByName, getPlaceByType };