import { useState } from 'react'


const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  return (
    <>
      {console.log(movies)}
      <h1>Movie Filter</h1>
      <section>
        <h2>Cerca Articoli</h2>
        <label>Cerca per genere</label>
        <div>
          <select name="" id="">
            <option value="">---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
        </div>
      </section>

      <section>
        <h2>Lista Film</h2>
        {movies.map(element =>
          <article>
            <h3>Nome:{element.title}</h3>
            <h4>Genere:{element.genre}</h4>
          </article>
        )}
      </section>
    </>
  )
}

export default App;
