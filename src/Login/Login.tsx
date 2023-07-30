import React, { useState } from 'react';
import { useRouter } from 'next/router';


const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('http://kaabstore.somee.com/WebAPI_Kaab_Haak/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      console.log('Logged in successfully');
      router.push('/InicioAdministracion');
    } else {
      console.log('Failed to log in');
    }
  };
  <div>
    
  </div>

  return (
    <section className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/fondologin2.jpg')` }}>
      <div className="bg-gray-200 rounded-lg p-10 shadow-xl w-full max-w-md">
        <h2 className="text-2xl text-center font-bold mb-8">Bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-700">Recuérdame</label>
          </div>
          <div className="flex items-center mb-6">
            <a href="#" className="text-sm text-gray-700 ml-2">Olvidé la contraseña</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition-colors duration-300">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginUser;
