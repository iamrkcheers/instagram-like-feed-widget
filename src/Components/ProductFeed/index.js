import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import SearchFilter from "../SearchFilter";
import "./styles.css";

const ProductFeed = ({ productUrl, fields, isDarkMode }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const containerRef = useRef(null);

  // Fetch products from the given URL
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(productUrl);
      const fetchedProducts = response.data;
      setProducts(fetchedProducts);
      setCategories(
        fetchedProducts.reduce((final, current) => {
          if (!final.includes(current.category)) final.push(current.category);
          return final;
        }, [])
      );
      setDisplayedProducts(fetchedProducts.slice(0, 4));
      setHasMore(fetchedProducts.length > 4);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [productUrl]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Load more products when scrolling
  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;
    const startIndex = page * 4;
    const newProducts = products.slice(startIndex, startIndex + 4);

    if (newProducts.length > 0) {
      setDisplayedProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage(nextPage);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  }, [loading, hasMore, products, page]);

  // Handle scroll event within the product feed container
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          loadMoreProducts();
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadMoreProducts]);

  // Filter products based on search term and selected category
  const filteredProducts = displayedProducts.filter((product) => {
    const matchesSearchTerm = product?.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || product?.category === filter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="product-feed" ref={containerRef}>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        categories={categories}
        isDarkMode={isDarkMode}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product?.id}
            product={product}
            fields={fields}
            loading={loading}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ProductFeed;
