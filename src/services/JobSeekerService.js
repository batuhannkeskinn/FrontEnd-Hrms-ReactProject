import axios from "axios";

export default class JobSeekerService{
getJobSeeker(){
    return axios.get("http://localhost:8080/api/JobSeekers/getAll")
}

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/JobSeekers/getById?id="+ id)
    }
}
