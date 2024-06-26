(async function(){

    setTimeout(() => {
        document.getElementById('loading').remove();
    }, 1000)

    document.querySelector('#back').addEventListener('click', () => {
        window.close();
    })
    
    let movieID = localStorage.getItem('movieDetails');
    
    const url = ' https://www.omdbapi.com/?apikey=169eb3c5';
    let res = await fetch(url+`&i=${movieID}`, {method: 'GET'});
    let data = await res.json();
    console.log(data);
    document.querySelector('#title h1').innerHTML = data.Title;

    let infos = ['Actors', 'Director', 'Genre', 'Plot', 'Released', 'Runtime', 'Year', 'imdbRating', 'imdbVotes'];

    let ul = document.querySelector('#details ul');

    let poster = document.getElementById('poster');
    poster.src = data.Poster;

    infos.forEach(elem => {
        let li = document.createElement('li');
        li.classList.add(elem);
        li.innerHTML = elem + " : " + data[elem];
        ul.appendChild(li);
    })
    console.log(ul)

})();

