import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function(props){
 const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });
  const [isLoading, setLoading] = useState(false)
  const [views, setViews] = useState([])

  useEffect(()=>{
    async function loadViews() {
      setLoading(true)
      const url = 'http://localhost:8888'
      const listPromise = async url => {
        const list = await fetch(url).then(resp=>resp.json())
        setLoading(false)
        return list.map(filename=>{
          return (
          <ListItem button key={filename}>
            <ListItemText primary={filename} onClick={ ()=>props.onFileSelect(filename) } />
          </ListItem>)
        })
      }
      const list = await listPromise(url)
      setViews(list)
    }
    if(!isLoading && views.length === 0) loadViews()
  })


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Divider />
      <List>
        {views}
      </List>
    </div>
  );
  const anchor ='left'
  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        >{<MenuIcon />}</Button>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </div>
  );
}