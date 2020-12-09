import React, { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

export default function Chart() {
    const [user, setUser] = useContext(UserContext);


    const captions = {
        // columns
        A: 'category 1',
        B: 'category 2',
        C: 'category 3',
        D: 'category 4',
        E: 'category 5'
    };

    return (
        <div style={{ display: "inline-block", zIndex: 10 }}>

            <RadarChart
                captions={captions}
                data={user.rating}
                size={450}
            />
        </div>
    )
}

// Data Format:
// const data = [
//     {
//         data: {
//             A: 0.7,
//             B: .8,
//             C: 0.9,
//             D: 0.67,
//             E: 0.8
//         },
//         meta: { color: 'blue' }
//     },
// ];