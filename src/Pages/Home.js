import { Container, Row } from "react-bootstrap";
import RecentPosts from "../Components/RecentPosts";

export default function Home() {
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

