import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UpdateStatus() {
  useEffect(() => {
    document.title = "Update Product Details";
  }, []);

  const { register, handleSubmit, setValue } = useForm();

  const route = useLocation();
  const id = route.pathname.split("/").pop();

  const updateInfo = async (data) => {
    let obj = { ...data };
    console.log(obj);
    try {
      await axios.put(`http://localhost:9000/api/v1/product/update/${id}`, obj);
      toast.success("Product status updated successfully 🎉");
    } catch (e) {
      toast.error("Product status not updated due to some error ❌");
    }
  };

  const loadProduct = async () => {
    const result = await axios.get(
      `http://localhost:9000/api/v1/product/${id}`
    );
    setValue("productName", result?.data?.productName);
    setValue("productDescription", result?.data?.productDescription);
    setValue("productOrigin", result?.data?.productOrigin);
    setValue("productDestination", result?.data?.productDestination);
  };
  useEffect(() => {
    loadProduct();
  });

  return (
    <>
      <Header />
      <ToastContainer />

      <div className="container my-5">
        <h2 className="text-center">Update Product Status</h2>

        <div>
          <form
            onSubmit={handleSubmit(updateInfo)}
            style={{ width: "50%", margin: "auto" }}
          >
            <div className="form-row">
              <div className="form-group mt-5">
                <label for="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productName")}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="description">Product Description</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productDescription")}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="origin">Origin</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productOrigin")}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="destination">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productDestination")}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpdateStatus;
