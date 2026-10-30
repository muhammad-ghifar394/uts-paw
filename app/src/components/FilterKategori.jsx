export default function FilterKategori({ daftarKategori, nilai, onUbah }) {
  return (
    <select
      aria-label="Kategori" 
      id="kotak-filter"  
      value={nilai} 
      onChange={(e) => onUbah(e.target.value)}>
      {daftarKategori.map((kategori) => (
        <option key={kategori} value={kategori}>{kategori}</option>
      ))}
    </select>
  )
}