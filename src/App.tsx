import axios from "axios"
import { useEffect, useState } from "react"

import Countriess from "./Components/CountryCard"


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

  return (
    <div className="flex flex-wrap gap-5 text-2">
      {countries.map((country, i) => (
        <Countriess

          key={i}
          name={country.name}
          capital={country.capital?.[0] || "N/A"}
          region={country.region}
          subregion={country.subregion || "N/A"}
          cca3={country.cca3}
          flags={{ png: country.flags.png }}
        />
      ))}
    </div>


  )

}

export default App