import React, { useState , useEffect} from 'react'
import Header from "../components/Header";
import Loading from "../components/Loading";
import ArrowR from '../assets/img/arrowRight.png'
import axios from 'axios'
import { ICountry } from '../interfaces/country'

function Country() {
  const [country, setCountry] = useState<string>("")
  const [countryList, setCountryList] = useState<ICountry[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const getCountryList = (country: string) => {
    axios.get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        setCountryList(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setCountryList([])
        console.log(err)
      })
  }
  const searchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }


  useEffect(() => {
    setLoading(true)
    setCountryList([])
    const timer = setTimeout(() => {
      getCountryList(country)
    }, 500);
    return () => clearTimeout(timer);
  }, [country])
  
  return (
    <div className="country">
      <Header title="Country List" arrowL={true}/>
      <div className="country-search">
        <input className="country-input" onChange={searchCountry} value={country} placeholder="Search" />
        <img src={ArrowR} alt="arrow" className="country-arrow" />
      </div>
      <div className="country-list">
        {
          loading && (<Loading />)
        }
        {
          countryList.map((country, index) => {
            return (
              <p key={index}>{country.name.common}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default Country