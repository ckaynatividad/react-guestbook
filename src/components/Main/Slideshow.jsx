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
    <div className="fade">
      <p className="italic">click on slides for details</p>
      <Slides slides={slides} />
    </div>
  );
}
