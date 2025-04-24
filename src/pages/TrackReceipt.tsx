import { Layout } from "../components/Layout";

export function TrackReceipt() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-4 pt-8">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 ml-3">
                New Receipt
              </h1>
            </div>

            <form id="add-receipt-form" className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="itemName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Item Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="itemName"
                    className="block w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                    placeholder="Enter item name"
                    required
                    name="name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <div className="relative">
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
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    className="block w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out"
                    required
                    name="date"
                  />
                </div>
              </div>

              <button
                id="add-receipt-form-submit"
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-[1.02]"
              >
                Add Receipt
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
