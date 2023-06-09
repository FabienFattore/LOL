const input = document.getElementById('search-i')

fetch('http://ddragon.leagueoflegends.com/cdn/13.11.1/data/fr_FR/item.json')
    .then(response => response.json())
    .then(data => {
        const items = data.data
        const itemCardsContainer = document.getElementById('itemsCards')
        console.log(items);
        Object.keys(items).forEach(key => {
            const item = items[key]
            const itemName = item.name
            const itemImg = item.image.full
            const itemDescription = item.plaintext


            // Création de la div "i-card" pour l'objet

            let itemCard = document.createElement('div')
            itemCard.classList.add('i-card')

            // Création des éléments HTML pour le nom et l'image de l'objet

            let itemNameElement = document.createElement('h2')
            let itemImgElement = document.createElement('img')

            itemNameElement.textContent = itemName
            itemImgElement.src = `http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${itemImg}`

            // Ajout des éléments à la div "i-card"

            itemCard.appendChild(itemNameElement)
            itemCard.appendChild(itemImgElement)
            

            // ajouts des elements dans le descriptif des items
            itemCardsContainer.appendChild(itemCard)
            document.getElementsByClassName('item-bio')[0].innerText = itemName
            document.getElementById('img-item-bio').src = itemImgElement.src
            document.getElementsByClassName('i-bio')[0].innerText = itemDescription

            itemCard.addEventListener('click', () => {
                document.getElementsByClassName('item-bio')[0].innerText = itemName
                document.getElementById('img-item-bio').src = itemImgElement.src
                document.getElementsByClassName('i-bio')[0].innerText = itemDescription
            })
        })

        input.addEventListener('input', trouverItem)

        function trouverItem() {
            search = this.value
            filtrerItem()
        }

        function filtrerItem() {
            Array.from(itemCardsContainer.children).forEach(item => {
                const name = item.querySelector('h2').innerText
                if (name.toLowerCase().includes(search)) {
                    item.style.display = 'flex'
                } else {
                    item.style.display = 'none'
                }
            })
        }
    })
    .catch(error => {
        console.log(error)
    })
    
