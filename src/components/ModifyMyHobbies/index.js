/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'src/components/Checkbox';

// import Field from 'src/components/Field';
// import TextArea from 'src/components/TextArea';
// import ModifyCity from 'src/containers/ModifyCity';
// import Loading from 'src/components/Loading';

// import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';

// == Import style
import './modifyMyHobbies.scss';

const ModifyMyHobbies = ({ myHobbies, hobbiesList, saveSelectedHobby, selectedHobby, addSelectedHobby}) => {

  let myHobbiesArray = [];
  myHobbies.map((hobby) => {
    myHobbiesArray = [...myHobbiesArray, hobby.id];
  });
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

  // console.log(myServices);  // console.log(myHobbies);

  // const handleSelect = (evt) => {
  //   console.log(evt.target.value);
  //   console.log(evt.target.name);
  // };

  // const myHobbies = {};
  // hobbiesList.map((hobby) => {
  //   myHobbies[hobby.id] = false;
  //   if (myHobbiesList.includes(hobby.id)) {
  //     myHobbies[hobby.id] = true;
  //   }
  // });

  // useEffect()
  // console.log(myHobbies);

  // saveMyHobbiesInState(myHobbies);
  // useEffect(() => {
  //   loadHobbiesList(),
  //   // loadServicesList(),
  //   // isLoading(false);
  // }, []);

  {/* <div className="modifyProfile__form__hobbiesList">
                  {hobbiesList.map((hobby) => (
                    <label htmlFor={hobby.id}>
                      {hobby.name}
                      <input type="checkbox" id={hobby.id} name={`hobby-${hobby.id}`} value={hobby.name} defaultChecked={myHobbiesList.includes(hobby.id)} />
                    </label>
                  ))}
                </div> */}
  // console.log(userInfos);

  // let myHobbiesList = [];
  // hobbies.map((hobby) => {
  //   myHobbiesList = [...myHobbiesList, hobbies.id];
  // });

  // console.log(myHobbiesList);

  // const myHobbies = {};
  // hobbiesList.map((hobby) => {
  //   myHobbies[hobby.id] = false;
  //   if (myHobbiesList.includes(hobby.id)) {
  //     myHobbies[hobby.id] = true;
  //   }
  // });

  // console.log(myHobbies);
  // console.log(hobbiesList);

  // saveMyHobbiesInState(myHobbies);

  // console.log(myHobbies);
  // console.log(hobbies);
  // useEffect(() => {
  // }, []);

  // let myServices = [];
  // userInfos.services.map((service) => {
  //   myServices = [...myServices, service.id];
  // });
  // console.log(myServices);

  return (

    <div className="modifyMyHobbies">
      <div className="modifyMyHobbies__title"> Mes centres d'intérêts </div>
      <ul className="modifyMyHobbies__list">
        {myHobbies.map((hobby) => (
          <li className="modifyMyHobbies__list__item">
            <div className={`modifyMyHobbies__list__item__text hobbies-${hobby.id}`}> {hobby.name} </div>
            <button className="modifyMyHobbies__list__item__removeButton" type="button"> X </button>
          </li>
        ))}
      </ul>
      {/* <div className="modifyMyHobbies__subtitle"> Ajouter un centre d'intérêt </div> */}
      {/* <form className="modifyMyHobbies__form" onSubmit={handleSubmit}> */}
      <div className="modifyMyHobbies__form">

        <select onChange={onChange}>
          <option> Choisissez un centre d'interêt</option> 
          {hobbiesList.map((hobby) => (
            <option value={`${hobby.id}-${hobby.name}`}> {hobby.name} </option>
          ))};
        </select>
        <button type="button" onClick={onClick}>Ajouter</button>
      </div>
      {/* </form> */}

      {/* <select className="modifyMyHobbies__hobbiesList" onChange={handleSelect}>
        {hobbiesList.map((hobby) => (
          <option key={hobby.id} className="modifyMyHobbies__hobbiesList_item" value={`${hobby.id}-${hobby.name}`}>
            {hobby.name}
          </option>
        ))}
      </select> */}
      {/* <div className="modifyProfile__form__label__name"> Ajouter un centre d'interêt </div> */}
      {/* <div>
        {hobbies.map((hobby) => (
            <div className={`modifyProfile__form__hobbiesList_item hobbies-${hobby.id}`}>
              {hobby.name}
            </div>
        ))}
      </div> */}
    </div>
  );
};

// ModifyMyHobbies.propTypes = {
//   myHobbies: Pro
 
// };

export default ModifyMyHobbies;
