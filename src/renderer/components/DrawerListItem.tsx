import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

export interface DrawerListItemProps {
  icon: ReactNode;
  text: string;
  to: string;
}

function DrawerListItem(props: DrawerListItemProps) {
  const { icon, text, to } = props;

  return (
    <ListItem component={Link} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default DrawerListItem;
