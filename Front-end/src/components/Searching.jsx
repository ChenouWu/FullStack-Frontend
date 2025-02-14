import { useState } from "react"

function Searching() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState("")

  const handleSearch = () => {
    // In a real application, you would typically make an API call here
    // For now, we're just setting a dummy result
    setSearchResults([`Results for: ${searchQuery}`])
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter your search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
      {searchResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="list-disc pl-5">
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Searching

