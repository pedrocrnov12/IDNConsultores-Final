import React, { useState, useEffect } from 'react';
import { productos } from '../data/products';
import Link from 'next/link';
type Producto = {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  categoria: string;
  subcategoria?: string; // Propiedad subcategoria opcional
};

type CatalogoProps = {
  categoria: string;
};

const Catalogo: React.FC<CatalogoProps> = ({ categoria }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showSubCategories, setShowSubCategories] = useState<boolean>(false);
  const [subCategories, setSubCategories] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Lógica adicional para realizar una búsqueda en tiempo real después de un tiempo de inactividad
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    // Lógica para obtener y establecer las subcategorías según la categoría seleccionada
    if (selectedCategory === 'Computadoras') {
      setSubCategories(['Laptops', 'Tabletas', 'PCs de Escritorio', 'MacBooks', 'iPads', 'All In One', 'Mini PC']);
    } else if (selectedCategory === 'Electronica') {
      setSubCategories(['Televisiones', 'Proyectores', 'Cámaras', 'Smartwatch', 'Bocinas', 'Diademas', 'Audifonos', 'Micrófonos', 'Auriculares', 'Memorias USB', 'Disco Duros Externos']);
    } else if (selectedCategory === 'Hardware') {
      setSubCategories(['Impresoras', 'Multifuncionales', 'Escáners', 'Copiadoras', 'Toners', 'Cartuchos', 'Papelería']);
    } else if (selectedCategory === 'Accesorios') {
      setSubCategories(['Mochilas', 'Cargadores', 'Bases Enfriadoras', 'Limpieza']);
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  const filterProductos = (producto: Producto) => {
    return producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleProductHover = (index: number) => {
    setHoveredProduct(index);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Resetear la subcategoría cuando se selecciona una nueva categoría
    setShowSubCategories(category === 'Computadoras' || category === 'Electronica' || category === 'Hardware' || category === 'Accesorios');
  };

  const handleSubCategoryClick = (subCategory: string) => {
    setSelectedSubCategory(subCategory);
  };

  const categories = ['Electronica', 'Hardware', 'Computadoras', 'Accesorios'];

  const productosFiltrados = productos.filter((producto: Producto) => {
    const categoriaMatch = selectedCategory ? producto.categoria === selectedCategory : true;
    const subcategoriaMatch = selectedCategory && producto.subcategoria
      ? producto.subcategoria === selectedSubCategory
      : true;
    const searchTermMatch = filterProductos(producto);

    return categoriaMatch && subcategoriaMatch && searchTermMatch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg mb-4 mr-4 ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {showSubCategories && (
        <div className="flex flex-wrap justify-center mb-4">
          {subCategories.map((subCategory, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md mb-2 mr-2 ${
                selectedSubCategory === subCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleSubCategoryClick(subCategory)}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="bg-gray-200 rounded-md p-2 shadow-md backdrop-blur-sm">
          {selectedSubCategory || selectedCategory || categoria}
        </span>
      </h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar por nombre"
        className="px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {productosFiltrados.map((producto: Producto, index: number) => (
          <div
            key={index}
            className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center max-w-sm"
            onMouseEnter={() => handleProductHover(index)}
            onMouseLeave={handleProductLeave}
            style={{
              transform: `scale(${hoveredProduct === index ? 1.05 : 1})`,
            }}
          >
            <div className="relative w-full">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* Icono de carrito de compras */}
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 00-1 1v1.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 5.586V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm2 1a1 1 0 00-2 0v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 10-2 0v1h-1a1 1 0 00-2 0v-1a1 1 0 10-2 0v1H6a1 1 0 00-2 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="p-4 w-full flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2 truncate text-center">
                  {producto.nombre}
                </h3>
                <p className="text-lg font-bold mb-2">${producto.precio}</p>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2 text-center">
                  {producto.descripcion}
                </p>
              </div>
              <Link href={'/ContactProducts'}>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm">
                ¡Lo Quiero!
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
