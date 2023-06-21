const Search = () => {
  return (
    <>
        <div className='search'>
            <label>Search Team News:</label>
            <div>
                <input placeholder="Enter Team Here"/>
            </div>
            <button className="submit-btn btn btn-info" type="submit">Submit</button>
        </div>
    </>
  )
}

export default Search