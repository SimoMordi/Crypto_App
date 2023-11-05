import './index.css';
import { useAuth } from '../../context/AuthContext';
import { useCrypto } from '../../context/CryptoContext';

const AdminPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { cryptocurrencies, setCryptocurrencies } = useCrypto();

  // Function to add a new cryptocurrency (would be called when a form is submitted)
  const handleAddCryptocurrency = (newCrypto) => {
    // Assuming newCrypto is an object with the new cryptocurrency data
    setCryptocurrencies(prevCryptos => [...prevCryptos, newCrypto]);
  };

  // Function to delete a cryptocurrency
  const handleDeleteCryptocurrency = (cryptoId) => {
    setCryptocurrencies(prevCryptos => prevCryptos.filter(crypto => crypto.id !== cryptoId));
  };

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
