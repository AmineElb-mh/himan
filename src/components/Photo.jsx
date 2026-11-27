import { useState } from 'react';

/**
 * Fotovak met vaste aspect-ratio.
 * Toont een gelabelde plaatshouder tot er een echte foto staat in
 * public/assets/images/<src>. Zet je foto daar met dezelfde bestandsnaam en klaar.
 */
export default function Photo({ src, alt, label, ratio = '4 / 3', priority = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      {/* Plaatshouder: alleen zichtbaar zolang er geen foto geladen is */}
      {!loaded && (
        <span className="photo__label" aria-hidden="true">
          [{label}]
        </span>
      )}
      {!failed && src && (
        <img
          src={`/assets/images/${src}`}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          // Ook foto's die al uit de cache kwamen vóór React luisterde, als geladen markeren
          ref={(el) => {
            if (el?.complete && el.naturalWidth > 0 && !loaded) setLoaded(true);
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={loaded ? 'is-loaded' : ''}
        />
      )}
    </div>
  );
}
