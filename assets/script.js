const key = '126d2bb719bd2d3f71661c8d719d7efd'
let userInputEl = document.querySelector('#user-input')
let locationEl = document.querySelector('#location')


userInputEl.addEventListener('submit', function(e){
    e.preventDefault()
    let location = locationEl.value
   fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid='+key+'&units=imperial',
    {
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
    }
    )
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
})



