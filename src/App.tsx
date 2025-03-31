import axios from "axios"
import { useEffect, useState } from "react"
import Countriess from "./Components/CountryCard"
import { Button } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";


type Country = {
  name: {
    common: string;
  },
  capital: string,
  region: string,
  subregion: string,
  cca3: string,
  flags: {
    png: string
  }
}

const App = () => {

  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch (error) {
        console.log('Error Fetching Countries', error);
      }
    };


    getCountries();
  }, []);

  const login = async () => {
    try {
      const response2 = await axios.post(
        'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login',
        {
          email: 'admin@gmail.com',
          password: 'Abc!123Abc',
        }
      )
      toast.success('Succsess')
      console.log(response2.data);

    } catch (error) {
      toast.error('error login!')

    }
  };

  return (
    <>

      <div className="flex flex-wrap gap-5 text-2">
        <Button onClick={login}>Login</Button>

        {countries.map((country, i) => (
          <><Countriess

            key={i}
            name={country.name}
            capital={country.capital?.[0] || "N/A"}
            region={country.region}
            subregion={country.subregion || "N/A"}
            cca3={country.cca3}
            flags={{ png: country.flags.png }} /></>
        ))}

      </div>
      <ToastContainer />
    </>
  )

};

export default App