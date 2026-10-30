import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, waktuMasak } = item
  return (
    <article className="kartu">
      <h3>
        <Link className="judul-kartu" to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · waktu masak {waktuMasak} menit
      </p>
    </article>
  )
}