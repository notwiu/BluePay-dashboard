import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Alimentação", value: 45 },
  { name: "Transporte", value: 20 },
  { name: "Lazer", value: 15 },
  { name: "Outros", value: 20 },
];

const COLORS = ["#3B82F6", "#1E40AF", "#60A5FA", "#93C5FD"];

export default function SpendingChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold mb-4">CLASSIFICAÇÃO DE GASTOS (6 MESES)</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}