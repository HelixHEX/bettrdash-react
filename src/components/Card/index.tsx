import React from 'react';
import '../../../styles.css';
import { CardProps } from '../../utils/types';

const Card = ({
  project,
  style = { imageBackgroundColor: 'white' },
}: CardProps) => {
  return (
    <>
      <div
        onClick={() => (window.location.href = `${project.live_url}`)}
        className="bettr-card"
      >
        <div
          style={{ backgroundColor: style.imageBackgroundColor }}
          className="bettr-card-image-container"
        >
          <img className="bettr-card-image" src={project.image_url} />
        </div>
        <div className="bettr-card-body">
          <div
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <div className="bettr-card-title">{project.name}</div>
            <div
              style={{
                backgroundColor: project.active ? '#3DC25A' : '#FF6A6A',
              }}
              className="bettr-card-status"
            >
              <p>{project.active ? 'Active' : 'Not Active'}</p>
            </div>
          </div>
          <div className="bettr-card-description">{project.description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
