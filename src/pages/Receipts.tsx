import { useLoaderData } from "react-router";
import { Layout } from "../components/Layout";

type Receipt = {
  id: string;
  name: string;
  date: string;
  price: number;
};

function Receipt({ receipt }: { receipt: Receipt }) {
  const { name, date, price } = receipt;

  return (
    <li className="flex-1 min-w-0 flex items-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors p-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <span className="text-sm font-medium text-gray-900"> {price} </span>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          🚮
        </button>
      </div>
    </li>
  );
}

function ReceiptsList({ receipts }: { receipts: Receipt[] }) {
  return (
    <ul className="space-y-4 flex flex-col gap-4">
      {receipts.map((receipt) => (
        <Receipt key={receipt.id} receipt={receipt} />
      ))}
    </ul>
  );
}

export function Receipts() {
  const { receipts } = useLoaderData();

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
                {receipts.length} items
              </span>
            </div>

            <div className="space-y-4">
              {receipts.length === 0 && (
                <div id="empty" className="text-center py-8">
                  <p className="text-gray-500">
                    No receipts yet. <a href="/add">Add</a> your first one!
                  </p>
                </div>
              )}
              {receipts.length > 0 && <ReceiptsList receipts={receipts} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
