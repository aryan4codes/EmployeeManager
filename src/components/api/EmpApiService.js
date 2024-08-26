import { apiClient } from "./ApiClient";
export const retrieveEmpForUsername 
    = (username) => apiClient.get(`/admins/${username}/employees`)

export const deleteEmpApi
= (username,id) => apiClient.delete(`/admins/${username}/employees/${id}`)

export const retrieveEmpApi = (username,id) => apiClient.get(`/admins/${username}/employees/${id}`)

// API function to update employee details
export const updateEmpApi = (username, id, employee) => 
    apiClient.put(`/admins/${username}/employees/${id}`, employee);
  
export const createEmpApi = (username, employee) => 
    apiClient.post(`/admins/${username}/employees`, employee);

