import { useQuery } from '@apollo/client';
import { TEST_ERROR_500 } from '../../apollo-client/queries';
import Error500 from './Error500';

function Error500Test() {
    const { loading, error } = useQuery(TEST_ERROR_500);

    console.log("Loading:", loading);
    console.log("Error:", error);

    if (loading) return <p>Loading...</p>;
    if (error) return <Error500 />;
    return <div>Data loaded successfully</div>;
}

export default Error500Test;


//For testing perpuse only.
//when you navigate to /500-test, it should run the Error500Test component, which will attempt to run the failing GraphQL query, and if it encounters an error (which it should), it will render the Error500 component.