import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuItem from '../components/KartuItem.jsx'
import SortirKartu from '../components/SortingKartu.jsx'
import FilterKategori from '../components/FilterKategori.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [filter, setFilter] = useState('Semua')
  const [urutan, setUrutan] = useState('default')

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarKategori = ['Semua', ...new Set(items.map((item) => item.kategori))]
  const tampil = items
  .filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (filter === 'Semua' || item.kategori === kategori),
  )
  .sort((a, b) => {
    if (urutan === 'az') {
      return a.judul.localeCompare(b.judul, 'id')
    }
    if (urutan === 'za') {
      return b.judul.localeCompare(a.judul, 'id')
    }
    return 0
  })

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <FilterKategori daftarKategori={daftarKategori} nilai={filter} onUbah={setFilter} />
        <SortirKartu nilai={urutan} onUbah={setUrutan} />
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}