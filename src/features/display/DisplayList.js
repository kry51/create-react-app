import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';    //import DisplayCard from './displayCard';
import { selectFeaturedCampsite } from '../campsites/CampsitesSlice';
import { selectFeaturedPromotion } from '../promotions/PromotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { useSelector } from 'react-redux';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
    console.log('display items:', items);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;