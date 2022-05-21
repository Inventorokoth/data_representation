const xlabels=[];
const ytempt=[];
chartit();


async function chartit(){
await getData();
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'global average temperature in C°',
            data: ytempt,
            fill:false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
})};
// getData()
async function getData(){
    const response=await fetch('nasa.csv');
    const data=await response.text();
    // console.log(data)

    const table= data.split('\n').slice(1)
   table.forEach(row => {
       const columns =row.split(',')
    //    console.log(row)
       const year=columns[0]
          xlabels.push(year);
       const temp=columns[1]
       ytempt.push(parseFloat(temp)+14)
       console.log(year,temp)
   });
    // console.log(rows)

}//ZonAnn.Ts+dSST.csv