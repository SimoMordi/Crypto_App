import  { useState } from 'react'

const CryptoCurrencyForm = () => {
    const [cryptoForm, setCryptoForm] = useState([])

  const [currencyForm, setCurrencyForm] = useState({
    name: '',
    symbol:'',
    price:'',
  });
  const handleDelete = (id) => {
    try{
      axios({
        method: "Delete",
        url:`server/coins/${id}`,
      }).then( () => {
        let response = data.filter((coin) => {
          return coin._id !== id
        }) 
        setData(response)
        }
      )
    } catch (err) {}

  }

 
  return (
    <div>CryptoCurrencyForm
        <form>
            <input  placeholder='currency name'></input>
            <input placeholder='currency Symbol'></input>
            <input placeholder='price'></input>
            
            <button>Add</button>
        </form>
    </div>
  )
}

export default CryptoCurrencyForm