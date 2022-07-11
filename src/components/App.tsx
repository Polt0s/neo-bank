import React from 'react';
import { Button } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { apiTest, getApiUsers } from 'store/apiTest';

const App = observer(() => {
    console.log('render');

    React.useEffect(() => {
        getApiUsers();
    }, []);

    return (
        <div>
            Start Project!
        </div>
    );
});

export default App;
