import axios from "axios";
import { FeatureCollection } from "geojson";
import { useEffect, useState } from "react";

export type UserData = {
  FMID: number,
  MarketName: string,
  city: string,
  County: string,
  State: string,
  lat: 44.411,
  lng: -72.1403,
  Website: string,
}

// const  geoDataUrl = 'https://raw.githubusercontent.com/larsvers/map-store/master/us_mainland_geo.json';
// const userDataUrl ='https://raw.githubusercontent.com/larsvers/data-store/master/farmers_markets_us.json';


export const useGetGeoData = (geoDataUrl: string, userDataUrl: string) => {
  const [geoData, setGeoData] = useState<FeatureCollection>()
  const [userData, setUserData] = useState<UserData[]>([])
  useEffect(() => {
    axios.get(geoDataUrl).then((res) => {
      setGeoData(res.data)
    })
  }, [geoDataUrl])

  useEffect(() => {
    axios.get(userDataUrl).then((res) => {
      setUserData(res.data)
    })
  }, [userDataUrl])

  return [geoData, userData]
}