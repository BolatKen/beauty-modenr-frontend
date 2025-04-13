"use client";

import React, { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting checkout", form);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-8">
        {/* Left Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
            <label className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              Email me with news and offers
            </label>
          </div>

          {/* Delivery */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Delivery</h2>

            <select
              name="country"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
            >
              <option value="">Country/Region</option>
              <option value="Singapore">Singapore</option>
              <option value="USA">USA</option>
              <option value="Kazakhstan">Kazakhstan</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
                onChange={handleChange}
              />
            </div>

            <input
              name="company"
              placeholder="Company (optional)"
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
              onChange={handleChange}
            />
            <input
              name="address"
              placeholder="Address"
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
              onChange={handleChange}
            />
            <input
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
              onChange={handleChange}
            />
            <input
              name="postalCode"
              placeholder="Postal code"
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-3 rounded-md text-sm"
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
          >
            Continue to Payment
          </button>
        </form>

        {/* Right Column - Summary */}
        {/* Right Column - Summary */}
        <div className="bg-white rounded-lg border p-6 space-y-6 h-fit">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          {/* Products */}
          <div className="space-y-4 text-sm">
            {/* Item 1 */}
            <div className="flex justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-slate-100 relative">
                  <img
                    src="/images/image2.jpg"
                    alt="Nigist Girmachew"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <div>
                  <p className="font-medium">Nigist Girmachew</p>
                  <p className="text-gray-500 text-xs">
                    Filter / 200g — Whole Bean
                  </p>
                </div>
              </div>
              <span className="whitespace-nowrap">$24.00</span>
            </div>

            {/* Item 2 */}
            <div className="flex justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-slate-100 relative">
                  <img
                    src="/images/image1.jpg"
                    alt="Gatahithi AA"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <div>
                  <p className="font-medium">Gatahithi AA</p>
                  <p className="text-gray-500 text-xs">
                    Filter / 200g — Whole Bean
                  </p>
                </div>
              </div>
              <span className="whitespace-nowrap">$26.00</span>
            </div>
          </div>

          {/* Price summary */}
          <div className="pt-4 border-t space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-gray-500">Enter shipping address</span>
            </div>
            <div className="flex justify-between font-bold pt-2">
              <span>Total</span>
              <span>SGD $50.00</span>
            </div>
          </div>

          {/* Discount */}
          <div className="pt-6">
            <label className="block text-sm mb-1">Discount code</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md text-sm"
              />
              <button className="bg-gray-200 px-4 rounded-r-md text-sm hover:bg-gray-300">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
