import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { stat } from '../utils/types';
import { mangoFusionPaletteDark } from '@mui/x-charts/colorPalettes'

interface statProp {
    pokeStats: stat[];
    name: string;
}

export default function Graph({pokeStats, name}: statProp) {

    console.log(pokeStats[1])

    const chartSettings = {
        width: 600,
        height: 300
    };

    const dataset = [
        {
            statValue: pokeStats[0].base_stat,
            statLine: 'hp'
        },
        {
            statValue: pokeStats[1].base_stat,
            statLine: 'atk'
        },
        {
            statValue: pokeStats[2].base_stat,
            statLine: 'def'
        },
        {
            statValue: pokeStats[3].base_stat,
            statLine: 'sp-atk'
        },
        {
            statValue: pokeStats[4].base_stat,
            statLine: 'sp-def'
        },
        {
            statValue: pokeStats[5].base_stat,
            statLine: 'spd'
        }
    ]

    return (
        <>
            <BarChart
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'statLine' }]}
                series={[{ dataKey: 'statValue' }]}
                layout='horizontal'
                margin={{
                    top: 20,
                    bottom: 40
                }}
                colors={mangoFusionPaletteDark}
                {...chartSettings}
            />
        </>
    )
}