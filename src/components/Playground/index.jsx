import React  from 'react';
import Button from 'material-ui/Button';

const Playground = () => (
  <div>
    <h1 className="mb-5">Playground</h1>
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  </div>
);

Playground.propTypes = {};
Playground.defaultProps = {};

export default Playground;

