import { FiSearch, FiBell, FiUser, FiArrowUp, FiArrowDown } from "react-icons/fi";

export default function Dashboard() {
  const transactions = [
    { id: 1, name: "Farmácia", amount: -145, time: "14 min atrás" },
    { id: 2, name: "Transferência", amount: -1005, time: "20 horas atrás" },
    { id: 3, name: "Cinema", amount: -26.5, time: "12/06/2024" },
    { id: 4, name: "Supermercado", amount: -345, time: "12/06/2024" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">BluePay</h1>
        </div>
        <nav className="mt-8">
          {["Dashboard", "Minha Carteira", "Transações", "Estatísticas", "Configurações"].map((item) => (
            <a key={item} href="#" className="block py-3 px-6 text-gray-700 hover:bg-blue-50">
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-auto p-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium">Seja Premium</p>
            <p className="text-sm text-gray-600 mt-1">Funções ilimitadas e mais espaço</p>
            <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg text-sm">
              Assinar
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 flex justify-between items-center shadow">
          <div className="flex items-center gap-4">
            <span>20/06/2024</span>
            <span className="text-primary">PT-BR</span>
          </div>
          <div className="flex items-center gap-4">
            <FiSearch className="text-gray-500" />
            <FiBell className="text-gray-500" />
            <div className="flex items-center gap-2">
              <span className="font-medium">João Silva</span>
              <FiUser className="text-gray-500" />
            </div>
          </div>
        </header>

        <main className="p-6 space-y-6">
          {/* Saldo */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Saldo disponível</h2>
            <p className="text-3xl font-bold mt-2">R$ 25.657,00</p>
            <p className="text-gray-500 mt-1">US$ 4.882,92</p>
            <p className="text-sm text-gray-400 mt-4">Número da conta: 8236-81/2293-9A6A</p>
          </div>

          {/* Transações Recentes */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">HISTÓRICO DE TRANSAÇÕES</h2>
              <a href="#" className="text-primary text-sm">Ver tudo</a>
            </div>
            <div className="mt-4 space-y-4">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <p className="text-gray-500 text-sm">{tx.time}</p>
                  </div>
                  <p className={`font-bold ${tx.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    R$ {Math.abs(tx.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}