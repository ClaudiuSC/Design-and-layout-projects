async function getData() {
    const response = await fetch('https://jservice.io/api/categories?count=6')
    const data = await response.json()
    return data
}

getData().then(data => {
    const htmlData = data.map(x => `
            <div class="title" style="grid-row-start:1">${x.title}</div>
            ${generateRows(2, 200)}
            ${generateRows(3, 400)}
            ${generateRows(4, 600)}
            ${generateRows(5, 800)}
            ${generateRows(6, 1000)}
        `).join("")
    document.body.innerHTML =`<div class="game-board">${htmlData}</div>`
})

function generateRows(order, prize) {
    return `<div class="clues" style="grid-row-start:${order}">$${prize}</div>`      

}