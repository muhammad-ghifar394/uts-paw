export default function SortirKartu({ nilai, onUbah }) {
  return (
    <select
      aria-label="Urutkan kartu"
      id ="kotak-sorting" 
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    >
      <option value="default">Urutan awal</option>
      <option value="az">Nama (A-Z)</option>
      <option value="za">Nama (Z-A)</option>
    </select>
  )
}