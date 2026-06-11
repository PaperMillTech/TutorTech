'use client'

import { MapContainer, TileLayer, Circle, Marker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Woodbridge, Suffolk
const WOODBRIDGE: [number, number] = [52.0935, 1.3196]
// 30 miles in metres
const RADIUS_METRES = 30 * 1609.34

const PLACES: { name: string; coords: [number, number] }[] = [
  { name: 'Woodbridge', coords: WOODBRIDGE },
  { name: 'Ipswich', coords: [52.0567, 1.1482] },
  { name: 'Colchester', coords: [51.8959, 0.8919] },
  { name: 'Felixstowe', coords: [51.9639, 1.3513] },
  { name: 'Aldeburgh', coords: [52.1527, 1.6035] },
  { name: 'Stowmarket', coords: [52.1888, 0.9978] },
]

function dotIcon(highlight: boolean) {
  if (typeof window === 'undefined') return undefined
  // Imported lazily so it only runs client-side.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const L = require('leaflet')
  const size = highlight ? 18 : 12
  const color = highlight ? '#4f7a5b' : '#2f3b33'
  return L.divIcon({
    className: '',
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

export default function CoverageMap() {
  return (
    <MapContainer
      center={WOODBRIDGE}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      aria-label="Map showing the tutoring coverage area within a 30 mile radius of Woodbridge, Suffolk"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Circle
        center={WOODBRIDGE}
        radius={RADIUS_METRES}
        pathOptions={{
          color: '#4f7a5b',
          weight: 2,
          fillColor: '#7da588',
          fillOpacity: 0.18,
        }}
      />
      {PLACES.map((place) => {
        const highlight = place.name === 'Woodbridge'
        return (
          <Marker
            key={place.name}
            position={place.coords}
            icon={dotIcon(highlight)}
          >
            <Tooltip
              direction="top"
              offset={[0, -8]}
              permanent={highlight}
              opacity={1}
            >
              {place.name}
            </Tooltip>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
