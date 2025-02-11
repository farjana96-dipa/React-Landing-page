import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.8103, // Dhaka, Bangladesh
  lng: 90.4125,
};

const GoogleMapComponent = () => {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.953779397541!2d90.38386897595744!3d23.749027588827825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ba3e33db19%3A0xa79bbd1c34ce5d38!2sGreen%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1739223553052!5m2!1sen!2sbd" width="600" height="400" ></iframe>
  );
};

export default GoogleMapComponent;