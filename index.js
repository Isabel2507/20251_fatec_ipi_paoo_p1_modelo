const axios = require('axios')
function obterCoordenadasDaCidade(nomeCidade) {
    const apiKey = ''; 
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(nomeCidade)}&limit=1&appid=${apiKey}`;

    axios.get(url)
        .then(response => {
            const data = response.data;

            if (data.length === 0) {
                console.log(`Cidade "${nomeCidade}" não encontrada.`);
                return;
            }

            const cidade = data[0];
            console.log(`📍 Coordenadas de ${cidade.name}, ${cidade.country}:`);
            console.log(`   Latitude: ${cidade.lat}`);
            console.log(`   Longitude: ${cidade.lon}`);
        })
        .catch(error => {
            if (error.response) {
                console.error(`❌ Erro HTTP: ${error.response.status} - ${error.response.statusText}`);
            } else {
                console.error('❌ Erro ao buscar coordenadas:', error.message);
            }
        });
}


obterCoordenadasDaCidade("Londres");