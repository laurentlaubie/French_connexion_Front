/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

// == Import style
import './modifyMyHobbies.scss';

const ModifyMyHobbies = ({
  myHobbies,
  hobbiesList,
  saveSelectedHobby,
  selectedHobby,
  addSelectedHobby,
}) => {
  console.log(myHobbies);

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

  const onClick = () => {
    console.log(selectedHobby);
    addSelectedHobby(selectedHobby);
  };

  return (
    <div className="modifyProfile__form__subsection">
      <div className="modifyProfile__form__subsection__title"> Mes centres d'intérêts </div>
      <div className="modifyMyHobbies__emptySection">
        { myHobbies.length === 0 ? "Vous n'avez pas de centres d'intérêt enregistrés." : ''}
      </div>
      { myHobbies.length !== 0 && (
        <ul className="modifyMyHobbies__list">
          {myHobbies.map((hobby) => (
            <li key={`myHobbies-${hobby.name}`} className="modifyMyHobbies__list__item">
              <div className={`modifyMyHobbies__list__item__text hobbies-${hobby.id}`}> {hobby.name} </div>
              <button className="modifyMyHobbies__list__item__removeButton" type="button"> Retirer </button>
            </li>
          ))}
        </ul>
      )}
      <div className="modifyMyHobbies__select">
        <select onChange={onChange}>
          <option className="modifyMyHobbies__option"> Choisissez un centre d'interêt</option>
          {hobbiesList.map((hobby) => (
            <option key={hobby.name} value={`${hobby.id}-${hobby.name}`}> {hobby.name} </option>
          ))};
        </select>
        <button className="modifyMyHobbies__select__addButton" type="button" onClick={onClick}>Ajouter</button>
      </div>
    </div>
  );
};

ModifyMyHobbies.propTypes = {
  myHobbies: PropTypes.array.isRequired,
  hobbiesList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
  saveSelectedHobby: PropTypes.func.isRequired,
  selectedHobby: PropTypes.object.isRequired,
  addSelectedHobby: PropTypes.func.isRequired,
};

// ModifyMyHobbies.defaultProps = {
//   myHobbies: '',
// };

export default ModifyMyHobbies;
