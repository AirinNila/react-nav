import Tooltip from 'daisyui/components/tooltip';
import { LineChart, Line,  XAxis, YAxis  } from 'recharts';

const Charts = () => {
  const studentMarks = [
  { id: 1, name: "Ayesha", math: 78, physics: 74 },
  { id: 2, name: "Rafi", math: 85, physics: 80 },
  { id: 3, name: "Nusrat", math: 92, physics: 89 },
  { id: 4, name: "Tanvir", math: 66, physics: 62 },
  { id: 5, name: "Mehedi", math: 74, physics: 69 },
  { id: 6, name: "Jannat", math: 88, physics: 91 },
  { id: 7, name: "Tushar", math: 59, physics: 64 },
  { id: 8, name: "Mim", math: 95, physics: 93 },
  { id: 9, name: "Sabbir", math: 70, physics: 67 },
  { id: 10, name: "Rima", math: 81, physics: 77 }
];


    return (
        <div>
            <LineChart width={500} height={400} data={studentMarks}>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey="physics" stroke='red'></Line>
                  <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Charts;