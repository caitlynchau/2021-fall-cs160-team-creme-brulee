import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import apis from "../../api";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  // transition: theme.transitions.create('transform', {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

function Feed() {
  const [expanded, setExpanded] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [posts, setPosts] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!isMounted) {
      apis.getAllPosts().then(response => {
       setPosts(response.data);  
      })
      setIsMounted(true);
    }
  }, [isMounted, posts])
  
  return (
    <div className="feed">
      {posts && posts.success && 
        posts.data.map(post => 
          <Card key={post._id} sx={{ maxWidth: 345 }} className="feed-card">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="location">
                  J
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Joyce"
              subheader={post.updatedAt}
            />
            <CardMedia
              component="img"
              image={post.image}
              alt="bellevue"
            />
            <CardContent>
              <Typography variant="body2" color="primary">
                {post.location}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Hi guys, in this post I’ll tell you what to do in Bellevue, Washington and beyond. I have visited Bellevue on the business trip last year and had a bit of time to get familiar with the town (or city) and understand what is there to do and see in Bellevue, WA.
                </Typography>
                <Typography paragraph>
                  If some of you don’t know, plenty of companies are either headquartered or based in Bellevue, hence, Bellevue is a really nice and posh place (as the salaries in these companies aren’t precisely low). However, most of the people working in Bellevue aren’t actually living there, so the town becomes empty on the weekends. 
                </Typography>
                <Typography>
                  Many people visit Bellevue, WA on a business trip just like me and when I visited Bellevue, there was absolutely no information about things you can do there. So after talking with some of my local colleagues, a lot of walking around and exploring and researching things online, I came up with this list of what to do in Bellevue, Washington. So without further ado, let’s get started. 
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        )
      }
      
    </div>
  )
}

export default Feed;