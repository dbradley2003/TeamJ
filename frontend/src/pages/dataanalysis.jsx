import axios from 'axios';
import { DataFrame } from 'pandas-js';
import { Chart } from 'chart.js';

export function Dataanalysis(){

    const key = 'f349fb8841c5a6d4fcf4e04d';
    const url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            const rates = data.conversion_rates;

            const df = new DataFrame(Object.entries(rates), { columns: ['Currency', 'Exchange Rate'] });

            console.log(df.head());

            console.log(df.info());
            console.log(df.isnull().sum());
            console.log(df.describe());

            const sorted_df = df.sortValues('Exchange Rate', { ascending: false });
            console.log(sorted_df.head());
            console.log(sorted_df.tail());

            const top_10_currencies = sorted_df.head(10);
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: top_10_currencies.get('Currency').toArray(),
                    datasets: [{
                        label: 'Exchange Rate',
                        data: top_10_currencies.get('Exchange Rate').toArray(),
                        backgroundColor: 'skyblue'
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}