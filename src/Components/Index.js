import React from 'react';
import '../App.css';
import aboutMeImage from '../img/me.jpg';

function Index() {
  return (
      <div className="body-content">
        <h2>Om mig - Johanna Attefalk</h2>

        <img src={aboutMeImage} className="aboutMeImage" alt="Foto of Johanna"/>

        <p>Jag heter Johanna Attefalk. Född och uppvuxen i en liten ord i Halland,
        precis söder om Göteborg som heter Kullavik. Jag har spelat tennis hela livet.
        Jag har jobbat med flera olika saker såsom bartender, tennistränare, på bensinmack,
        som Junior Matron på en internatskola i södra england. Jag är 99% utbildad
        fastighetsmäklare men valde att aldrig börja arbeta med det. Jag flyttade
        istället ner till Italien med mitt ex och sen flyttade fram och tillbaka under
         några år innan jag bestämde mig för  att bli kvar i Italien, där jag nu har bott
          i snart 5 år med min nya sambo. </p>

          <p>Båda mina föräldrar, samt två farbröder är
          utbildade programmerare. Jag var med på min första C++ föreläsning när
          jag var 5 år och sjuk från skolan. Jag tänkte när jag började studera
          progammering att de kunde hjälpa mig med mina studier. Förstod redan vecka
          ett att de inte kunde något längre av det vi studerade. De studerade html
          när man fortfarande skrev css koden innuti html taggen. Aja! Jag fick klara
          mig själv! Min pappa är dock otroligt glad av mitt val av studer! ;)</p>

        <p>Jag vet inte om jag har så många hobbies, jag och min sambo har tre små
        hundar och en katt så våra liv cirkulerar ganska mycket runt dem. Jag gillar
        att gå på promenader och göra yoga, samt att vara på stranden.
        I södra Italien så finns det sol så de räcker året om!</p>

      </div>
  );
}


export default Index;
