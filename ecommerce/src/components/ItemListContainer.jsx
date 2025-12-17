import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Estado para manejar errores
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(filter)
            .then(elements => {
                setItems(elements.docs.map(element => ({ id: element.id, ...element.data() })));
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching items: ", err);
                setError("Failed to load items. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="container">
            {loading && <Loading />}
            {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
            {!loading && !error && <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;