import { Container, Row, Col } from "react-bootstrap";

import tacos from "./tacos.jpeg"

const Post = ({ post }) => (
    <Container>
        <Row>
            <h1>Post Title</h1>
        </Row>
        <Row>
            <p>Gummies toffee sweet roll brownie cake brownie. Jelly beans pastry brownie topping pastry muffin. Toffee chupa chups pastry cheesecake sweet roll sweet roll gummi bears halvah. Liquorice lollipop dessert jelly beans danish oat cake biscuit jujubes lollipop. Liquorice topping sesame snaps lollipop gingerbread marzipan muffin lollipop. Ice cream caramels cheesecake chupa chups macaroon sweet toffee danish.</p>
        </Row>
        <Row>
            <Col sm={1}></Col>
            <Col>
                <img style={{marginLeft: "200px"}} width={1440 / 3} height={1800 / 3} src={tacos} />
            </Col>
        </Row>

        <Row>
            <h5>Prep Time: 10hr | Cook Time: 100hr</h5>
        </Row>

        <Row>
            <h4>Ingredients</h4>
        </Row>
        <Row>
            <ul>
                <li>Item 1</li>
            </ul>
        </Row>

        <Row>
            <h4>Instructions</h4>
        </Row>
        <Row>
            <ol>
                <li>Step 1</li>
            </ol>
        </Row>
    </Container>
);

export default Post;
