/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import Field from 'src/components/Field';
// import TextArea from 'src/components/TextArea';
// import ModifyCity from 'src/containers/ModifyCity';
// import Loading from 'src/components/Loading';

// import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';

// == Import style
import './modifyMyHobbies.scss';

const ModifyMyHobbies = ({ myHobbies, hobbiesList }) => {

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

  console.log(myHobbies);
  console.log(hobbiesList);

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
      {/* <div className="modifyMyHobbies__title"> Mes centres d'intérêts </div>                    
      <div className="modifyMyHobbies__hobbiesList">
        {hobbies.map((hobby) => (
          <div className={`modifyProfile__form__hobbiesList_item hobbies-${hobby.id}`}>
            {hobby.name}
          </div>
        ))}
      </div>
      <div className="modifyProfile__form__label__name"> Ajouter un centre d'interêt </div>
      <div>
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
 
// };

export default ModifyMyHobbies;
