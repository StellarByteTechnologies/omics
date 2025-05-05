import { plans } from '@/components/common/data';
import PricingCards3 from '@/components/common/PricingCards3';
import PricingPlans from '@/components/common/PricingPlans';
import { Card, CardBody, CardTitle } from 'react-bootstrap';
const PricingCards = () => {
  return <Card id="pricing-cards">
      <CardBody>
        <CardTitle as="h5" className="mb-0">
          Pricing cards
        </CardTitle>
        <p className="sub-header">
          Using bootstrap&apos;s <code>.card</code>, you can create a pricing card.
        </p>

        <PricingPlans />
        <PricingCards3 plans={plans} />
      </CardBody>
    </Card>;
};
export default PricingCards;