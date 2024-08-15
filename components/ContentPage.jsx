
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ContentPage() {

    const [query, setQuery] = useState('')
    // const [isDark] = useOutletContext()

    const [isDark] = useTheme()

  //  const windowSize = useWindowSize()

  return (
    <main className={`${isDark? 'dark': ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setQuery={setQuery}/>
        </div>
        <CountriesList query={query}/>
      </main>
  )
}
