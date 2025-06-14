var Graphdiv = document.getElementById('Histogram')

fetch("/Data/samples.json")
.then(response => response.json())
.then(data => {
    const trace ={
        x:data,
        type: 'histogram',
        marker:{
            color: 'rgba(30, 132, 164, 0.8)',
            line:{
                width: 3,
                color: 'rgba(0, 0, 0, 0.8)'
            },
            opacity: 0.6,
        },
        nbinsy:10,
    };

    const layout = {
        title : "Histogram of Normal Samples",
        xaxis : {title:"Value"},
        yaxis : {title:"Frecuency"},
        with  : 400,
        height: 400,
        showgrid:true,
        gridcolor: 'rgba(200, 200, 200, 0.2)',
        paper_bgcolor: 'rgba(30, 132, 164, 0)',
        plot_bgcolor: 'rgba(30, 132, 164, 0)',
        font: {color: 'rgba(200, 200, 200, 0.8)'}
        
    };

    Plotly.newPlot(Graphdiv, [trace], layout);

})

.catch(error => console.error('Error loading JSON:', error));