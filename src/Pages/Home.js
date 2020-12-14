import { Card, Button, Container, Row, Col } from "react-bootstrap";
import RecentPosts from "../Components/RecentPosts";

export default function Home() {

    let recentPosts = [

    ]

    return (

        <Container>
            <Row>
                <h3>Recent Posts</h3>
            </Row>
            <Row>
                <RecentPosts/>
            </Row>
        </Container>
    );
}

