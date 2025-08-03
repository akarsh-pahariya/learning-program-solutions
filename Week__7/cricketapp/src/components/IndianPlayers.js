import React from 'react';

const IndianPlayers = () => {
  const players = ['Virat', 'Rohit', 'Rahul', 'Pant', 'Jadeja', 'Bumrah'];

  const oddTeam = players.filter((_, index) => index % 2 === 0);
  const evenTeam = players.filter((_, index) => index % 2 !== 0);

  const T20players = ['Surya', 'Hardik'];
  const RanjiTrophy = ['Pujara', 'Rahane'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>List of Indian Players Merged</h2>
      <ul>
        {mergedPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
