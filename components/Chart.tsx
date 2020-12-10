import React, { useContext } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import { UserContext } from '../contexts/user.context';
import { Captions } from '../contexts/seed';

export default function Chart() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div style={{ display: "inline-block", zIndex: 10 }}>
      <RadarChart
        captions={Captions}
        // @ts-ignore
        data={user.rating}
        size={350}
      />
    </div>
  );
}
