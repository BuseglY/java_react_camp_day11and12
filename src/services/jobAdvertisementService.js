import axios from 'axios'

export default class JobAdvertisementService{
    getJobAdvertisement(){
        return axios.get("http://localhost:8090/api/jobAdvertisement/getall")
    }

    getByCompanyNameJobAdvertisement(companyName){
        return axios.get("http://localhost:8090/api/jobAdvertisement/getByCompanyNameJobAdvertisement?companyName="+companyName)
    }

}