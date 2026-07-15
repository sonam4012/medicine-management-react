import api from "./api";

export const getMedicines = async () => {
    const response = await api.get("/Medicines");
    return response.data;
};

export const getMedicine = async (id) => {
    const response = await api.get(`/Medicines/${id}`);
    return response.data;
};

export const addMedicine = async (medicine) => {
    const response = await api.post("/Medicines", medicine);
    return response.data;
};

export const updateMedicine = async (id, medicine) => {
    const response = await api.put(`/Medicines/${id}`, medicine);
    return response.data;
};

export const deleteMedicine = async (id) => {
    const response = await api.delete(`/Medicines/${id}`);
    return response.data;
};