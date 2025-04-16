import { Layout } from "../components/Layout";

export function Receipts() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-4 pt-8">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Recent Receipts
              </h2>
              <span id="amount-items" className="text-sm text-gray-500">
                0 items
              </span>
            </div>

            <div className="space-y-4">
              <div id="empty" className="text-center py-8">
                <p className="text-gray-500">
                  No receipts yet. <a href="/add">Add</a> your first one!
                </p>
              </div>
              <div id="list-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
