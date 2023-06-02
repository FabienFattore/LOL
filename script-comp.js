
fetch('http://ddragon.leagueoflegends.com/cdn/13.11.1/data/spell.json')
    .then(response => response.json())
    .then(data => {
        const competences = data.data
        const competenceCardsContainer = document.getElementById('compCards')

        Object.keys(competences).forEach(key => {
            const competence = competences[key]
            const name = competence.name
            const image = competence.image.full
            let search = ''
            console.log(name)
        })
    })