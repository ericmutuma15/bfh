import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const [step, setStep] = useState("form");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    day: "",
    reason: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Appointment Booking");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDay: ${form.day}\nReason: ${form.reason}`
    );
    window.location.href = `mailto:healingbrookmgd@gmail.com?subject=${subject}&body=${body}`;
    setStep("confirm");
  };

  const handleConfirm = () => {
    setStep("success");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleNo = () => {
    setStep("form");
  };

  const handleExit = () => {
    setStep("error");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (step === "error") {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600 text-2xl font-bold mb-2">Appointment request not booked!</div>
        <div className="text-gray-700">You exited before sending your request. Please try again.</div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="p-8 text-center">
        <div className="text-green-600 text-2xl font-bold mb-2">Appointment request sent!</div>
        <div className="text-gray-700">Thank you for booking. We will contact you soon.</div>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div className="p-8 text-center">
        <div className="text-lg mb-4">Did you send the email in your mail app?</div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
            onClick={handleConfirm}
          >
            Yes, I sent it
          </button>
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 font-semibold"
            onClick={handleNo}
          >
            No, go back to form
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-semibold"
            onClick={handleExit}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Day</label>
          <input
            type="date"
            name="day"
            value={form.day}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointments;
