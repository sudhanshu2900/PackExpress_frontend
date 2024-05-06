import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

const schema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().required("Email ID is required"),
  password: yup.string().required("Password is required"),
});

function AddUser() {
  useEffect(() => {
    document.title = "Add User";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitInfo = async (data) => {
    try {
      await axios.post(`http://localhost:9001/api/v1/auth/user-register`, data);
      reset();
      toast.success("User added successfully 🎉");
    } catch (error) {
      toast.error("User not added due to some error ❌");
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container my-5">
        <div className="employeeForm">
          <h2 className="text-center">Add User</h2>
          <form
            onSubmit={handleSubmit(submitInfo)}
            style={{ width: "50%", margin: "auto" }}
          >
            <div className="form-row">
              <div className="form-group mt-5">
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("firstname")}
                />
                <span>{errors?.firstname?.message}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mt-3">
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("lastname")}
                />
                <span>{errors?.lastname?.message}</span>
              </div>

              <div className="form-group mt-3">
                <label for="email">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("email")}
                />
                <span>{errors?.email?.message}</span>
              </div>
            </div>

            <div className="form-group mt-3">
              <label for="inputAddress">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password")}
              />
              <span>{errors?.password?.message}</span>
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddUser;
