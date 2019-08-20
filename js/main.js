// Survey Questions
var surveyJSON = {
  title: "Survey to Radar Chart Live",
  description: "While you answer these questions the radar chart will instantly update.",
  showQuestionNumbers: "off",
  showCompletedPage: true,
  showPageNumbers: true,
  showProgressBar: "top",
  completedHtml: "<h2>Thank you for checking out this project!</h2>",
  pages:[
    // Question names are: "dataset questionIndex"
    {
      name:"Personality",
      title:"How would you like to change?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 0",
          title:"I'm happy with who I am.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 0",
          title:"I want to change.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    },

    {
      name:"Education",
      title:"How much would you like to learn?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 1",
          title:"I already know everything I need.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 1",
          title:"There's so much more I want to learn.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    },

    {
      name:"Career",
      title:"How successful do you want to be in your career and financially?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 2",
          title:"I make decisions of my own.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 2",
          title:"I want to be my own boss.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    },

    {
      name:"Health",
      title:"Are you satisfied with your fitness and health?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 3",
          title:"I'm as fit as a fiddle.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 3",
          title:"I want to lose or gain weight.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    },

    {
      name:"Fun",
      title:"How much do you enjoy your life?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 4",
          title:"I'm always on a adventure.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 4",
          title:"I'd like to travel much more.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    },

    {
      name:"Community",
      title:"How happy are you with your social circle?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 5",
          title:"My friends bring out the best in me.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 5",
          title:"I'd like to meet new, interesting people.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    },

    {
      name:"Relationship",
      title:"How happy are you with your relationship?",
      description:"Rate how strongly you agree with these statements.",
      elements:[
        {
          type: "rating",
          name: "0 6",
          title:"I'm happy with my current relationship status.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
        },
        {
          type:"rating",
          name:"1 6",
          title:"I want to take the next step.",
          rateMin: 0,
          rateMax: 5,
          minRateDescription: "not at all",
          maxRateDescription: "absolutely",
          startWithNewLine: false,
        },
      ]
    }
  ]
};

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#85b7d7";
defaultThemeColors["$main-hover-color"] = "#095980";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#095980";

defaultThemeColors["$header-background-color"] = "#9ac3c8";
defaultThemeColors["$body-container-background-color"] = "#b5b5b5";

Survey
    .StylesManager
    .applyTheme();

window.survey = new Survey.Model(surveyJSON);

$("#surveyContainer").Survey({model: survey});

// Radar Chart
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var chartOptions = {
    title: {
    display: true,
    text: 'Your current situation compared to your goals.'
    },
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1
      },
      pointLabels: {
        fontSize: 18
      }
    },
    legend: {
      position: 'top'
    }
};

var chartData = {
  labels: [["Personal", "Growth"], "Education", "Career", ["Health &", "Fitness"], ["Fun &", "Recreation"], "Community", "Relationship"],
  datasets: [{
    label: "Current",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5]
  }, {
    label: "Goal",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5]
  }]
};

var chartConfig = {
    type: 'radar',
    data: chartData,
    options: chartOptions
};

window.onload = function() {
    window.radarChart = new Chart(document.getElementById('RadarChart'), chartConfig);
};

// Live update Chart from survey.
survey.onValueChanged.add(function(survey, options){
  value = options.question.value;
  let [dataset, q_index] = options.name.split(" ");

  chartConfig.data.datasets[parseInt(dataset)].data[parseInt(q_index)] = value;

  window.radarChart.update();
});

survey.onComplete.add(function (result) {
        //ToDo: Show button to save graph to PDF with some text?
        createPdf();
    });

async function createPdf() {
  const pdfDoc = await PDFLib.PDFDocument.create();
  const page = pdfDoc.addPage([350, 400]);
  page.moveTo(110, 200);
  var imgData = document.getElementById('RadarChart').toDataURL("image/png", 1.0);
  // Embed the image bytes
  const chartImage = await pdfDoc.embedPng(imgData)
  // Get the width/height of the JPG image scaled down to 25% of its original size
  const imgDims = chartImage.scale(0.25)
  // Draw the JPG image in the center of the page
  page.drawImage(chartImage, {
    x: page.getWidth() / 2 - imgDims.width / 2,
    y: page.getHeight() / 2 - imgDims.height / 2,
    width: imgDims.width,
    height: imgDims.height,
  })
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  document.getElementById('pdf').src = pdfDataUri;
};

// OR

//<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
//download.addEventListener("click", function () {
//  var imgData = document.getElementById('RadarChart').toDataURL("image/jpeg", 1.0);
//  var pdf = new jsPDF();
//  pdf.addImage(imgData, 'JPEG', 0, 0);
//  pdf.save("download.pdf");
//}, false);
