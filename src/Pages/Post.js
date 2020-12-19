import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import InstantPotCarnitas from "../Posts/InstantPotCarnitas"
import Routes from "../Routes";

const Post = ({ post }) => (
    <Route path={`${Routes.Post}/${Routes.Posts.InstantPotCarnitas}`} component={InstantPotCarnitas}/>
);

export default Post;

//affiliate links:
//instant pot
//oil shield