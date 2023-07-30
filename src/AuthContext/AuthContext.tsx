import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function CustomNavbar() {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);

      const payload = JSON.parse(atob(token?.split('.')[1] || '') || '{}');
      const payloadEmail = payload?.email;
      if (payloadEmail) {
        setEmail(payloadEmail);
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    router.push('/');
  };

  const handleLogin = () => {
    router.push('/Login');
  };

  return (
    <nav style={{ backgroundColor: 'lightgray', position: 'fixed', top: 0, left: 0, right: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <div>
          <h3>Logo</h3>
        </div>
        <div>
          {loggedIn ? (
            <>
              <p>Bienvenido {email}</p>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>Iniciar Sesión</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
