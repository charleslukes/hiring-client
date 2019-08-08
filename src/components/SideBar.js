import React from 'react';
import { Box } from 'grommet';
import MenuItems from './MenuItems';

export default function SideBar(props) {
  return (
    <>
      {props.sidebar && (
        <Box
          gridArea="sidebar"
          background="dark-3"
          width="small"
          animation={[
            { type: 'fadeIn', duration: 300 },
            {
              type: 'slideRight',
              size: 'xlarge',
              duration: 150
            }
          ]}
        >
          {['Decadev', 'Feedback', 'Notification', 'Settings'].map(name => (
            <MenuItems name={name} />
          ))}
        </Box>
      )}
    </>
  );
}