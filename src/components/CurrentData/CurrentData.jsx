import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CurrentData = (props) => {
  return (
    <div>
      	<Card>
	      <CardContent>
	      	Mars time {`<something>`}
	      </CardContent>
	    </Card>
      	<Card>
	      <CardContent>
	      	Local time {new Date().toLocaleString()}
	      </CardContent>
	    </Card>
    </div>
  );
}

export default CurrentData;