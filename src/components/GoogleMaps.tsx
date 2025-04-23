'use client'

import { useEffect, useRef } from "react"
import {Loader} from "@googlemaps/js-api-loader"
import { map } from "leaflet"

const GoogleMaps = () => {

    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.MAPS_API_KEY as string,
                version : "quaterly"
            })

            const { Map } = await loader.importLibrary('maps')

            const locationInMap = {
                lat:18.994618587560016, 
                lng:72.81157566857975
            }

            const {Marker} = await loader.importLibrary((
                'marker'
            )) as google.maps.MarkerLibrary

            const options: google.maps.MapOptions = {
                center: locationInMap,
                zoom: 15,
                mapId: 'RESTAURANT_LOCATION'
            }
            
            const map = new Map(mapRef.current as HTMLDivElement, options)

            const marker = new Marker({
                map: map,
                position: locationInMap
            })

        }

        initializeMap()
    }, [])


  return (
    <div className=" h-full w-full sm:rounded-xl " ref={mapRef}>
        GoogleMaps
    </div>
  )
}

export default GoogleMaps