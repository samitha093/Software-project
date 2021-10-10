import * as React from 'react';
import {Tabs,Tab,Typography,Box} from '@mui/material';
import Login from '../../components/user/Login'
import Register from './Register';

interface TabcustomProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabcustomProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={"custom-tabpanel-${index}"}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: "custom-tab-${index}",
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} textColor={'secondary'} indicatorColor={'secondary'} centered>
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register/>
      </TabPanel>
      
    </Box>
  );
}