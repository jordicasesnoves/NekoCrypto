import React from 'react';
import { Line } from 'react-chartjs-2';
import { useCoins } from '../../hooks/useCoins';
import { Coin } from '../../models/Coin';

const Home = (): JSX.Element => {
  const { data, error, isLoading, isError } = useCoins();

  if (isLoading) return <>Loading...</>;

  // TypeScript type guard
  if ('message' in data) {
    throw error;
  } else {
    console.log(data);
  }

  return (
    <div style={{ padding: '16px' }}>
      {/* {Object.keys(coinData).map((coin: string, i: number) => {
        return (
          <li key={`coin-${i}`}>
            {coin} {coinData[coin].EUR} EUR
          </li>
        );
      })} */}
      {data.data.coins.map((coin: Coin) => {
        const options = {
          responsive: false,
          legend: {
            display: false,
          },
          elements: {
            line: {
              borderColor: '#000000',
              borderWidth: 1,
            },
            point: {
              radius: 0,
            },
          },
          tooltips: {
            enabled: true,
          },
          scales: {
            yAxes: [
              {
                display: false,
              },
            ],
            xAxes: [
              {
                display: false,
              },
            ],
          },
        };
        let chartdata = {
          labels: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
          datasets: [
            {
              data: coin.sparkline,
            },
          ],
        };
        return (
          <div key={coin.uuid}>
            <img width="30" src={coin.iconUrl} />
            <span>
              {coin.name} {Math.round(parseFloat(coin.price) * 100) / 100} $ USD
            </span>
            <Line data={chartdata} options={options} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
