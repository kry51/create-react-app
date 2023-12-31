import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './CampsitesSlice';
import { useSelector } from 'react-redux';



const CampsitesList = () => {
    //const campsites = selectAllCampsites();
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col
                        md="5"
                        className="m-4"
                        key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;