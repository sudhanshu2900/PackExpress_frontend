import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UpdateStatus() {
  const { register, handleSubmit, setValue } = useForm();

  const route = useLocation();
  const id = route.pathname.split("/").pop();

  const updateInfo = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:9000/api/v1/product/updatestatus/${id}`,
        {
          id: id,
          ...data,
        }
      );
      toast.success("Product status updated successfully 🎉");
    } catch (e) {
      toast.error("Product status not updated due to some error ❌");
    }
  };

  const loadProduct = async () => {
    const result = await axios.get(
      `http://localhost:9000/api/v1/product/${id}`
    );
    setValue("productStatus", result?.data?.productStatus);
    setValue("productDelay", result?.data?.productDelay);
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
                <label for="firstname">Status</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productStatus")}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="lastname">Delay</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("productDelay")}
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
