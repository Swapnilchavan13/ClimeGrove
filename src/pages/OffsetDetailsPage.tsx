"use client";

import { useEffect, useState } from "react";

export default function OffsetDetailsPage() {
  const [pack, setPack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [packQuantity, setPackQuantity] = useState(1);

  const API_URL =
    "https://microoffsets.nettzero.world/api/getemitterpacks/6995ba174c7abd46be44c3c0";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPack(data.data);
        }
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-xl font-semibold text-black">
          Loading Emission Pack...
        </p>
      </div>
    );

  if (!pack)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-600">
          Pack not found
        </p>
      </div>
    );

  const totalEmission =
    pack.total_emission_kgco2e * packQuantity;

  const totalPrice =
    pack.total_pack_price * packQuantity;

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* Pack Info */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-10 shadow-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {pack.pack_name}
            </h1>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {pack.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-base font-medium text-gray-900">
              <div>Type: {pack.packType}</div>
              <div>Duration: {pack.duration}</div>
              <div>Buyer: {pack.intendedBuyer}</div>
              <div>Currency: {pack.currency}</div>
            </div>
          </div>

          {/* Emission Breakdown (Read Only) */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            <div className="bg-orange-600 px-6 py-4">
              <h2 className="text-white text-lg font-semibold">
                Emission Breakdown (Per Pack)
              </h2>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-900 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">Emitter</th>
                  <th className="px-6 py-4 text-center">Quantity</th>
                  <th className="px-6 py-4 text-right">
                    Emission (kg)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {pack.emitters.map((emitter) => (
                  <tr key={emitter.emitter_id}>
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {emitter.emitter_name_standard}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-800">
                      {emitter.quantity} {emitter.unit}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900">
                      {emitter.calculated_emission_kgco2e.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* RIGHT SUMMARY */}
        <div className="sticky top-24 h-fit">
          <div className="bg-gray-900 text-white rounded-2xl p-10 shadow-xl">

            <h3 className="text-2xl font-bold mb-8">
              Offset Summary
            </h3>

            {/* Pack Quantity Selector */}
            <div className="mb-8">
              <p className="text-lg mb-3 font-semibold">
                Number of Packs
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setPackQuantity(
                      Math.max(1, packQuantity - 1)
                    )
                  }
                  className="w-10 h-10 bg-white text-black rounded-lg font-bold text-lg"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {packQuantity}
                </span>

                <button
                  onClick={() =>
                    setPackQuantity(packQuantity + 1)
                  }
                  className="w-10 h-10 bg-white text-black rounded-lg font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between">
                <span>Total Emissions</span>
                <span className="font-bold text-green-400">
                  {totalEmission.toFixed(2)} kgCO₂e
                </span>
              </div>

              <div className="flex justify-between text-2xl font-bold border-t border-gray-700 pt-6">
                <span>Total Price</span>
                <span className="text-orange-400">
                  {pack.currency} {totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full mt-10 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition shadow-lg">
              Proceed to Offset
            </button>

            <p className="text-sm text-gray-400 mt-6 text-center">
              Secure & verified carbon offset purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
