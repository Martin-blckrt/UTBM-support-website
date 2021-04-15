import axios from "axios";

export const fetchData = async (url, parameters) => {
    return await axios.get(url, {params : parameters})

};