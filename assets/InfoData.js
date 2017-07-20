import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  questiontext: {
    fontSize: 16,
  },

  answertext: {
    fontSize: 14,
    margin: 8,
  },
});

export const InfoData = [
  {
    title: <Text>FAQ</Text>,
    content: (
      <View>
        <Text style={styles.questiontext}>
          1. Can we bring food or drinks in the site?
        </Text>
        <Text style={styles.answertext}>
          Bringing your own consumption is not permitted on the Hydro-Québec
          Montréal ePrix site.
        </Text>
        <Text style={styles.questiontext}>2. Can we bring our own chair?</Text>
        <Text style={styles.answertext}>
          To allow everyone to equally enjoy their experience, we do not allow
          anyone to bring their own chair.
        </Text>
        <Text style={styles.questiontext}>
          3. Can we re-enter the site if we have exited it?
        </Text>
        <Text style={styles.answertext}>
          Yes. Your pass is valid for goings and comings
        </Text>
        <Text style={styles.questiontext}>4. Are stands seats reserved?</Text>
        <Text style={styles.answertext}>
          Yes. Every stand seat is reserved. Your seat number is written on your
          ticket.
        </Text>
        <Text style={styles.questiontext}>
          5. Can we watch the race from the eVillage and the activities zones?
        </Text>
        <Text style={styles.answertext}>
          Screens will be installed to allow everyone in the activities zones to
          follow the race. You can also directly see the circuit from three of
          the five activities zones.
        </Text>
        <Text style={styles.questiontext}>
          6. Is there a designated seating area for people with reduced
          mobility?
        </Text>
        <Text style={styles.answertext}>
          A section for people with reduced mobility is at the junction betweet
          De la Gauchetière and Berri since the closest metro exit (station
          Berri-UQAM) has an elevator.
        </Text>
        <Text style={styles.questiontext}>
          7. Can my child get in the ePrix site without a ticket?
        </Text>
        <Text style={styles.answertext}>
          Children aged 5 and over need to have a ticket. Children aged 4 and
          under accompanied by an adult do not need a ticket. For assigned
          seats, the child needs to sit on the accompanying adult.
        </Text>
        <Text style={styles.questiontext}>
          8. I am a resident, business owner or I work in the race’s area, where
          can I know how I will be affected by the ePrix?
        </Text>
        <Text style={styles.answertext}>
          All decisions regarding the residents, the circuit, the traffic and
          the streets are made by the Ville-Marie borough. They will keep you
          informed until the ePrix. You can also contact them by phone by
          dialling 311 or by e-mail at formule-e@ville.montreal.qc.ca
        </Text>
        <Text style={styles.questiontext}>
          9. Why are the Formula E races directly in the streets in the middle
          of the cities?
        </Text>
        <Text style={styles.answertext}>
          Formula E believes that cities are the natural environment of electric
          cars and that having the races on street circuits in the middle of the
          city will promote the use and increase the popularity of electric
          vehicles.
        </Text>
        <Text style={styles.questiontext}>
          10. How loud is a Formula E car?
        </Text>
        <Text style={styles.answertext}>
          Formula E’s cars are hardly louder than an average gasoline powered
          car (80 dB for 70 dB respectively) and the futurist noise they make
          come from their tires on the circuit, their aerodynamics and their
          electric drivetrain.
        </Text>
        <Text style={styles.questiontext}>
          11. Why do drivers change cars during the race? Why not simply change
          the battery?
        </Text>
        <Text style={styles.answertext}>
          Drivers have to change cars during the race because today’s electric
          technology doesn’t allow a car to go full speed for an hour. One of
          the purposes of Formula E is, in fact, to accelerate the development
          of battery technologies and electric drivetrains. As for not changing
          the battery instead of the car, for safety reasons it is not allowed
          to swap car batteries during a race. In order to respect the FIA’s
          safety norms, the batteries are sealed so removing them quickly is
          impossible.
        </Text>
      </View>
    ),
  },
  {
    title: <Text>HOW TO GET THERE</Text>,
    content: (
      <View>
        <Text>
          The site has three entrances: E1: The intersection of Ferris &amp;
          Sullivan E2: Pier 11 near the Atlantic Basin Ferry Landing E3: The
          intersection of Imlay &amp; Pioneer St SUBWAY The closest subway stop
          is Carroll Gardens/Smith St. Take the F train (orange line) to Carroll
          Gardens Station. There will be a free event shuttle from this station.
          From Manhattan you can take the 4, D, N, Q and R train to Barclays
          Center Stop and take a free event shuttle to the venue. Planned
          Service: G train will run to Hoyt - Shermerhorn but not to Church Ave.
          It will serve Fulton St, a short walk to Barclays Center. The 2 &amp;
          3 trains are not operating outside of Manhattan. RIDESHARE Dropoff
          will be on Dikeman St. between Ferris &amp; Conover St. There will be
          no parking or long waiting area for rideshare cars. All traffic must
          keep moving. SHUTTLE BUS Barclays Center: Guest pick-up is at the bus
          load in area on Flatbush. Carroll Gardens: Guest pick-up is on the
          corner of Smith St / 2nd Place. DROP-OFF / PICK UP AREA at VENUE: The
          bus drop-off pick up area at the venue is closest to e1 entrance. If
          you have tickets, proceed to the gate. If you need tickets, proceed to
          the ticket booth at Ferris &amp; Dikeman. Buses will run continuously
          throughout the day from each location Saturday: 7:30 am - 7:00 pm
          Sunday: 7:30 am - 6:00 pm CAR There is no parking on site or around
          the area. We strongly advise you not to drive to this event. BICYCLES
          There is a free bicycle valet at 202 Coffey Street. Please make sure
          you take proper care around event traffic. Bicycles can not be left
          overnight. CITIBIKE The Citibike station on Conover and Coffey street
          will be attended in order to allow more guests to ride Citibikes to
          the event. Please note this station is the only attended Citibike
          station. PUBLIC BUS The B61 public bus route takes you through Red
          Hook to downtown Brooklyn or to Park Slope.
        </Text>
      </View>
    ),
  },
  {
    title: <Text>WHEELCHAIR ACCESS</Text>,
    content: (
      <View>
        <Text>
          Fans in wheelchairs arriving by public transport are advised to use
          the city sidewalks to access the venue using entrance E3 on Pioneer
          Street. If arriving by bus shuttle, the bus shuttle drop off point is
          at Dikeman &amp; Ferris Street. From here a golf cart shuttle is
          available to take guests to entrance E1 on Ferris Street which is also
          step free. There is a dedicated ADA platform in the Allianz eVillage,
          and an ADA section at the front of Grandstands 1A &amp; 2. Tickets for
          the ADA sections at the front of the grandstands are available to
          purchase here on Ticketmaster. There is a ground-level track-crossing
          next to the ADA platform in the Allianz eVillage to the grandstands at
          the following times: Saturday*: 9:15am-9:25am 1:10pm-1:20pm
          3:35pm-3:50pm 5:20pm-5:30pm Sunday*: 10:10am-10:20am 12:35pm-12:50pm
          2:20pm-2:30pm *Timings subject to change There are two ADA restrooms
          available at each restroom bank throughout the venue.
        </Text>
      </View>
    ),
  },
  {
    title: <Text>SUSTAINABILITY</Text>,
    content: (
      <View>
        <Text>
          Montreal aims to establish itself as a capital of electric
          transportation. With the HYDRO-QUÉBEC MONTRÉAL EPRIX, we want to
          foster the growth of transportation electrification and its
          implementation in the greater Montreal region. As sole promoter for
          the event, the non for profit organisation Montréal C’est Électrique
          (MCE) is proud to bring the FIA Formula E championship to Canada. The
          event will provide exceptional exposure for the city and will be a
          platform of choice for promoting transport electrification. Beyond the
          race, an annual program will be developed in cooperation with industry
          partners. Moreover, the event wants to offer more than racing. Formula
          E also has the objective of minimizing negative impacts to the
          environment and maximizing positive impacts on society and the
          economy. The circuit aims to earn the ISO 20121 and BNQ certification,
          which is why we are collaborating with Modus Operandi Logistiques, an
          organisation certified in sustainable development and responsible
          event management. In the context of this certification, Formula E must
          undertake methods to make sure that the event will be as green as
          possible. The festivities will also be an opportunity for families to
          participate in activities in which electric transportation, technology
          and renewable energies are showcased. By focusing on education, the
          organisation wishes to accelerate the transition towards more
          sustainable modes of transportation. Montreal, Québec, Canada
          Renewable energy: 97% of Quebec’s energy comes from renewable
          resources: hydropower, biomass, wind power, and solar power. Air
          quality: The air in Montreal has an average of 10 micrograms per cubic
          metre, the limit deemed as safe by the World Health Organisation. 2016
          marked the best air quality since 2002. Only 40 per cent of air
          pollution is produced locally, with the remaining 60 per cent coming
          from the United States and Ontario.[1] Sustainable transportation:
          Quebec currently has the largest electric vehicle fleet at 14,000. The
          Quebec government wants to have 100,000 electric cars on the road in
          the province by 2020, and Montreal plans to install 1,000 charging
          stations around the city by 2020. Sustainable development: Montreal
          has a “Sustainable Development Plan 2020” in place and the Canadian
          government is investing $15.74 million dollars to the Université de
          Montréal to promote the advancement and exploration of the extent and
          boundaries of sustainable technologies. Vision and mission Fighting
          climate change by offering a solution to inner city pollution, the
          electric car. A technological laboratory inspiring cross industry
          collaboration between some of the world’s leading companies Breaking
          the barriers to the global adoption of sustainable transportation:
          enhancing technologies, increasing infrastructure and changing
          people’s perceptions. So far battery capacity has increased by 25 per
          cent, and by season five it will have doubled. Sustainability
          certifications and recognitions The Achievement of Excellence: We were
          awarded with the highest level of environmental accreditation in the
          FIA Institute’s certification for our environmental management system.
          ISO 20121: The International Standard of Sustainability in Events.
          This represents our next steps to incorporate not only environmental
          benefits, but also social inclusivity and economic prosperity into the
          event management and logistics. Using Montreal as a benchmark, we are
          striving for third party certification of the Championship by the end
          of season four. This will assure the highest level of certification
          and legitimacy. The Bureau de normalisation du Québec (BNQ) :
          Accredited by the Standards Council of Canada in compliance with the
          ISO certification, BNQ showcases a high level of competence and
          ethical practise in the sustainability of the event. Company of the
          Year : At the 2016 BusinessGreen Leaders Awards Sustainability Team of
          the Year : At the 2016 BusinessGreen Leaders Awards Low Carbon
          Transport of the Year : At the 2016 British Renewable Energy Awards
          Event Management and Logistics Clean Energy: The cars and the event is
          powered by Hydro-Québec, of which 99% of is generated from
          hydroelectricity. Local suppliers: A large majority of the suppliers
          are local and supplying the event infrastructure: sound, screens,
          walls, fences, security and civil works. Branded materials: We have
          signed a three-year contract with a local supplier which will buy the
          branded materials and keep it in storage between events. After three
          years, they will reuse it by renting it to construction sites, and
          unusable branded sections will be recycled. Food and Drinks: A variety
          of choices in the eVillage include locally sourced, vegetarian and
          gluten free options. Workers: We have hired local people to help with
          the security and management of the event. Onsite transport: The team
          will be using electric buggies and bikes so they can execute their
          work in a quick, efficient and clean manner. Freight: Our official
          logistics partner, DHL, provides environmentally conscious
          transportation services to the championship race cars, medical and
          safety cars, spare parts and equipment. The freight is being
          transported from New York to Montreal by truck, and after Montreal
          will return to our HQ in the UK by boat to minimise negative impacts.
          Waste management: Waste sorting and recycling stations are located
          everywhere on the site of the event, composting stations are installed
          in the lodges and the staff’s food stations. Reducing waste: Several
          free water bottle refilling stations will be installed throughout the
          site and some of the toilets will be eco-responsible with a vacuum
          flushing system. The system uses air to remove waste and reduce the
          use of water by 90% per flush. Reusing waste: Decorative installations
          and furniture made from reused wood, old banners transformed into
          flags to decorate the site. All cans and bottles will be consigned by
          the Valoristes team. Footprint: We perform a life cycle assessment, an
          in-depth scientific exploration of the championship’s footprint. In
          season one our footprint was equivalent to 3,400 trips around the
          earth by car (25,000 tCO2-eq), in season two it was reduced to 1,600
          trips around the earth by car (12,000 tCO2-eq). Carbon offsetting: As
          a global championship creating temporary street circuits, there are
          some emissions which are unavoidable. We are actively seeking
          certified gold standard carbon offsetting projects to neutralise the
          championship’s impact on people and the planet. Education and advocacy
          FIA Smart Cities Concept: It is estimated that more than 60 per cent
          of the global population will be living in an urban area by 2030.
          Mobility and technology are therefore key to ensuring the liveability
          of the world of tomorrow. The FIA smart cities will bring together the
          championships stakeholders to promote a positive agenda for a safer,
          more sustainability and connected mobility. In three parts:
          entrepreneurs contest, forum and awards. The awards ceremony will be
          held in Montreal. Project Ice: A world first: the Formula E runs one
          of its electric cars on the Arctic ice cap! We took this opportunity
          to participate in a scientifically backed expedition, alongside
          Greenland experts and Southampton University. Our goal was to study
          and raise awareness on the issues of global warming, the melting ice
          caps and rising sea levels. Projected benefits over the next 25 years:
          According to a 2013 Ernst and Young study, Formula E is estimated to
          help sell an additional 77 million electric vehicles worldwide, save
          four billion barrels of oil and 25 billion euros (36 billion dollars)
          on healthcare. The eStory: Undertaking the challenge of
          electro-mobility: A behind the scenes exploration of the
          championship’s potential to foster innovation and break the barriers
          to the global adoption of electric cars and clean transport
          technologies. Informing and entertaining Relax and recharge: Clean
          energy charging points are located around the site, and available to
          be used for free by all of our fans. Roborace: The world’s first
          driverless electric racing series, created to accelerate the
          development of both electric and driverless technologies, showcasing
          the capabilities and potential to transform cities by reducing
          traffic, accidents and pollution. Atelier Enviro: Demonstrations and
          experiences on clean energy, by Mantis Environmental. Inspiring talent
          in STEM subjects: Students from the engineering faculties at
          Université de Sherbrooke, Concordia University and McGill University,
          as well as those from École de technologie supérieure (ETS) and
          Polytechnique Montréal, will have the opportunity to showcase their
          latest solar vehicle and electric bike concepts. A competition has
          been organised on social media, aimed at highlighting the student’s
          achievements, and a prize worth $1,500. Climate clock: On display in
          the Welcome area, the climate clock highlights that time is the key
          metric we need to include to make climate change more understandable.
          The clock shows the current global temperatures, the time left until
          we have gone about +1.5 degrees Celsius and the current amount of
          tonnes of carbon dioxide that has been emitted into the atmosphere.
          Legacy Technology transfer: Alongside our partners, we are
          revolutionizing electric vehicle technology and strive to accelerate
          innovation in sustainable urban mobility. Eco-responsibility of our
          suppliers Water and energy-saving measures implemented within the
          company (e.g., rainwater collection to wash equipment); Use of
          electric instead of gas-powered machinery; Introduction ofa
          sustainable development plan of action; Implementation of policies,
          certifications or a system of environmental management (e.g., ICI ON
          RECYCLE!, Leed, Iso, etc.); Waste management measures (ex: recycling
          paper, plastic, waste oil, double-sided printing, etc.);
          Eco-responsible measures for employees (ex : encouraging the use of
          public transportation and carpooling); Implementation of a greenhouse
          gas reduction plan. What can you do? App: download the Formula E
          mobile app to receive the official race program and a mobile ticket to
          avoid printing. Leave your car at home: We bring the race to the heart
          of the city, so that you don’t have to come to us. The spectators and
          participants are strongly encouraged to use an active mode of
          transportation or public transportation to get to the site. The best
          way is to use the metro and to arrive directly on site by getting off
          at Berri-UQAM, Champ-de-Mars or Papineau stations. Get on your bike:
          Located directly downtown, the site is easy to reach by bicycle! A
          friendly and safe bicycle parking will be waiting for you at each
          entrance of the site. A Bixi parking will also be installed at the
          corner Sainte-Catherine/Berri and at the corner
          Saint-Denis/Saint-Antoine. Don’t drop it, trash it: Be sure to look
          out for the recycling and general waste bins provided by the event for
          your litter. In the spirit of promoting the use of electric cars,
          Formula E also has the objective of becoming one of the major events
          with the smallest environmental footprint. With an average of 25,000
          visitors per day, we aim to reduce the large quantities of waste that
          can be produced by that many people. This is why we need your
          cooperation during the event in order to be able to reduce the amount
          of waste produced by each person. We’re aiming for 114 grams of waste
          per person, which is equivalent to slightly less than a beer bottle.
        </Text>
      </View>
    ),
  },
];
