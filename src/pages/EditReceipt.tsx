import { useLoaderData, useNavigate } from "react-router";
import { Receipt } from "../services/types";
import ReceiptForm from "../components/ReceiptForm";
import { useState } from "react";

export default function EditReceipt() {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { receipt } = useLoaderData<{ receipt: Receipt }>();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center p-4 pt-8">
      <div className="w-full max-w-md">
        <section className="bg-white shadow-xl p-8">
          <h1 className="flex items-center justify-center mb-8 text-2xl font-bold text-gray-800 ml-3">
            Edit Receipt
          </h1>

          {showErrorMessage && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
              Failed to update receipt, please try again.
            </div>
          )}
          <ReceiptForm
            receipt={receipt}
            labels={{
              default: "Update Receipt",
              submit: "Updating...",
            }}
            onSuccess={() => {
              navigate("/");
            }}
            onError={() => {
              setShowErrorMessage(true);
            }}
          />
        </section>
      </div>
    </div>
  );
}
