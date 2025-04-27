import { useFetcher } from "react-router";
import { Receipt } from "../services/types";
import { forwardRef, useEffect, useRef } from "react";

type ReceiptFormProps = {
  receipt?: Receipt;
  labels: {
    default: string;
    submit: string;
  };
  onSuccess?: () => void;
  onError?: () => void;
};

function getToday() {
  const today = new Date();

  return today.toISOString().split("T")[0];
}

const ReceiptForm = forwardRef<HTMLFormElement, ReceiptFormProps>(
  ({ receipt, labels, onSuccess, onError }, ref) => {
    const fetcher = useFetcher<{ success?: boolean; error?: string }>();
    const isSubmitting = fetcher.state !== "idle";
    const isSuccess = !!fetcher.data?.success;
    const isError = !!fetcher.data?.error;

    const hasCalledOnSuccess = useRef(false);
    const hasCalledOnError = useRef(false);

    useEffect(() => {
      if (
        isSubmitting &&
        (hasCalledOnSuccess.current || hasCalledOnError.current)
      ) {
        hasCalledOnSuccess.current = false;
        hasCalledOnError.current = false;
      }
    }, [isSubmitting]);

    useEffect(() => {
      if (isSuccess && !hasCalledOnSuccess.current) {
        onSuccess?.();
        hasCalledOnSuccess.current = true;
      }
    }, [isSuccess, onSuccess]);

    useEffect(() => {
      if (isError && !hasCalledOnError.current) {
        console.log("isError", isError);
        onError?.();
        hasCalledOnError.current = true;
      }
    }, [isError, onError]);

    return (
      <fetcher.Form method="put" className="space-y-6" ref={ref}>
        {receipt?.id && <input type="hidden" name="id" value={receipt.id} />}

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
            defaultValue={receipt?.name ?? ""}
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
            defaultValue={receipt?.price ?? ""}
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
            defaultValue={receipt?.date ?? getToday()}
          />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? labels.submit : labels.default}
        </button>
      </fetcher.Form>
    );
  },
);

export default ReceiptForm;
