import { Card, Button } from "react-bootstrap";
import Routes from "../Routes"

const PostThumbnail = ({ post }) => (
    <Card>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button href={`#${Routes.Post}/${post.url}`} variant="secondary">Read...</Button>
        </Card.Body>
    </Card>
);

export default PostThumbnail;
