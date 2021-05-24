/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

// == Import style
import './modifyMyServices.scss';

const ModifyMyServices = ({
  helper,
  myServices,
  servicesList,
  saveSelectedService,
  selectedService,
  addSelectedService,
}) => {
  // console.log(myServices);
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

  const onClick = () => {
    console.log(selectedService);
    addSelectedService(selectedService);
  };

  console.log(myServices);
  console.log(servicesList);

  return (

    <div className={helper ? 'modifyProfile__form__subsection' : 'hidden'}>
      <div className="modifyProfile__form__subsection__title"> Les services que vous proposez aux voyageurs </div>
      { myServices.length === 0 ? "vous n'avez pas de centres d'intérêt enregistrés" : ''}
      <ul className="modifyMyServices__list">
        {myServices.map((service) => (
          <li key={`myServices-${service.name}`} className="modifyMyServices__list__item">
            <div className={`modifyMyServices__list__item__text services-${service.id}`}> {service.name} </div>
            <button className="modifyMyServices__list__item__removeButton" type="button"> Retirer </button>
          </li>
        ))}
      </ul>
      <div className="modifyMyServices__select">
        <select onChange={onChange}>
          <option> Choisissez un service</option>
          {servicesList.map((service) => (
            <option key={service.name} value={`${service.id}-${service.name}`}> {service.name} </option>
          ))};
        </select>
        <button className="modifyMyServices__select__addButton" type="button" onClick={onClick}>Ajouter</button>
      </div>
    </div>
  );
};

// ModifyMyServices.propTypes = {
//   helper: PropTypes.bool.isRequired,
//   myServices: PropTypes.array.isRequired,
//   servicesList: PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         id: PropTypes.number.isRequired,
//         name: PropTypes.number.isRequired,
//       },
//     ),
//   ).isRequired,
//   saveSelectedService: PropTypes.func.isRequired,
//   selectedService: PropTypes.object.isRequired,
//   addSelectedService: PropTypes.func.isRequired,
// };

export default ModifyMyServices;
