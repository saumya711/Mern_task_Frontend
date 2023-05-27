import React from "react";

const ProductForm = ({
  createProduct,
  productName,
  category,
  handleInputChange,
  isEditing,
  updateProduct,
  formData
}) => {
  return (
    <form className="product-form" onSubmit={isEditing ? updateProduct : createProduct}>
      <input
        type="text"
        placeholder="Add a Product"
        name="productName"
        value={isEditing ? formData.productName : productName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Add a Category"
        name="category"
        value={isEditing ? formData.category : category}
        onChange={handleInputChange}
      />
      <button type="submit">{isEditing ? "Edit" : "Add"}</button>
    </form>
  );
};

export default ProductForm;
