import axios from 'axios';

export default {
    getData : function(){
        return axios.get("https://data.cityofnewyork.us/api/views/25th-nujf/rows.json")
    }
}