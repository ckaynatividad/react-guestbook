import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../services/api';
import Slides from './Slides';

export default function Slideshow() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApi();
      setSlides(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Slides slides={slides} />
    </div>
  );
}
