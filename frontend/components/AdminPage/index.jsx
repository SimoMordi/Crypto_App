import './index.css';
import { useAuth } from '../../context/AuthContext';
import { useCrypto } from '../../context/CryptoContext';
import { Navigate } from 'react-router-dom';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { cryptocurrencies} = useCrypto();

  if (!isAuthenticated || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Cryptocurrencies</h2>
        {/* List of cryptocurrencies with options to delete */}
        {cryptocurrencies.map((crypto) => (
          <div key={crypto.id}>
            <h3>{crypto.name}</h3>
            {/* ... other cryptocurrency details */}
            <button onClick={() => handleDeleteCryptocurrency(crypto.id)}>Delete</button>
          </div>
        ))}
        {/* Form to add a new cryptocurrency */}
        {/* ... */}
      </section>
      {/* The Users section can be removed if you're not managing users */}
    </div>
  );
};

export default AdminPage;
