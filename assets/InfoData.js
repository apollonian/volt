import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 8,
  },

  secondaryText: {
    lineHeight: 26,
    fontSize: 16,
    marginTop: 2,
    marginBottom: 16,
  },
});

export const InfoData = [
  {
    title: <Text style={styles.headingText}>FAQ</Text>,
    content: (
      <View>
        <Text style={styles.mainText}>
          1. Can we bring food/drinks in the site?
        </Text>
        <Text style={styles.secondaryText}>
          Bringing your own consumption is not permitted on the Hydro-Québec
          Montréal ePrix site.
        </Text>
        <Text style={styles.mainText}>2. Can we bring our own chair?</Text>
        <Text style={styles.secondaryText}>
          To allow everyone to equally enjoy their experience, we do not allow
          anyone to bring their own chair.
        </Text>
        <Text style={styles.mainText}>
          3. Can we re-enter the site if we have exited it?
        </Text>
        <Text style={styles.secondaryText}>
          Yes. Your pass is valid for goings and comings
        </Text>
        <Text style={styles.mainText}>4. Are stands seats reserved?</Text>
        <Text style={styles.secondaryText}>
          Yes. Every stand seat is reserved. Your seat number is written on your
          ticket.
        </Text>
        <Text style={styles.mainText}>
          5. Can we watch the race from the eVillage and the activities zones?
        </Text>
        <Text style={styles.secondaryText}>
          Screens will be installed to allow everyone in the activities zones to
          follow the race. You can also directly see the circuit from three of
          the five activities zones.
        </Text>
        <Text style={styles.mainText}>
          6. Is there a designated seating area for people with reduced
          mobility?
        </Text>
        <Text style={styles.secondaryText}>
          A section for people with reduced mobility is at the junction betweet
          De la Gauchetière and Berri since the closest metro exit (station
          Berri-UQAM) has an elevator.
        </Text>
        <Text style={styles.mainText}>
          7. Can my child get in the ePrix site without a ticket?
        </Text>
        <Text style={styles.secondaryText}>
          Children aged 5 and over need to have a ticket. Children aged 4 and
          under accompanied by an adult do not need a ticket. For assigned
          seats, the child needs to sit on the accompanying adult.
        </Text>
        <Text style={styles.mainText}>
          8. I am a resident, business owner or I work in the race’s area, where
          can I know how I will be affected by the ePrix?
        </Text>
        <Text style={styles.secondaryText}>
          All decisions regarding the residents, the circuit, the traffic and
          the streets are made by the Ville-Marie borough. They will keep you
          informed until the ePrix. You can also contact them by phone by
          dialling 311 or by e-mail at formule-e@ville.montreal.qc.ca
        </Text>
        <Text style={styles.mainText}>
          9. Why are the Formula E races directly in the streets in the middle
          of the cities?
        </Text>
        <Text style={styles.secondaryText}>
          Formula E believes that cities are the natural environment of electric
          cars and that having the races on street circuits in the middle of the
          city will promote the use and increase the popularity of electric
          vehicles.
        </Text>
        <Text style={styles.mainText}>10. How loud is a Formula E car?</Text>
        <Text style={styles.secondaryText}>
          Formula E’s cars are hardly louder than an average gasoline powered
          car (80 dB for 70 dB respectively) and the futurist noise they make
          come from their tires on the circuit, their aerodynamics and their
          electric drivetrain.
        </Text>
        <Text style={styles.mainText}>
          11. Why do drivers change cars during the race? Why not simply change
          the battery?
        </Text>
        <Text style={styles.secondaryText}>
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
    title: <Text style={styles.headingText}>HOW TO GET THERE</Text>,
    content: (
      <View>
        <Text style={styles.secondaryText}>
          The site has three entrances: E1: The intersection of Ferris &amp;
          Sullivan E2: Pier 11 near the Atlantic Basin Ferry Landing E3: The
          intersection of Imlay &amp; Pioneer St
        </Text>
        <Text style={styles.mainText}>SUBWAY</Text>
        <Text style={styles.secondaryText}>
          The closest subway stop is Carroll Gardens/Smith St. Take the F train
          (orange line) to Carroll Gardens Station. There will be a free event
          shuttle from this station. From Manhattan you can take the 4, D, N, Q
          and R train to Barclays Center Stop and take a free event shuttle to
          the venue. Planned Service: G train will run to Hoyt - Shermerhorn but
          not to Church Ave. It will serve Fulton St, a short walk to Barclays
          Center. The 2 &amp; 3 trains are not operating outside of Manhattan.
        </Text>
        <Text style={styles.mainText}>RIDESHARE</Text>
        <Text style={styles.secondaryText}>
          Dropoff will be on Dikeman St. between Ferris &amp; Conover St. There
          will be no parking or long waiting area for rideshare cars. All
          traffic must keep moving.
        </Text>
        <Text style={styles.mainText}>SHUTTLE BUS</Text>
        <Text style={styles.secondaryText}>
          Barclays Center: Guest pick-up is at the bus load in area on Flatbush.
          Carroll Gardens: Guest pick-up is on the corner of Smith St / 2nd
          Place. The bus drop-off pick up area at the venue is closest to e1
          entrance. If you have tickets, proceed to the gate. If you need
          tickets, proceed to the ticket booth at Ferris &amp; Dikeman. Buses
          will run continuously throughout the day from each location Saturday:
          7:30 am - 7:00 pm Sunday: 7:30 am - 6:00 pm
        </Text>
        <Text style={styles.mainText}>CAR</Text>
        <Text style={styles.secondaryText}>
          There is no parking on site or around the area. We strongly advise you
          not to drive to this event.
        </Text>
        <Text style={styles.mainText}>BICYCLES</Text>
        <Text style={styles.secondaryText}>
          There is a free bicycle valet at 202 Coffey Street. Please make sure
          you take proper care around event traffic. Bicycles can not be left
          overnight.
        </Text>
        <Text style={styles.mainText}>CITIBIKE</Text>
        <Text style={styles.secondaryText}>
          The Citibike station on Conover and Coffey street will be attended in
          order to allow more guests to ride Citibikes to the event. Please note
          this station is the only attended Citibike station.
        </Text>
        <Text style={styles.mainText}>PUBLIC BUS</Text>
        <Text style={styles.secondaryText}>
          The B61 public bus route takes you through Red Hook to downtown
          Brooklyn or to Park Slope.
        </Text>
      </View>
    ),
  },
  {
    title: <Text style={styles.headingText}>WHEELCHAIR ACCESS</Text>,
    content: (
      <View>
        <Text style={styles.secondaryText}>
          Fans in wheelchairs arriving by public transport are advised to use
          the city sidewalks to access the venue using entrance E3 on Pioneer
          Street.
        </Text>
        <Text style={styles.secondaryText}>
          If arriving by bus shuttle, the bus shuttle drop off point is at
          Dikeman &amp; Ferris Street. From here a golf cart shuttle is
          available to take guests to entrance E1 on Ferris Street which is also
          step free.
        </Text>
        <Text style={styles.secondaryText}>
          There is a dedicated ADA platform in the Allianz eVillage, and an ADA
          section at the front of Grandstands 1A &amp; 2. Tickets for the ADA
          sections at the front of the grandstands are available to purchase
          here on Ticketmaster. There is a ground-level track-crossing next to
          the ADA platform in the Allianz eVillage to the grandstands at the
          following times:
        </Text>
        <Text style={[styles.secondaryText, { fontWeight: '500' }]}>
          SATURDAY:
        </Text>
        <Text style={{ fontSize: 16, padding: 2 }}>09:15am - 09:25am</Text>
        <Text style={{ fontSize: 16, padding: 2 }}>01:10pm - 01:20pm</Text>
        <Text style={{ fontSize: 16, padding: 2 }}>03:35pm - 03:50pm</Text>
        <Text style={{ fontSize: 16, padding: 2, marginBottom: 8 }}>
          05:20pm - 05:30pm
        </Text>
        <Text style={[styles.secondaryText, { fontWeight: '500' }]}>
          SUNDAY:
        </Text>
        <Text style={{ fontSize: 16, padding: 2 }}>10:10am - 10:20am</Text>
        <Text style={{ fontSize: 16, padding: 2 }}>12:35pm - 12:50pm</Text>
        <Text style={{ fontSize: 16, padding: 2, marginBottom: 8 }}>
          02:20pm - 02:30pm
        </Text>
        <Text style={styles.secondaryText}>*Timings subject to change.</Text>
        <Text style={styles.secondaryText}>
          There are two ADA restrooms available at each restroom bank throughout
          the venue.
        </Text>
      </View>
    ),
  },
  {
    title: <Text style={styles.headingText}>CONTACT</Text>,
    content: (
      <View>
        <Text style={styles.secondaryText}>
          For any queries contact us at
          <Text style={{ fontWeight: '500' }}> +18762 1231</Text> or send us an
          email at
          <Text style={{ fontWeight: '500' }}> support@forumale.com</Text>
        </Text>
      </View>
    ),
  },
];
