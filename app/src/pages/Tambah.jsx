import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { nama: '', kategori: 'Makanan Utama', daerahAsal: "", waktuMasak: 0, tingkatKesulitan: 'mudah' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.nama.trim().length < 3) {
      setGalat('Nama masakan wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, nama: form.nama.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Resep</h1>

      <label htmlFor="nama">Nama Masakan</label>
      <input id="nama" name="nama" value={form.nama} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Makanan Utama</option>
        <option>Minuman</option>
        <option>Kudapan</option>
        <option>Sambal</option>
      </select>

      <label htmlFor="daerahAsal">Daerah Asal</label>
      <input id="daerahAsal" name="daerahAsal" value={form.daerahAsal} onChange={ubah} />

      <label htmlFor="waktuMasak">Waktu Memasak</label>
      <input id="waktuMasak" name="waktuMasak" type="number" value={form.waktuMasak} onChange={ubah} />

      <label htmlFor="tingkatKesulitan">Kesulitan</label>
      <select id="tingkatKesulitan" name="tingkatKesulitan" value={form.tingkatKesulitan} onChange={ubah}>
        <option value="rendah">Rendah</option>
        <option value="sedang">Sedang</option>
        <option value="tinggi">Tinggi</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}