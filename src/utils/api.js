import axios from "axios";

const queryUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
const apiKey = "&api-key=dcJvhvqSgkbREL8089hmt7neiL70YSW1";

export default {
    search: function(query) {
        return axios.get(queryUrl + query + apiKey);
    }
};