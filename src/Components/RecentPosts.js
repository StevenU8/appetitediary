import { connect } from "react-redux";
import { Col } from "react-bootstrap";
import PostThumbnail from "./PostThumbnail";

const numberOfPostsToShow = 6;

const RecentPosts = ({ recentPosts }) => (
    recentPosts.map(post => (
        <Col sm={4} style={{paddingBottom:"10px"}}>
            <PostThumbnail post={post}/>
        </Col>
    ))
);

const mapStateToProps = state => {
  const recentPosts = state.Posts.slice(0, numberOfPostsToShow);
  return { recentPosts };
};

export default connect(mapStateToProps)(RecentPosts);
