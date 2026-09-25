import { useState } from 'react'

export const App = () => {
  const [search, setSearch]=usestate("");
  const documents = [
    {
      name: "fsd",
      file: "FSD Workshop-1 (1).pdf"
    }
  ]

  return (
    <div>
      <h1>Notes Portal App</h1>
      <input type="text" placeholder="Search notes here" onClick={(e)=>{
      setSearch(e.target.value);
      }}/>
    </div>
  )
}