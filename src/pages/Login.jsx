export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-primary mb-2">BluePay</h1>
        <p className="text-gray-500 text-center mb-8">Controle financeiro simplificado</p>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Entrar
          </button>
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="text-primary text-sm">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}