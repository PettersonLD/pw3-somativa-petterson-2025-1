import Button from './Button'

import style from "./BookCard.module.css"

const BookSLA = ({titulo, autor, imagem}) => {
    return(
    <div className= {style.bookCard}>
        <h3 className= {style.titulo}> {titulo} </h3>
        <p className= {style.autor}> {autor} </p>
        <img src={imagem} alt= '' />
        <Button label='DETALHE'/>
    </div>
    )
}

export default BookHelloKitty