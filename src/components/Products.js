import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';




const videos = [
  {
    id: 1,
    title:
      'Face Detection',
    channel: 'Computer technology being used in a variety of applications that identifies human faces in digital images',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/fd.jpeg',
  },
  {
    id: 2,
    title:
      'Object Detection',
    channel: 'Identification and localization, object detection can be used to count objects in a scene and determine and track their precise locations, all while accurately labeling them',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/anpr.jpg',
  },
  {
    id: 3,
    title:
      'Number Plate Detection',
    channel: 'Technology that uses optical character recognition on images to read vehicle registration plates to create vehicle location data',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/od.jpeg',
  },
  {
    id: 4,
    title:
      'Post Estimation',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  
 
  
];
function Products() {

  return (
    <div >
      
      <Box display='flex'>
        

        <Box p={8}>
          <Toolbar />
          

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Products;