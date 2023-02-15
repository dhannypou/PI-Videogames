import React from 'react'

const SelectGenres = ({allGenres}) => {
  return (
    <>
        {
            allGenres?.map(genre => {
                return (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                )
            })
        }
    </>
  )
}

export default SelectGenres