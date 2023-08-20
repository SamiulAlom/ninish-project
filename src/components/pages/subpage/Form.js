import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../../contextApi/MainContext";

export default function Form() {
  const mainContext = useContext(MainContext);
  const { user, modifyUser } = mainContext;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    cls: "",
    institute: "",
    phone: "",
    regNumber: "",
  });

  useEffect(() => {
    if (user != null) {
      setFormData({
        name: user?.name,
        cls: user?.cls,
        institute: user?.institute,
        phone: user?.phone,
        regNumber: user?.regNumber,
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyUser(
      formData.name,
      formData.cls,
      formData.institute,
      formData.phone,
      formData.regNumber
    );
    navigate("/category");
  };

  return (
    <div className="form flex justify-center bg-white pt-20 pr-20 pl-20">
      <form onSubmit={handleSubmit}>
        <div className="pb-10">
          <label htmlFor="">নামঃ</label>
          <input
            id="name"
            required
            placeholder="Enter your name"
            type="text"
            className="rounded text-[#000] mt-3 block w-[50vw] p-3 bg-purple-100"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">শ্রেণিঃ</label>
          <input
            id="cls"
            required
            placeholder="Enter your className"
            type="text"
            className="rounded text-[#000] mt-3 block w-[50vw] p-3 bg-purple-100"
            value={formData.cls}
            onChange={(e) => setFormData({ ...formData, cls: e.target.value })}
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">শিক্ষা প্রতিষ্ঠানঃ</label>
          <input
            id="institute"
            required
            placeholder="Enter your institute name"
            type="text"
            className="rounded text-[#000] mt-3 block w-[50vw] p-3 bg-purple-100"
            value={formData.institute}
            onChange={(e) =>
              setFormData({ ...formData, institute: e.target.value })
            }
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">ফোন নম্বরঃ</label>
          <input
            id="phone"
            required
            placeholder="Enter your phone number"
            type="text"
            className="rounded text-[#000] mt-3 block w-[50vw] p-3 bg-purple-100"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">
            প্রবেশ পত্রের রেজিষ্ট্রেশন নম্বর টি নিচের ঘরে লিখুন
          </label>
          <input
            id="regNumber"
            required
            placeholder="Enter your registration number"
            type="text"
            className="rounded text-[#000] mt-3 block w-[50vw] p-3 bg-purple-100"
            value={formData.regNumber}
            onChange={(e) =>
              setFormData({ ...formData, regNumber: e.target.value })
            }
          />
        </div>
        <div className="pb-10">
          <button
            type="submit"
            value="Submit"
            className="bg-[#3b1468] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full"
          >
            পরবর্তী
          </button>
        </div>
      </form>
    </div>
  );
}
