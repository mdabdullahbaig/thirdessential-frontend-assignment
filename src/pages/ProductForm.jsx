import React from "react";
import CssClass from "./Login.module.css";

function ProductForm() {
  return (
    <div className={CssClass.loginDiv}>
      <form>
        <div>
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" placeholder="Enter product name" />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <br />
          <input type="text" id="number" placeholder="Enter product price" />
        </div>

        <div className={CssClass.imageFile}>
          <label htmlFor="image">Product Image</label>
          <br />
          <input type="file" id="image" />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
