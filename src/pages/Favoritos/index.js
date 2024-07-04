import styles from "./Favoritos.module.css"
import Titulo from "components/Titulo"
import Card from "components/Card"
import videos from "data/db.json"
import Banner from "components/Banner";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
    const { favorito } = useFavoritosContext()
    return (
        <>
            <Banner img="favorite" color="##00BF633D" />
            <Titulo><h1>Favoritos</h1></Titulo>
            <section className={styles.container}>
                {favorito.map(fav => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}
export default Favoritos



{/* <Card id={1} capa="https://api.thecatapi.com/api/images/get?format=src&ype=png" titulo="gato" /> */ }