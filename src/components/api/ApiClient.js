import axios from "axios";

export const apiClient = axios.create(
    {
        baseURL: 'https://employeemanager-497638774436.us-central1.run.app/',
    }
);
