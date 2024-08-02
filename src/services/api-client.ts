import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '157c631401f14bd9901be6a6a43fa7f5'
    }
})