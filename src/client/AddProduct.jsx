import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

const schema = yup.object().shape({
  customerId: yup.number().required("Customer ID is required"),
  productName: yup.string().required("Name is required"),
  productDescription: yup.string().required("Description is required"),
  productOrigin: yup.string().required("Origin ID is required"),
  productDestination: yup.string().required("Destination is required"),
});

function AddProduct() {
  useEffect(() => {
    document.title = "Add Product";
  }, []);

  const customerId = sessionStorage.getItem("Customer ID");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { customerId },
  });

  const navigate = useNavigate();

  const submitInfo = async (data) => {
    setValue("customerId", customerId);
    try {
      await axios.post(`http://localhost:9000/api/v1/order/addorder`, data);
      reset();
      navigate(`/user/customer`);
      toast.success("Product added successfully 🎉");
    } catch (error) {
      toast.error("Product not added due to some error ❌");
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container my-5">
        <div className="employeeForm">
          <div className="text-center">
            <h2>Add Product</h2>
          </div>
          <form
            onSubmit={handleSubmit(submitInfo)}
            style={{ width: "50%", margin: "auto" }}
          >
            <div className="form-row" style={{ display: "none" }}>
              <div className="form-group mt-5">
                <label for="name">Customer ID</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("customerId")}
                />
                <span>{errors?.customerId?.message}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productName")}
                />
                <span>{errors?.productName?.message}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="lastname">Product Description</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productDescription")}
                />
                <span>{errors?.productDescription?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label for="origin">Origin Address</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productOrigin")}
                />
                <span>{errors?.productOrigin?.message}</span>
              </div>
            </div>

            <div className="form-group mt-3">
              <label for="destination">Destination Address</label>
              <input
                type="text"
                className="form-control"
                {...register("productDestination")}
              />
              <span>{errors?.productDestination?.message}</span>
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddProduct;
