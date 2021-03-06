const searchParams = new URLSearchParams(window.location.search)
const state = searchParams.get('state')

const recallList = document.querySelector('#recallCompanyList')

fetch(`https://food-recalls-fda.herokuapp.com/state?state=${state}`)
    .then(response => response.json())
    .then(handleStates)

function handleStates(recalls) {
    const companies = new Set();
        recalls.forEach(recall => {
            companies.add(recall.recalling_firm)
        })

    companies.forEach(company => {

        const recallCard = document.createElement('div')
        const recallingFirm = document.createElement('h3')
        const recallDescription = document.createElement('p')

        recallingFirm.innerHTML = `<a href="recalling_firm.html?recalling_firm=${company}">${company}</a>`

        recallList.appendChild(recallCard)
        recallCard.append(recallingFirm, recallDescription)
    })
}