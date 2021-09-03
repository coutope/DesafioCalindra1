import axios from 'axios';

const api = axios.create({
	baseURL: 'https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook'
});

export default api;