import { useRef, useState } from "react";

import { useDelayedAction } from "../hooks/useDelayedAction";
import ReceiptForm from "../components/ReceiptForm";

export default function TrackReceipt() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useDelayedAction({
    isEnabled: showSuccessMessage,
    onComplete: () => setShowSuccessMessage(false),
    ms: 5000,
  });

  return (
    <div className="flex items-center justify-center p-4 pt-8">
      <div className="w-full max-w-md">
        <section className="bg-white shadow-xl p-8">
          <h1 className="flex items-center justify-center mb-8 text-2xl font-bold text-gray-800 ml-3">
            New Receipt
          </h1>

          {showErrorMessage && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
              Failed to add receipt, please try again.
            </div>
          )}

          {showSuccessMessage && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
              Receipt added successfully!
            </div>
          )}

          <ReceiptForm
            ref={formRef}
            labels={{
              default: "Add Receipt",
              submit: "Adding...",
            }}
            onSuccess={() => {
              formRef.current?.reset();
              setShowSuccessMessage(true);
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
