import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useData();

    return (
        <Container className="mt-4">
            <Row className="g-4">
                <Col sm={1} md={6}>
                    <h5 className='text-center brand-color'>Investment VS Revenue</h5>
                    <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 10 }}>
                        <XAxis dataKey="month" stroke='#666'/>
                        <YAxis dataKey="investment" stroke='#666'/>
                        <CartesianGrid stroke="#999" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="investment" stroke="#F60" />
                        <Line type="monotone" dataKey="revenue" stroke="#006f95" />
                        <Tooltip/>
                        <Legend />
                    </LineChart>
                </Col>
                <Col sm={1} md={6}>
                    <h5 className='text-center brand-color'>Investment VS Revenue</h5>
                    <BarChart width={500} height={300} data={data} margin={{top: 20,right: 30,left: 20,bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke='#999'/>
                    <XAxis dataKey="month" stroke='#666'/>
                    <YAxis dataKey="investment" stroke='#666'/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#f60" />
                    <Bar dataKey="revenue" stackId="a" fill="#006f95" />
                    </BarChart>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;