import React, { useState } from 'react';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isOn) {
      setMessage('Nyalakan lampu terlebih dahulu!');
      return;
    }
    if (email && password) {
      setMessage('Login Berhasil!');
    } else {
      setMessage('Harap isi semua kolom.');
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-500 font-sans ${isOn ? 'bg-stone-900 text-amber-100' : 'bg-black text-stone-600'}`}>
      
      {/* AREA LAMPU MEJA */}
      <div className="flex flex-col items-center mb-6">
        {/* Kap Lampu */}
        <div className={`w-32 h-20 rounded-t-full transition-all duration-300 relative ${isOn ? 'bg-amber-300 shadow-[0_0_60px_#fde047]' : 'bg-stone-800'}`}>
          {/* Bohlam */}
          <div className={`w-12 h-4 -bottom-3 left-10 absolute rounded-b-full ${isOn ? 'bg-white shadow-[0_0_20px_#fff]' : 'bg-stone-900'}`} />
        </div>

        {/* Tiang & Alas Lampu */}
        <div className="w-2 h-20 bg-stone-700" />
        <div className="w-20 h-3 bg-stone-800 rounded-t-md" />

        {/* Tombol Saklar Lampu */}
        <button
          onClick={() => setIsOn(!isOn)}
          className={`mt-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
            isOn 
              ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-[0_0_15px_#fde047]' 
              : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-stone-200'
          }`}
        >
          {isOn ? '💡 Lampu Menyala (Matikan)' : '🔌 Klik Saklar Lampu'}
        </button>
      </div>

      {/* CARD FORMULIR LOGIN */}
      <div className={`w-80 p-6 rounded-2xl border transition-all duration-500 ${isOn ? 'bg-stone-800/80 border-amber-500/30 shadow-2xl opacity-100' : 'bg-stone-950/40 border-stone-900 opacity-20 pointer-events-none'}`}>
        <h2 className="text-xl font-bold text-center mb-1 text-amber-200">Masuk Akun</h2>
        <p className="text-[11px] text-center text-stone-400 mb-5">
          {isOn ? 'Formulir siap digunakan' : 'Lampu mati, formulir terkunci'}
        </p>

        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block text-xs mb-1 text-stone-300">Email</label>
            <input
              type="email"
              disabled={!isOn}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full px-3 py-2 text-sm bg-stone-900 border border-stone-700 rounded-lg text-amber-50 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs mb-1 text-stone-300">Password</label>
            <input
              type="password"
              disabled={!isOn}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm bg-stone-900 border border-stone-700 rounded-lg text-amber-50 focus:outline-none focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            disabled={!isOn}
            className={`w-full py-2.5 mt-2 rounded-lg font-semibold text-xs transition-all ${
              isOn 
                ? 'bg-amber-400 text-stone-950 hover:bg-amber-300' 
                : 'bg-stone-800 text-stone-600'
            }`}
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center text-xs font-medium text-amber-300">
            {message}
          </p>
        )}
      </div>

    </div>
  );
}