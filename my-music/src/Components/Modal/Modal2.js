import React, { useState } from "react";
import "./Modal.css";

const albumUrls = [
  'https://open.spotify.com/embed/album/3C2MFZ2iHotUQOSBzdSvM7?utm_source=generator',
  'https://open.spotify.com/embed/album/1DNSmmRLfv97Yjq7MTFWng?utm_source=generator',
  'https://open.spotify.com/embed/album/0ky5kdvfPxSmSpj03hpSAE?utm_source=generator',
  'https://open.spotify.com/embed/album/4RzYS74QxvpqTDVwKbhuSg?utm_source=generator',
  'https://open.spotify.com/embed/album/1klALx0u4AavZNEvC4LrTL?utm_source=generator',
  'https://open.spotify.com/embed/album/0fjJOLqG3v7vXRYhz2wxPC?utm_source=generator',
  'https://open.spotify.com/embed/album/5iIWnMgvSM8uEBwXKsPcXM?utm_source=generator',
  'https://open.spotify.com/embed/album/3gPOWmWT0q7Ygp95Xiuw1v?utm_source=generator',
  'https://open.spotify.com/embed/album/02UhY4AQiAry5S2ZpgEKIt?utm_source=generator',
  'https://open.spotify.com/embed/album/5bHkK1X4WEOzNvRhehvOcb?utm_source=generator',
  'https://open.spotify.com/embed/album/2l3QxNo4QubBNmVKxLeum0?utm_source=generator',
  'https://open.spotify.com/embed/album/0bCAjiUamIFqKJsekOYuRw?utm_source=generator',
];

export default function Modal() {
  return (
    <>
      <div className="PopUp-Background">
      {albumUrls.map((url, index) => (
        <iframe
          title="songs"
          key={index}
          className="music-suggestions"
          style={{ borderRadius: '12px' }}
          src={url}
          width="450"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        ))}
      </div>
    </>
  );
}
