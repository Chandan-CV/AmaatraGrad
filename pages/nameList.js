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
            
            
            
            <h1 className='text-4xl mt-10'>Class wise (maybe a bit inaccurate): </h1>
            <h1 className='text-4xl mt-10'>Total count:{A.length+B.length+C.length+D.length}</h1>
            
            <h1 className='text-4xl mt-10'>A section</h1>
            {
                A.map((ele)=> <p key={ele}>{ele}</p>)
            }


            <h1 className='text-4xl mt-10'>B section</h1>
            {
                B.map((ele)=> <p key={ele} >{ele}</p>)
            }
            <h1 className='text-4xl mt-10'>C section</h1>
            {
                C.map((ele)=> <p key={ele}>{ele}</p>)
            }
            <h1 className='text-4xl mt-10'>D section</h1>
            {
                D.map((ele)=> <p key={ele}>{ele}</p>)
            }
        
        </div>
  )
}

export default nameList