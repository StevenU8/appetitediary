import { Col, Container, Row } from "react-bootstrap";
import RecentPosts from "../Components/RecentPosts";

export default function Home() {
    return (
    <Container>
        <Row>
            <h3>Featured Post</h3>
        </Row>
        <Row>
            <Col>
                <img height="500vh" width="100%" src=""/>
            </Col>
        </Row>

        <Row>
            <h3>Recent Posts</h3>
        </Row>
        <Row>
            <RecentPosts/>
        </Row>
    </Container>
    );
}

