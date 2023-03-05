import {
  Box,
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton,
  Typography,
} from '@mui/material';
import PostCard from 'src/components/PostCard/PostCard';
import { imageListData } from 'src/data/imageListData';
import SimpleBar from 'simplebar-react';
import HorizontalScroll from 'react-scroll-horizontal';
import { useStyles } from './styles';

//TODO: Finish PostSection component

type PostCardProps = {
  title: string;
};

const PostSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.postTitle}>My Projects</Typography>
      </Box>
      <Box className={classes.dividerText}>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </Box>
      <HorizontalScroll reverseScroll={true}>
        <ImageList className={classes.imageContainer} gap={120}>
          {imageListData.map((item) => (
            <ImageListItem className={classes.imageItem} key={item.img}>
              <img
                src={`${item.img}?w=948&fit=crop&auto=format`}
                srcSet={`${item.img}?w=948&fit=crop&auto=format&dpr=2 2x  `}
                alt={item.title}
                loading='lazy'
                style={{ borderRadius: '4px' }}
                onClick={() => window.open(item.web_url, '_blank')}
              />
              <ImageListItemBar
                className={classes.barImage}
                title={item.title}
                subtitle={item.author}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </HorizontalScroll>
    </Box>
  );
};

export default PostSection;
