/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import './modifyMyServices.scss';

const ModifyMyServices = ({ helper, myServices, servicesList, saveSelectedService, selectedService, addSelectedService }) => {

  // let myServicesArray = [];
  // console.log(`myServices = ${myServices}`);
  // if (myServices !== '') {
  //   myServices.map((service) => {
  //     myServicesArray = [...myServicesArray, service.id];
  //   });
  // }

  console.log(myServices);
  // console.log(myServicesArray);

  const onChange = (evt) => {
    console.log(evt.currentTarget.value);
    const { value } = evt.currentTarget;
    const splitValue = value.split('-');
    const serviceId = parseInt(splitValue[0], 10);
    const serviceName = splitValue[1];
    console.log(serviceName);
    console.log(serviceId);
    saveSelectedService(serviceId, serviceName);
  };

  const onClick = (evt) => {
    console.log(selectedService);
    addSelectedService(selectedService);
    // evt.currentTarget();
  };

  console.log(myServices);
  console.log(servicesList);

  return (

    <div className={helper ? 'modifyProfile__form__subsection' : 'hidden'}>
      <div className="modifyProfile__form__subsection__title"> Les services que vous proposez aux voyageurs </div>
      { myServices.length === 0 ? "vous n'avez pas de centres d'intérêt enregistrés" : ''}
        <ul className="modifyMyServices__list">
          {myServices.map((service) => (
            <li className="modifyMyServices__list__item">
              <div className={`modifyMyServices__list__item__text services-${service.id}`}> {service.name} </div>
              <button className="modifyMyServices__list__item__removeButton" type="button"> Retirer </button>
            </li>
          ))}
        </ul>
      <div className="modifyMyServices__select">
        <select onChange={onChange}>
          <option> Choisissez un service</option>
          {servicesList.map((service) => (
            <option value={`${service.id}-${service.name}`}> {service.name} </option>
          ))};
        </select>
        <button className="modifyMyServices__select__addButton" type="button" onClick={onClick}>Ajouter</button>
      </div>
    </div>
  );
};

// ModifyMyHobbies.propTypes = {
//   myHobbies: Pro
 
// };

export default ModifyMyServices;
