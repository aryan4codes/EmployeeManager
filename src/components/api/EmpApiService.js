import axios from 'axios'
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retrieveEmpForUsername 
    = (username) => apiClient.get(`/admins/${username}/employees`)

export const deleteEmpApi
= (username,id) => apiClient.delete(`/admins/${username}/employees/${id}`)

export const retrieveEmpApi = (username,id) => apiClient.get(`/admins/${username}/employees/${id}`)

// API function to update employee details
export const updateEmpApi = (username, id, employee) => 
    apiClient.put(`/admins/${username}/employees/${id}`, employee);
  