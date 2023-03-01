import ItemList from "../components/ItemsList";
import { useParams } from 'react-router-dom';

function Category() {
    const { id } = useParams();
    let toReturn = '';
    if (id === "1") {
        toReturn = 'Mangas';
    } else {
        toReturn = 'Comics';
    }
  return (
    <div>
      <ItemList toReturn={toReturn}/>
    </div>
  );
}

export default Category;