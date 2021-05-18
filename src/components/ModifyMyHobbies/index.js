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

const ModifyMyHobbies = ({ myHobbies, hobbiesList, myHobbiesList, toggleCheckbox, selectedHobbies}) => {

  let myHobbiesArray = [];
  myHobbies.map((hobby) => {
    myHobbiesArray = [...myHobbiesArray, hobby.id];
  });
  console.log(myHobbiesArray);
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
      {hobbiesList.map((hobby) => (
        <Checkbox
          key={hobby.id}
          className="logIn__modal__form__field"
          type="checkbox"
          name={hobby.name}
          onChange={toggleCheckbox}
          value={hobby.id}
          defaultCheck={myHobbiesArray.includes(hobby.id) ? 'checked' : false}
        />
      ))};

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
