import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow } from "react-google-maps"

export const InitialMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onMapClick}
    defaultOptions={{styles: myStyle}}
  >
    {props.markers.map((marker,i)=>(
        <Marker
            key={i}
            position={marker.position}
            onClick={()=> props.onMarkerClick(marker)}
        >
            {marker.showInfo && (
                <InfoWindow onCloseClick={()=> props.onMarkerClose(marker)}>
                  {
                    <div>info</div>
                  }
                </InfoWindow>
            )}
        </Marker>
    ))}
  </GoogleMap>
))

const myStyle = [
    {}
]
