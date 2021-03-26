import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>
      setShow(results)
    );
  }, [id]);
  console.log(show);
  return <div>This is Show Page</div>;
};

export default Show;
