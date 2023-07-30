// pages/index.tsx

import Catalogo from "../products/product";
import { Hero2 } from "../Barra/Barra";
const IndexPage = () => {
  return (
    <div>
      <div><Hero2></Hero2></div>
      <Catalogo categoria="Productos" />
     
    </div>
  );
};

export default IndexPage;
