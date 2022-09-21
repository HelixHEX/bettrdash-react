import React from 'react';
import '../../../styles.css';
import { CardProps } from '../../utils/types';

const ListCard = ({
  project,
  style = { imageBackgroundColor: 'gray' },
}: CardProps) => {
  return (
    <>
      <div
        onClick={() => (window.location.href = `${project.live_url}`)}
        className="bettr-list"
      >
        <div
          style={{
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{ backgroundColor: style.imageBackgroundColor }}
              className="bettr-list-image-container"
            >
              <img className="bettr-list-image" src={project.image_url} />
            </div>
            <p className="bettr-list-title">{project.name}</p>
          </div>
          <div
            style={{
              backgroundColor: project.active ? '#3DC25A' : '#FF6A6A',
            }}
            className="bettr-list-status"
          >
            <p>{project.active ? 'Active' : 'Not Active'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
