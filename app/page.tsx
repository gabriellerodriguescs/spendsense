import Link from "next/link";

const mockTransactions = [
  { id: 1, merchant: "Whole Foods", amount: -87.43, category: "Groceries", date: "Apr 8" },
  { id: 2, merchant: "Netflix", amount: -15.99, category: "Entertainment", date: "Apr 7" },
  { id: 3, merchant: "Shell Gas Station", amount: -52.10, category: "Transport", date: "Apr 7" },
  { id: 4, merchant: "Salary Deposit", amount: 3200.00, category: "Income", date: "Apr 5" },
  { id: 5, merchant: "Amazon", amount: -134.99, category: "Shopping", date: "Apr 4" },
  { id: 6, merchant: "Starbucks", amount: -6.75, category: "Food & Drink", date: "Apr 3" },
  { id: 7, merchant: "Gym Membership", amount: -49.00, category: "Health", date: "Apr 1" },
  { id: 8, merchant: "Uber Eats", amount: -38.20, category: "Food & Drink", date: "Mar 31" },
];

const stats = [
  { label: "Total Balance", value: "$4,821.32", change: "+12%" },
  { label: "Monthly Spend", value: "$1,243.18", change: "-8%" },
  { label: "Anomalies", value: "2 flagged", change: "⚠️" },
  { label: "Forecast", value: "$1,180", change: "next month" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">S</div>
          <span className="font-semibold text-lg">SpendSense</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/" className="text-white font-medium">Dashboard</Link>
          <Link href="/" className="hover:text-white transition-colors">Transactions</Link>
          <Link href="/" className="hover:text-white transition-colors">Analytics</Link>
          <Link href="/" className="hover:text-white transition-colors">Ask AI</Link>
        </nav>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium">G</div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Good afternoon, Gabrielle</h1>
          <p className="text-gray-400 text-sm mt-1">Here&apos;s what&apos;s happening with your finances today.</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <p className="text-gray-400 text-xs mb-2">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Transactions */}
          <div className="md:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Recent Transactions</h2>
              <button className="text-xs text-blue-400 hover:text-blue-300">View all</button>
            </div>
            <div className="space-y-3">
              {mockTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs">
                      {tx.merchant[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tx.merchant}</p>
                      <p className="text-xs text-gray-500">{tx.category} · {tx.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${tx.amount > 0 ? "text-green-400" : "text-white"}`}>
                    {tx.amount > 0 ? "+" : ""}{tx.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat panel */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col">
            <h2 className="font-medium mb-1">Ask AI</h2>
            <p className="text-xs text-gray-400 mb-4">Ask anything about your finances in plain English.</p>
            <div className="flex-1 bg-gray-950 rounded-lg p-3 mb-3 text-sm text-gray-400 min-h-[120px]">
              <p className="text-blue-400 text-xs mb-2">SpendSense</p>
              <p>Try asking: &quot;How much did I spend on food last week?&quot; or &quot;Am I on track for my monthly budget?&quot;</p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask a question..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}