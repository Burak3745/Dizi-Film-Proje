import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FetchVideo({ children }) {
    const [video, setVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      fetch(`/api-video/${id}`)
        .then((res) => res.json())
        .then((res) => setVideo(res));
    }, [id]);

    return video && children(video);
}