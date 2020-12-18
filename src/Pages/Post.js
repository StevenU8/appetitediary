import { Container, Row, Col } from "react-bootstrap";

import tacos from "./tacos.jpeg"

const Post = ({ post }) => (
    <Container>
        <Row>
            <h2>Instant Pot Carnitas </h2>
        </Row>
        <Row>
            <p>I feel like I've heard "I can eat tacos everyday" come out of lots of people's mouths and I always took it with a grain of salt. This included S until we went to Puerto Vallarta several years ago while we were dating. I was just starting to take my hobby food IG more seriously and was so excited to explore the local areas, eat lots of different dishes, and take lots of food pics! We explored and ate different things during the 7+ days we were there. Lots of different tacos that is. My take away from that trip were that 1) PV is an absolute paradise that I would love to return to. 2) This guy is not kidding about his love for tacos. 3) Should I start a taco IG?</p>
            <p>Of all the tacos devoured, the top contenders were carnitas and spit roasted al pastor. Can't recreate those exact tacos without the magic of PV, but I think these carnitas definitely come close. This recipe is on repeat at our home and it's so quick and easy with the help of our Instant Pot.  </p>
        </Row>
        {/* <Row style={{ marginBottom: "10px" }}>
            <Col sm={1}></Col>
            <Col>
                <img style={{ marginLeft: "200px" }} width={1440 / 3} height={1800 / 3} src={tacos} />
            </Col>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
            <Col sm={1}></Col>
            <Col>
                <img style={{ marginLeft: "200px" }} width={1440 / 3} height={1800 / 3} src={tacos} />
            </Col>
        </Row> */}

        <Row>
            <p>You can spruce these up or down and do whatever is most comfortable for you and your kitchen. Sometimes we do store bought corn tortillas with just onions and cilantro. Sometimes we go all out with homemade tortillas and salsas. Any way is delicious. S's favorite combo is corn tortillas with cabbage slaw, salsa (avocado or chile de arbol), onions, cilantro, and a squeeze of lime.</p>
        </Row>

        <Row>
            <h6>Prep Time: 1 hr 15 min (30 Active Min) | Servings: 2-3</h6>
        </Row>

        <Row>
            <h5 style={{ textDecoration: "underline" }}>Ingredients</h5>
        </Row>

        <Row>
            <Col>
                <h6>For Instant Pot</h6>
            </Col>
        </Row>
        <Row>
            <Col>
                <ul>
                    <li>2 tbsp Oil</li>
                    <li>1-1.5 lb Pork Shoulder/Pork Butt cut into 1-1.5 inch cubes</li>
                    <li>1.25 tsp Mexican Oregano</li>
                    <li>1 Bay Leaf</li>
                    <li>3.4 tsp Ground Cumin </li>
                    <li>3/4 tsp Black Pepper </li>
                    <li>1.75 tsp Sea Salt </li>
                    <li>1.25 cup of Orange Juice </li>
                    <li>1.25 cup Chicken Broth </li>
                </ul>
            </Col>
        </Row>

        <Row>
            <Col>
                <h6>For Crisping on Stove</h6>
            </Col>
        </Row>
        <Row>
            <Col>
                <ul>
                    <li>3 tbsp Oil</li>
                    <li>Salt to taste</li>
                </ul>
            </Col>
        </Row>

        <Row>
            <Col>
                <h6>For Serving</h6>
            </Col>

        </Row>
        <Row>
            <Col>

                <ul>
                    <li>Corn Tortillas</li>
                    <li>Cilantro</li>
                    <li>Diced Onions</li>
                    <li>Lime</li>
                </ul>
            </Col>

        </Row>

        <Row>
            <h5 style={{ textDecoration: "underline" }}>Method</h5>
        </Row>
        <Row>
            <Col>
                <ol>
                    <li>Heat up Instant Pot Saute mode on High until hot. Add oil to pot and ensure the oil coats the bottle of the whole pot.</li>
                    <li>Add pork cubes and sear until golden brown. ~10-12 min on high.</li>
                    <li>Add in Mexican oregano, bay leaf, ground cumin, black pepper, and salt to the pork and stir for 30 seconds to release the flavors.</li>
                    <li>Pour in the orange juice and chicken broth. Deglaze and scrape any bits on the pot bottom.  </li>
                    <li>Close the lid to your instant pot and ensure pressure knob is sealed. Pressure cook on high pressure for 30 min + natural release for 15 min. Carefully open the lid. </li>
                    <li>Strain out the cooked pork from the broth and use two forks to lightly break apart the meat into smaller chunks. The carnitas are ready to go now, but we always take the extra step to crisp it up.  </li>
                    <li>Heat up a frying pan on medium high and add in your oil. Once the pan and oil are fully heated, carefully add your pork and extra salt to taste. Be careful as you will get oil popping from the excess liquids. I recommend placing an oil shield on your pan.  </li>
                    <li>
                        <p>Sear until the pork is crispy and golden to your liking; about 2 min on each side. For that perfect crisp, try not to turn the meat too many times during the searing step.</p>
                        <img style={{ marginLeft: "200px" }} width={1440 / 5} height={1800 / 5} src={tacos} />
                    </li>
                    <li>Serve with your choice of tortillas and toppings. Enjoy! </li>
                </ol>
            </Col>
        </Row>
    </Container>
);

export default Post;