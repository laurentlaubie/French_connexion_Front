/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './modifyMyServices.scss';

const ModifyMyServices = ({ myServices, servicesList, saveSelectedService, selectedService, addSelectedService }) => {

  // let myServicesArray = [];
  // myServices.map((service) => {
  //   myServicesArray = [...myServicesArray, service.id];
  // });
  // console.log(myServicesArray);

  // const onChange = (evt) => {
  //   console.log(evt.currentTarget.value);
  //   const { value } = evt.currentTarget;
  //   const splitValue = value.split('-');
  //   const serviceId = parseInt(splitValue[0], 10);
  //   const serviceName = splitValue[1];
  //   console.log(serviceName);
  //   console.log(serviceId);
  //   saveSelectedService(serviceId, serviceName);
  // };

  // let myHobbiesList = [];
  // userInfos.hobbies.map((hobbies) => {
  //   myHobbiesList = [...myHobbiesList, hobbies.id];
  // });

  // let myServices = [];
  // userInfos.services.map((service) => {
  //   myServices = [...myServices, service.id];
  // });
  // console.log(myServices);

  // console.log(myHobbiesList);

  // const myHobbies = {};
  // hobbiesList.map((hobby) => {
  //   myHobbies[hobby.id] = false;
  //   if (myHobbiesList.includes(hobby.id)) {
  //     myHobbies[hobby.id] = true;
  //   }
  // });

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

  console.log(myServices);
  console.log(servicesList);

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

    <div className="modifyMyServices">
      <div className="modifyMyServices__title"> Mes centres d'intérêts </div>
      <div className="modifyMyServices__servicesList">
        {servicesList.map((service) => (
          <div className="modifyMyServices__servicesList_item">
            {service.name}
          </div>
        ))}
      </div>
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

export default ModifyMyServices;
