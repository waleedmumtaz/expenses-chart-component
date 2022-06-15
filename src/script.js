const chart = document.getElementById('myChart')
const style = getComputedStyle(document.body)

// Function to convert HSL string to HSLA string
const hslToHsla = (hslString, aplha) => {
  // Add "a" after "hsl"
  let hslaString = `${hslString.slice(0, 4)}a${hslString.slice(4)}`

  // Add "alpha" value at the second last position (", alpha")
  hslaString = `${hslaString.slice(0, -1)}, ${aplha}${hslaString.slice(-1)}`

  return hslaString
}

const clrSoftRed = style.getPropertyValue('--clr-soft-red')
const clrCyan = style.getPropertyValue('--clr-cyan')

const clrSoftRedAlpha = hslToHsla(clrSoftRed, 0.6)
const clrCyanAlpha = hslToHsla(clrCyan, 0.6)

const displayChart = async () => {
  const res = await fetch('./data.json')
  const data = await res.json()

  let days = []
  let amounts = []

  data.forEach((item) => {
    days = [...days, item.day]
    amounts = [...amounts, item.amount]
  })

  const spendingData = {
    labels: days,
    datasets: [
      {
        label: 'Spending - Last 7 days',
        backgroundColor: (context) => {
          const index = context.index

          return index === 2 ? clrCyan : clrSoftRed
        },
        hoverBackgroundColor: (context) => {
          const index = context.index

          return index === 2 ? clrCyanAlpha : clrSoftRedAlpha
        },
        borderColor: 'black',
        borderRadius: 5,
        borderSkipped: false,
        data: amounts,
      },
    ],
  }

  const config = {
    type: 'bar',
    data: spendingData,
    options: {
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      onHover: (event, charElement) => {
        event.native.target.style.cursor = charElement[0]
          ? 'pointer'
          : 'default'
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  }

  const myChart = new Chart(chart, config)
}

displayChart()
