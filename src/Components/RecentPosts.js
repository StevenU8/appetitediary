import { connect } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// import { getTodos } from "../redux/selectors";

const numberOfPostsToShow = 8;

const RecentPosts = ({ recentPosts }) => (
    recentPosts.map(post => (
        <Col sm={3}>
            <Card>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    ))
);

const mapStateToProps = state => {
  const recentPosts = state.Posts.slice(0, numberOfPostsToShow);
  return { recentPosts };
};

export default connect(mapStateToProps)(RecentPosts);
