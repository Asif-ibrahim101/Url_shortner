import axios from "axios";

const BaseUrl = 'https://api.shrtco.de/v2/'

const FetchFormApi = async (url) => {
    const {data} = await axios.get(`${BaseUrl}/${url}`);

    return data;
}

export default FetchFormApi;