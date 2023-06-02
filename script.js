const input = document.getElementById('search')

fetch('http://ddragon.leagueoflegends.com/cdn/13.11.1/data/fr_FR/champion.json')
    .then(response => response.json())
    .then(data => {
        const champions = data.data
        const championCardsContainer = document.getElementById('championCards')

        Object.keys(champions).forEach(key => {
            const champion = champions[key]
            const name = champion.name
            const image = champion.image.full
            const bio = champion.blurb
            const title = champion.title
            let search = ''

            // Création de la div "card" pour le champion

            let championCard = document.createElement('div')
            championCard.classList.add('card')

            // Création des éléments HTML pour le nom et l'image du champion

            let championName = document.createElement('h2')
            let championImage = document.createElement('img')

            championName.innerText = name
            championImage.src = `http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${image}`

            // Ajout des éléments à la div "card"

            championCard.appendChild(championName)
            championCard.appendChild(championImage)

            // Ajout des elements stats dans la div stats

            championCardsContainer.appendChild(championCard)
            document.getElementsByClassName('title-bio')[0].innerText = ` "${title}" `
            document.getElementsByClassName('nom-bio')[0].innerText = name
            document.getElementsByClassName('bio')[0].innerText = bio
            document.getElementById('img-bio').src = championImage.src    

            championCard.addEventListener('click', () => {
                document.getElementsByClassName('title-bio')[0].innerText = ` "${title}" `
                document.getElementsByClassName('nom-bio')[0].innerText = name
                document.getElementsByClassName('bio')[0].innerText = bio
                document.getElementById('img-bio').src = championImage.src
                console.log(champion)
            })
        })

        input.addEventListener('input', trouverChampion)

        function trouverChampion() {
            search = this.value
            filtrerChampion()
        }

        function filtrerChampion() {
            Array.from(championCardsContainer.children).forEach(champion => {
                const name = champion.querySelector('h2').innerText
                if (name.toLowerCase().includes(search)) {
                    champion.style.display = 'flex'
                } else {
                    champion.style.display = 'none'
                }
            })
        }
    })
    .catch(error => {
        console.log(error)
    })

