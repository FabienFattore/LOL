fetch('http://ddragon.leagueoflegends.com/cdn/13.10.1/data/fr_FR/champion.json')
    .then(response => response.json())
    .then(data => {
        const champions = data.data
        const championCardsContainer = document.getElementById('championCards')

        Object.keys(champions).forEach(key => {
            const champion = champions[key]
            const name = champion.name
            const image = champion.image.full

            // Création de la div "card" pour le champion

            let championCard = document.createElement('div')
            championCard.classList.add('card')

            // Création des éléments HTML pour le nom et l'image du champion
            let championName = document.createElement('h2')
            let championImage = document.createElement('img')

            championName.innerText = name
            championImage.src = `http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${image}`

            // Ajout des éléments à la div "card"
            championCard.appendChild(championName)
            championCard.appendChild(championImage)

            // Ajout de la div "card" au conteneur des cartes
            championCardsContainer.appendChild(championCard)
        })
    })
    .catch(error => {
        console.log(error)
    })

