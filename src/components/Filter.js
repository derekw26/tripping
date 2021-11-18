import React, { Component, useState } from 'react';
import '../css/filter.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function Filter(props) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (route) => () => {
    const currentIndex = checked.indexOf(route);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(route);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    selectedRoutes(newChecked);
  };

  const selectedRoutes = props.routesCallback;

  const cleanRoutes = () => {
    const trains = props.trainsToFilter;
    const routesArray = trains.map(train => train.route_id);
    const uniqueRoutes = routesArray.filter((train, i, arr) => arr.indexOf(train) === i);
    const sortedRoutes = uniqueRoutes.sort().reverse();
    return sortedRoutes
  }

  const routesNoSpaces = cleanRoutes().map((route) => route.replace(/\s/g, ''));
  console.log(routesNoSpaces)


  return (
    <List className="filter" dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {cleanRoutes().map((route, i) => {
        const labelId = `checkbox-list-secondary-label-${route}`;
        return (
          <ListItem
            key={route}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(route)}
                checked={checked.indexOf(route) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`${route}`}
                  src={`${process.env.PUBLIC_URL}/images/train_routes/${ routesNoSpaces[i] }.jpeg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${route}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
