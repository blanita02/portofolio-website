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
        <Typography component='span' className={classes.postTitle}>
          Portofolio
        </Typography>
      </Box>
      <HorizontalScroll reverseScroll={true}>
        <ImageList className={classes.imageContainer} gap={120}>
          {imageListData.map((item) => (
            <ImageListItem className={classes.imageItem} key={item.img}>
              <img
                src={`${item.img}?w=948`}
                srcSet={`${item.img}?w=948`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    Go
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </HorizontalScroll>
    </Box>
  );
};

export default PostSection;
