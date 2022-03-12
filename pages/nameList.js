import React from 'react'
import getSheetData from '../getSheetData'

function nameList() {
    const {A,B,C,D,rand} = getSheetData()
    return (
        <div className="p-5">
            <h1 className='text-4xl mt-10'>total count : {rand.length}</h1>
            {
                rand.map((ele)=> <p key={ele}>{ele}</p>)
            }
            
        </div>
  )
}

export default nameList