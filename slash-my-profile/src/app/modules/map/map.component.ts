import { Component, OnInit } from '@angular/core';
declare let L: any;
import { LatLngBounds, LatLngExpression } from 'leaflet';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  OSM_LAYER = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    // version: '1.3.0',
    // request: 'getMap',
    // layers: 'OS',
    // format: 'image/png',
    // transparent: true,
    // nowrap: true,
  });

  map: L.Map;
  coordinates: LatLngExpression = [41.38879, 2.15899];
  zoomLevel = 6;
  isMapCentered = true;
  mapBounds: LatLngBounds;

  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = L.map('leaflet-map', { zoomControl: false }).setView(this.coordinates, this.zoomLevel);
    this.OSM_LAYER.addTo(this.map);

    this.mapBounds = this.map.getBounds();
    this.map.addEventListener('moveend', (e) => this.isMapCentered = this.map.getBounds().equals(this.mapBounds));

    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);
  }

  getLocationAPI() {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords: { latitude, longitude }} = position;
      
      const markerIcon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        // specify the path here
        iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
      });

      var marker = new L.marker([latitude, longitude], {icon: markerIcon}).addTo(this.map);
      this.map.setView([latitude, longitude], 13)
    
      marker.bindPopup("<b>Latitude</b> " + latitude + "<br><b>Longitude</b> " + longitude ).openPopup();
    })
  }

  getMyLocation() {
    this.getLocationAPI();
  }
}
