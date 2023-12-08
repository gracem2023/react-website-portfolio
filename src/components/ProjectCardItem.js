import React from 'react';

function ProjectCardItem(props) {
  return (
    <>
      <li className='project_cards__item'>
          <figure className='project_cards__item__pic-wrap'>
            <img
              className='project_cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='project_cards__item__info'>
            <h5 class='project_cards__item__title'>{props.title}</h5>
            <p class='project_cards__text'>{props.text}</p>
          </div>
      </li>
    </>
  );
}

export default ProjectCardItem;