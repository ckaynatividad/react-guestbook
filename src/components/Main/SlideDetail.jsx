import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SlideDetail() {
  const [slide, setSlide] = useState({});
  const params = useParams();

  useEffect(() => {
    getCardbyId(params.index).then((data) => setCard(data));
  }, [params.index]);
  return (
    <div>
      <h2>{slide.alt}</h2>
    </div>
  );
}
