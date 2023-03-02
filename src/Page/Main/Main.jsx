import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

import Wrapper from "../../Components/Wrapper/Wrapper";

import { getAllProduct } from "../../Redux/Actions/productAction";

import "../../App.css";
import "./main.css";

const Main = () => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const userId = useSelector((state) => state.user.userId);
  const navigate = useNavigate();

  const handleGetProducts = async () => {
    const response = await getAllProduct();
    if (response) {
      setProducts(response);
    }
  };
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 5;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  let currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / 5);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const renderProductItem = (item, i) => {
    return (
      <tr key={i}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td className="products__img">
          <img src={item.img1} />
        </td>
        <td>{item.category}</td>
        <td className="d-flex flex-column">
          <button className="btn btn-success">Update</button>
          <button className="btn btn-danger mt-1">Delete</button>
        </td>
      </tr>
    );
  };

  const renderProductList = (list) => {
    if (list.length > 0) {
      return list.map((item, i) => renderProductItem(item, i));
    } else {
      return (
        <tr>
          <td colSpan={5}>Loading ...</td>
        </tr>
      );
    }
  };

  useEffect(() => {
    if (userId === "") {
      navigate("/login");
    } else {
      handleGetProducts();
    }
  }, []);

  useEffect(() => {
    const searchProduct = () => {
      const foundItem = products.filter((item) =>
        item.name.toLowerCase().includes(searchInput)
      );
      currentItems = foundItem;
      console.log("%:", 11 % 5);
    };
    searchProduct();
  }, [searchInput]);

  return (
    <Wrapper>
      <section className="products__container">
        <section className="products__wrapper p-2 posion-realtive">
          <h4>Products</h4>
          <input
            className="products__search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by name"
          />
          <div className="products__table ">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Category</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>{renderProductList(currentItems)}</tbody>
            </table>
          </div>
          <ReactPaginate
            className="products__pagination d-flex p-0 m-0 justify-content-center"
            pageClassName="btn btn-secondary mx-1"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </section>
      </section>
    </Wrapper>
  );
};

export default Main;
