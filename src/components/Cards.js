import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllDecadevs } from './decadevs-actions/decadevs.action';
import {
  Grommet,
  Anchor,
  Box,
  Text,
  Image,
  Grid,
  ResponsiveContext
} from 'grommet';

function Cards({ getAllDecadevs, decadevs }) {
  useEffect(() => {
    if (decadevs.length === 0) {
      getAllDecadevs();
    }

    console.log('INSIDE USEEFFECT: ', decadevs);
  }, [decadevs, getAllDecadevs]);
  console.log('******', decadevs);
  return (
    <Grommet style={{ overflow: 'scroll' }}>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            columns={
              size === 'small'
                ? ['1']
                : size === 'medium'
                ? ['1/2', '1/2']
                : size === 'large'
                ? ['1/4', '1/4', '1/4', '1/4']
                : size === 'xlarge'
                ? ['1/5', '1/5', '1/5', '1/5', '1/5']
                : ['1/6', '1/6', '1/6', '1/6', '1/6', '1/6']
            }
          >
            {decadevs.map(dev => {
              return (
                <Box
                  key={dev._id}
                  pad="medium"
                  align="center"
                  background={{
                    color: 'light-2',
                    opacity: 'strong'
                  }}
                  round
                  gap="small"
                  margin="medium"
                >
                  <Image
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px'
                    }}
                    fit="cover"
                    src={dev.profilePhoto}
                  />
                  <Text>{dev.email}</Text>
                  <Anchor href="" label="More Info" />
                </Box>
              );
            })}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

const mapStateToProps = state => {
  return {
    decadevs: state.decadevs.decadevs
  };
};
const mapDispatchToProps = {
  getAllDecadevs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Cards));
