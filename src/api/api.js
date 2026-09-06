import { API_URL } from '@env';

// GET request to load all coffee products from MockAPI

export const fetchProducts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    return data;
};