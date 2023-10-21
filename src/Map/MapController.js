import {useEffect} from 'react'
import { useMap } from 'react-leaflet'

export default function MapController({latLon}) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(latLon, 15, {duration: 1.5})
  }, [latLon])

  return null;
}
