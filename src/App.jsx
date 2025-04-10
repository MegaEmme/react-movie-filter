import { useEffect, useState } from 'react'

const movies = [
  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  const [movie, setMovie] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(movie);
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
    if (searchCategory !== '') {
      const updatedMovies = movie.filter(element => element.genre === searchCategory)
      setFilteredMovies(updatedMovies);
    } else {
      setFilteredMovies(movie);
    }
  }, [searchCategory])

  return (
    <>
      <h1>Movies Filter</h1>
      <hr />
      <section>
        <h2>Cerca Articoli</h2>
        <label>Cerca per genere</label>
        <div>
          <select value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
            <option value="">---</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
        </div>
      </section>
      <hr />
      <section>
        <h2>Lista Film</h2>
        {filteredMovies.map(element =>
          <article key={element.id}>
            <h3>Nome:{element.title}</h3>
            <h4>Genere:{element.genre}</h4>
          </article>
        )}
      </section>
      <hr />
    </>
  )
}

export default App;
