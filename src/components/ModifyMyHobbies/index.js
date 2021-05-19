/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './modifyMyHobbies.scss';

const ModifyMyHobbies = ({ myHobbies, hobbiesList, saveSelectedHobby, selectedHobby, addSelectedHobby}) => {

  let myHobbiesArray = [];
  if (myHobbies !== '') {
    myHobbies.map((hobby) => {
      myHobbiesArray = [...myHobbiesArray, hobby.id];
  });
  }

  console.log(myHobbies);
  console.log(myHobbiesArray);

  const onChange = (evt) => {
    console.log(evt.currentTarget.value);
    const { value } = evt.currentTarget;
    const splitValue = value.split('-');
    const hobbyId = parseInt(splitValue[0], 10);
    const hobbyName = splitValue[1];
    console.log(hobbyName);
    console.log(hobbyId);
    saveSelectedHobby(hobbyId, hobbyName);
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   addSelectedHobby(selectedHobby);
  //   // console.log(evt.currentTarget.);
  // };

  const onClick = (evt) => {
    addSelectedHobby(selectedHobby);
    // evt.currentTarget();
  };

  return (

    <div className="modifyMyHobbies">
      <div className="modifyMyHobbies__title"> Mes centres d'intérêts </div>
      { myHobbies === '' ? "vous n'avez pas de centres d'intérêt enregistrés" : ''}
      { myHobbies !== '' && (
        <ul className="modifyMyHobbies__list">
          {myHobbies.map((hobby) => (
            <li className="modifyMyHobbies__list__item">
              <div className={`modifyMyHobbies__list__item__text hobbies-${hobby.id}`}> {hobby.name} </div>
              <button className="modifyMyHobbies__list__item__removeButton" type="button"> X </button>
            </li>
          ))}
        </ul>
      )}
      <div className="modifyMyHobbies__form">
        <select onChange={onChange}>
          <option> Choisissez un centre d'interêt</option> 
          {hobbiesList.map((hobby) => (
            <option value={`${hobby.id}-${hobby.name}`}> {hobby.name} </option>
          ))};
        </select>
        <button type="button" onClick={onClick}>Ajouter</button>
      </div>
    </div>
  );
};

// ModifyMyHobbies.propTypes = {
//   myHobbies: Pro
// };

export default ModifyMyHobbies;
