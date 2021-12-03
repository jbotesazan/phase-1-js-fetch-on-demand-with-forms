// const searchById = document.querySelector('#searchByID')


//   const init = () => {
//     const inputForm = document.querySelector('form')

//     inputForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const input = document.querySelector('input#searchByID');

//         console.log(input.value);

//         fetch('http://localhost:3000/movies')
//         .then(resp => resp.json())
//         .then(data => console.log(data));

//     });
//   }

  const init = () => {
    const inputForm = document.querySelector('form');
    // const movieDetails = document.querySelector('#movieDetails')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      console.log(input.value);
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = summary.title;
        
      });
    });
  }
  
document.addEventListener('DOMContentLoaded', init);