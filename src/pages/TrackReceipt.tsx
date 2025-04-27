import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router";
import { useDelayedAction } from "../hooks/useDelayedAction";

function getToday() {
  const today = new Date();

  return today.toISOString().split("T")[0];
}

export default function TrackReceipt() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const fetcher = useFetcher<{ success?: boolean; error?: string }>();
  const isSubmitting = fetcher.state !== "idle";
  const isSuccess = fetcher.data?.success;
  const isError = fetcher.data?.error;
  const formRef = useRef<HTMLFormElement>(null);

  useDelayedAction({
    isEnabled: isSuccess,
    onComplete: () => setShowSuccessMessage(false),
    ms: 5000,
  });

  useEffect(() => {
    if (isSuccess) {
      formRef.current?.reset();
      setShowSuccessMessage(true);
    }
  }, [isSuccess]);

  return (
    <div className="flex items-center justify-center p-4 pt-8">
      <div className="w-full max-w-md">
        <section className="bg-white shadow-xl p-8">
          <h1 className="flex items-center justify-center mb-8 text-2xl font-bold text-gray-800 ml-3">
            New Receipt
          </h1>

          {isError && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
              Failed to add receipt, please try again.
            </div>
          )}

          {isSuccess && showSuccessMessage && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
              Receipt added successfully!
            </div>
          )}

          <fetcher.Form method="post" className="space-y-6" ref={formRef}>
            <div className="space-y-2">
              <label
                htmlFor="itemName"
                className="block text-sm font-medium text-gray-700"
              >
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                className="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Enter item name"
                required
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="block w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>

              <input
                type="date"
                id="date"
                className="block w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                required
                name="date"
                defaultValue={getToday()}
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Adding..." : "Add Receipt"}
            </button>
          </fetcher.Form>
        </section>
      </div>
    </div>
  );
}
