import {  gql, useQuery } from '@apollo/client';

const GET_READ = gql`
    query GetLead {
        id
    }
`;

export default function Read(props) {
    const [readId, setReadId] = useState('')
    const {data, loading, error} = useQuery(GET_READ);

    return (
        <>
         <h2>Read</h2>
         parameter : {props.params.id}
        </>
    )
}