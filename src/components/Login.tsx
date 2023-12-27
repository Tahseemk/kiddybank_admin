import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withoutAuthAxios } from "../config/config";
import {
  setAccessToken,
  setIsAuthenticated,
  setuser,
} from "../Redux/Reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../Redux/rootReducer";
import { useAppDispatch } from "../Redux/store";

import IsLoadingHOC from "../Common/IsLoadingHOC";
import { trimObjValues } from "../Helper";

interface MyComponentProps {
  setLoading: (isComponentLoading: boolean) => void;
  isLoading: boolean;
}

const Login = (props: MyComponentProps) => {
  const { setLoading, isLoading } = props;
  const navigate = useNavigate();
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const payload = userInput
      setLoading(true)
      const response = await withoutAuthAxios().post("/admin/adminLogin", payload)
      const resData = response.data
      setLoading(false)
      if (resData.status === "true") {
        dispatch(setuser(resData.data));
        dispatch(setAccessToken(resData.data.jwtToken));
        toast.success('Logged in successfully');
        navigate('/');
      } else {
        toast.error(resData.message || 'An error occurred.');
      }
    } catch (error : any) {
      const errorMessage = error?.response.data.message || error.messaage
      setLoading(false)
      toast.error(errorMessage);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="nk-wrap nk-wrap-nosidebar">
      <div style={{ background: "#e7ecef" }} className="nk-content">
        <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-5 pt-5 text-center bg-white">
            <a className="logo-link">
              <img
                style={{ maxHeight: "70px" }}
                className="logo-dark logo-img logo-img-lg"
                src={require("../assets/logo/logo1.png")}
                alt="logo-dark"
              />
            </a>
          </div>
          <div className="card">
            <div className="card-inner card-inner-lg">
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <h4 className="nk-block-title text-center">Kiddy Bank</h4>
                  <div className="nk-block-des">
                    <p></p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Email
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      required
                      value={userInput.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <a
                      className={`form-icon form-icon-right passcode-switch lg ${
                        showPassword ? "is-hiden" : "is-shown"
                      } `}
                      onClick={() => setShowPassword(!showPassword)}
                      data-target="password"
                    >
                      {showPassword ? (
                        <em className="passcode-icon icon-show icon ni ni-eye"></em>
                      ) : (
                        <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                      )}
                    </a>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Password"
                      required
                      value={userInput.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group pt-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    {isLoading ? "KiddyBank..." : "Sign in"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsLoadingHOC(Login);
