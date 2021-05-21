import React from 'react';

import './legalsMentions.scss';


const LegalsMentions = () => (
  <div className="legalsmention">
    <div className="legalsmention__title" > Mentions Legales</div>
      <div className="legalsmention__title__subtitle" > Informations legales et conditions d'utilisation</div>
       <div className="legalsmention__texts">
        <div className="legalsmention__texts__bloc"> 
          <div className="legalsmention__texts__part">
            Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
            Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.anthedesign.fr sont :
          </div>
          <div className="legalsmention__texts__part">
            Éditeur du Site :
            SARL FrenchConnection Numéro de SIRET : 85321735600027
            Responsable éditorial : Hugo ESSIQUE
            12 Rue du Huit Mai 1945, 60350 ATTICHY
            Téléphone : 09 00 00 00 00
            Email : contact@FrenchConnection.fr
            Site Web : www.FrenchConnection.fr
          </div>
          <div className="legalsmention__texts__part">
            Hébergement :

            Hébergeur : SARL FrenchConnection
            12 Rue du Huit Mai 1945, 60350 ATTICHY
            Site Web : www.FrenchConnection.fr

            Développement :

            SARL FrenchConnection

            Adresse : 12 Rue du Huit Mai 1945, 60350 ATTICHY

            Site Web : www.FrenchConnection.fr
            </div>
            <div className="legalsmention__texts__part">
            <div className="legalsmention__texts__title">Conditions d’utilisation :</div>
            <a>Ce site (www.anthedesign.fr) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.
            Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…
            L’agence web AntheDesign met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.
            Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de AntheDesign , et signaler toutes modifications du site qu’il jugerait utile. AntheDesign n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
            </a>
            </div>
        </div>
      </div>
  </div>

);

export default LegalsMentions;
