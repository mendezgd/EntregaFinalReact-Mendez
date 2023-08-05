import { useEffect, useState } from "react";

export const useFetch = (url, config) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url, config)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return {
        data,
    }
}
