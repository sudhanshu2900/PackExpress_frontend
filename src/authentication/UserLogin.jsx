import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  email: yup.string().trim().required("Email ID is required"),
  password: yup.string().required("Password is required"),
});

function UserLogin() {
  useEffect(() => {
    document.title = "User Login";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:9001/api/v1/auth/authenticate`,
        data
      );

      var credentials = res?.config?.data; //Username and Password

      var custId = res?.data?.id; //Customer ID
      var custName = res?.data?.firstname; //Customer Name
      var role = res?.data?.role; //Role
      var validToken = res?.data?.token; //Token

      sessionStorage.setItem("Token", validToken);
      sessionStorage.setItem("Role", role);
      sessionStorage.setItem("Customer ID", custId);
      sessionStorage.setItem("Customer Name", custName);

      if (role === "USER") {
        navigate("/user/customer");
      } else {
        toast.error("This is an user login window ❌");
      }
    } catch (error) {
      toast.error("Credentials are wrong ❌");
    }
  };

  return (
    <>
      <ToastContainer />

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="loginForm" style={{ width: "40%" }}>
          <h2>User Login 🔐</h2>

          <form onSubmit={handleSubmit(login)}>
            <div class="form-group mt-3">
              <label for="email">Email ID</label>
              <input
                type="text"
                class="form-control"
                {...register("email")}
                placeholder="Enter Email ID"
              />
              <span>{errors?.email?.message}</span>
            </div>
            <div class="form-group mt-3">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                {...register("password")}
                placeholder="Enter password"
              />
              <span>{errors?.password?.message}</span>
            </div>

            <button type="submit" class="btn btn-primary my-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
