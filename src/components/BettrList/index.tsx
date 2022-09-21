import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import '../../../styles.css';
import { ProjectProps, Props } from '../../utils/types';
import List from '../List';

const BettrList = ({ apiKey, style }: Props) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const main = async () => {
      await axios
        .get(`${API_URL}?key=${apiKey}`)
        .then(res => {
          setLoading(false);
          if (res.data.projects) {
            setProjects(res.data.projects);
          } else if (res.data.message) {
            setError(res.data.message);
          } else {
            setError(res.data.message);
          }
        })
        .catch(err => {
          setLoading(false);
          if (err.response.data.message) {
            setError(err.response.data.message);
          } else {
            setError('An error has occurred');
          }
        });
    };
    main();
  }, []);

  return (
    <>
      {loading ? (
        <div className="bettr-loading">Loading...</div>
      ) : error ? (
        <div className="bettr-error">{error}</div>
      ) : (
        <div className="bettr-list-container">
          {projects.map((project: ProjectProps, index: number) => (
            <List style={style} project={project} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default BettrList;
