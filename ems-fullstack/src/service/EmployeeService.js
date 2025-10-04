import axios from "axios";

// Use value from .env (injected by Vite)
const BASE_URL = import.meta.env.VITE_API_BASE_URL || __API_BASE_URL__;
const EMP_URL = `${BASE_URL}/api/emp`;

export const listEmployees = () => axios.get(EMP_URL);

export const savedEmployee = (employee) => axios.post(EMP_URL, employee);

export const editEmployee = (employeeId) => axios.get(`${EMP_URL}/${employeeId}`);

export const updateDataEmployee = (employeeId, employee) =>
  axios.put(`${EMP_URL}/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(`${EMP_URL}/${employeeId}`);
