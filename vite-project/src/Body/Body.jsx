import React from 'react'
import Main from '../Main/Main'
import Trendings from '../Trendings/Trendings'

const Body = ({newsData}) => {
  return (
    <div className=' container grid grid-cols-[70%_30%] mt-8 space-x-4 '>
        <Main newsData={newsData}/>
        <Trendings newsData={newsData}/>
    </div>
  )
}

export default Body