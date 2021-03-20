import './search-box.styles.css'

export const SearchBox = ({ handleChange, placeholder }) => {
    return <input className="search" type="text" onChange={handleChange} placeholder={placeholder} />

}
