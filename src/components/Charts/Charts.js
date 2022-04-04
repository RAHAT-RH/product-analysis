import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Charts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='container'>
            <h1 className='text-center my-4'>Chart</h1>
            <div className="row">
                <div className="col-lg-6 border px-3 shadow-lg my-4">

                    <AreaChart

                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="investment" stroke="#1b69b873" fill="#1b69b873" />
                        <Area type="monotone" dataKey="revenue" stroke="#0533615b" fill="#0533615b" />
                    </AreaChart>

                </div>
                <div className="col-lg-6 border  shadow-lg my-4">

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" stackId="a" fill="#13e624" />
                        <Bar dataKey="investment" stackId="a" fill="#8a9197" />
                        <Bar dataKey="revenue" stackId="b" fill="#053361" />
                    </BarChart>

                </div>
                <div className="col-lg-6 border  shadow-lg my-3">

                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8a9197" />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>

                </div>
                <div className="col-lg-6 border shadow-lg  my-3">

                    <PieChart width={500} height={400}>
                        <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="" cx="50%" cy="50%" outerRadius={60} fill="#8784d8" />
                        <Tooltip />
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default Charts;