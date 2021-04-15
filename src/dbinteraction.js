import axios from "axios";

export const fetchData = async (url, parameters) => {
    const data = await axios.get(url, {params : parameters})
    return data
};