
import './App.css'

import React from 'react'
import Card from './component/Card'

function App() {
  return (
    <>
    <h1 className='text-center font-bold text-6xl'>Olx</h1>
    <div className='flex flex-wrap justify-center mt-5 gap-5'>
      <Card image="https://plus.unsplash.com/premium_photo-1723300630033-289702676be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card image="https://plus.unsplash.com/premium_photo-1723651610504-6cad8fae64da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"/>
      <Card image="https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"/>
      <Card image="https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"/>
      <Card image="https://images.unsplash.com/photo-1724963578391-dcf77410bb73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card image="https://images.unsplash.com/photo-1724525647096-116d4bacbd5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"/>

    </div>
    </>
  )
}




export default App
