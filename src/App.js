import { useEffect, useState } from "react";
import { Checkbox } from "./components/forms/Checkbox";
import { InputText } from "./components/forms/InputText";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/ProductRow";
import { ErrorBoundary } from "react-error-boundary";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetable", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetable", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetable", price: "$1", stocked: true, name: "Peas" },
]

const App = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isSearch, setIsSearch] = useState("");

  return (
    <div className="container my-3">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <SearchBar value={isDisplay} setValue={setIsDisplay} isSearch={isSearch} setIsSearch={setIsSearch} />
      </ErrorBoundary>

      <ProductTable products={PRODUCTS} inStock={isDisplay} isSearch={isSearch} />
    </div>);
}

const SearchBar = ({ value, setValue, isSearch, setIsSearch }) => {

  // Ce petit code pour declencher une erreur qui va etrer gérer pas le ErrorBoundary
  // Enleve les commentaires pour afficher l'erreur
  /*useEffect(() => {
    repo.demo
  }, [])*/

  return (
    <div>
      <div className="mb-3">
        <InputText
          value={isSearch}
          setValue={setIsSearch}
          placeholder="Rechercher..."
        />
        <Checkbox
          id="Stocked"
          isChecked={value}
          setIsChecked={setValue}
          label="N'afficher que les produits en stock"
        />
      </div>
    </div>);
}

const ProductTable = ({ products, inStock, isSearch }) => {
  const rows = productTableRows(products, inStock, isSearch);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

const productTableRows = (products, inStock, isSearch) => {
  const rows = [];
  const categoryName = [];

  products?.map(product => {
    if (!categoryName.includes(product.category)) {
      rows.push(<ProductCategoryRow name={product.category} key={product.category} />)
      categoryName.push(product.category)
    }
    if (!inStock || product.stocked) {
      rows.push(<ProductRow product={product} key={product.name} />)
    }
  });





  return rows;
}

export default App;
