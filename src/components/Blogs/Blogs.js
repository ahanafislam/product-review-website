import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='mt-5'>
        <Row className='g-5'>
            <Col>
                <div className='reviewCard position-relative mb-4'>
                    <Card.Body>
                        <Card.Title className='mt-3'>What is context API?</Card.Title>
                        <Card.Text>
                            The main purpose of using context API is to avoid prop-drilling in our application. In react we can easily create components under components. After breaking components into smaller parts we might need some data to work. If we want to access the data we need to pass the data through props from the parent component to the child component. Hare if we use Context API we can easily use the data directly from the grandparent component to child component without any props passed by the parents. This is how we can easily avoid prop-drilling with the help of Context API.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Col>
            <Col sm={1} md={6}>
                <div className='reviewCard position-relative mb-4'>
                    <Card.Body>
                        <Card.Title className='mt-3'>What is Semantic Tag?</Card.Title>
                        <Card.Text>
                            In HTML have some tag like &lt;div&gt; and &lt;span&gt; this is not saying about its content. On the other hand &lt;header$&gt;, &lt;footer&gt; and &lt;article&gt; tag describe the purpose of the element and why should we use it. So, this type of tag is calld semantic tag. The semantic tag describes its meaning for the browser and developer. Basically, a Semantic tag is much easier to read. It’s has best accessibility. Semantic tag are not only for easier to read but it’s also SEO friendly.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Col>
        </Row>
        </Container>
    );
};

export default Blogs;