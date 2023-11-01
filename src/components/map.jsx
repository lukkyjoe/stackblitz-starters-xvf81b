import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 139.753, lat: 35.6844 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = process.env.MAPTILER_API_KEY;    
}