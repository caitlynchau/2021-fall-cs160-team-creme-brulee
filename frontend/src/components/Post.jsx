import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

function Post({ postData }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const history = useHistory();

  const dateOptions = {month: 'long', day: 'numeric', year: 'numeric'};
  const postDate = new Date(postData.updatedAt.split('T')[0]);

  return (
    <Card key={postData._id} sx={{ maxWidth: 345 }} className="feed-card">
      <CardHeader
        avatar={
          <Avatar aria-label="location">
            {postData.username[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Link component="button" variant="body1" onClick={() => history.push(`/profile/${postData.username}`)}>{postData.username}</Link>
        }
        subheader={postDate.toLocaleDateString('en-US', dateOptions)}
      />
      <CardMedia
        component="img"
        image={postData.image}
      />
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

      <CardContent className="post-body">
        <Typography variant="h6">
          {postData.location}
        </Typography>
        <Typography variant="body1">{postData.caption}</Typography>
      </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{postData.itinerary}</Typography>
          <Typography variant="overline">{postData.tags}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Post;