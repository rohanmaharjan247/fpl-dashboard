import { useEntryHistory, useFinishedGameweek } from "@/lib/app-utils/hook"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { useMemo } from "react"
import { Line } from "react-chartjs-2"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type GameweekPointsChartProps = {
  entryId?: number
}

const GameweekPointsChart = ({ entryId }: GameweekPointsChartProps) => {
  const { entryHistory } = useEntryHistory(entryId)
  const finishedGameweek = useFinishedGameweek()

  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        offset: true,
        title: {
          display: true,
          text: "Gameweek",
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Points",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      // title: {
      //   display: false,
      //   text: "Chart.js Line Chart",
      // },
    },
  }
  const labels = useMemo(() => {
    return entryHistory?.current.map((x) => x.event)
  }, [entryHistory])
  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: "Gameweek Pts.",
          data: entryHistory?.current.map((x) => x.points),
          backgroundColor: "rgb(236, 72, 153)",
          borderColor: "rgb(236, 72, 153)",
        },
        {
          label: "Avg. Pts",
          data: finishedGameweek?.map((x) => x.average_entry_score),
          backgroundColor: "hsl(210, 40%, 43%)",
          borderColor: "hsl(210, 40%, 43%)",
        },
      ],
    }
  }, [entryHistory, finishedGameweek, labels])
  return (
    <div className='py-4 w-full h-full'>
      <Line data={data} options={options} />
    </div>
  )
}

export default GameweekPointsChart
