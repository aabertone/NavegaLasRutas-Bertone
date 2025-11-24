import React from 'react'
import Articulos from '../Articulos/Articulos'
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className="producard">
        {productos.map(articulo => <Articulos key={articulo.id} {...articulo} />)}
    </div>
  )
}

export default ItemList