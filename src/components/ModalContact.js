import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function ModalContact() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    mapRef.current = L.map('mapid').setView([-23.013104, -43.394365], 13);

    // Add tile layer
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN',
      {
        maxZoom: 18,
        attribution:
          'Zay Template | Template Design by <a href="https://templatemo.com/">Templatemo</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mapRef.current);

    // Add a marker
    L.marker([-23.013104, -43.394365])
      .addTo(mapRef.current)
      .bindPopup('<b>Zay</b> eCommerce Template<br />Location.')
      .openPopup();

    // Disable scroll and touch zoom
    mapRef.current.scrollWheelZoom.disable();
    mapRef.current.touchZoom.disable();

    // Cleanup function
    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      
      <div id="mapid" style={{ width: '100%', height: '300px' }}></div>
      

        {/* Start Contact */}
        <div className="container py-5">
        <div className="row py-5">
            <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">
                <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputname">Name</label>
                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                </div>
                <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputsubject">Subject</label>
                <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="mb-3">
                <label htmlFor="inputmessage">Message</label>
                <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows={8} defaultValue={""} />
            </div>
            <div className="row">
                <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                </div>
            </div>
            </form>
        </div>
        </div>
        {/* End Contact */}

    </>
  );
}