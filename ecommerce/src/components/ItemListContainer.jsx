import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection,  getFirestore, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Para subir todos los Productos de mi json local al Firestore
    // useEffect(() => { 
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");
    //     arrayProductos.forEach(item => {
    //         addDoc(itemsCollection, item);
    //     });
    //     console.log("Se agregaron los Productos!");
    // }, []); 

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}        </div>
    )
}

export default ItemListContainer;