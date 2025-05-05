'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import clsx from 'clsx';
import { useContext } from 'react';
import { Accordion, AccordionCollapse, AccordionContext, Card, CardHeader, CardTitle, useAccordionButton } from 'react-bootstrap';
const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback
}) => {
  const {
    activeEventKey
  } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = activeEventKey === eventKey;
  return <div role="button" className={clsx(linkClass, {
    collapsed: !isCurrentEventKey
  })} onClick={decoratedOnClick}>
      <CardHeader>
        <h5 className={containerClass}>
          {children} <IconifyIcon icon="lucide:chevron-down" className="icon-xs accordion-arrow" />
        </h5>
      </CardHeader>
    </div>;
};
const CustomAccordion = ({
  item,
  index,
  length
}) => {
  return <Card className={clsx('shadow-none', 'border', index + 1 === length ? 'mb-0' : 'mb-1')}>
      <CustomToggle eventKey={String(index)} containerClass="my-1" linkClass="text-dark">
        {item.title}
      </CustomToggle>
      <AccordionCollapse eventKey={String(index)}>
        <Card.Body className="text-muted pt-1">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-
          origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
          proident.Ad vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm - to - table, raw denim aesthetic synth nesciunt you
          probably haven&apos;t heard of them accusamus labore sustainable VHS.
        </Card.Body>
      </AccordionCollapse>
    </Card>;
};
const AccordionExample = () => {
  const accordionContent = [{
    id: 2,
    title: ' What is Lorem Ipsum?'
  }, {
    id: 3,
    title: 'Why do we use it?'
  }, {
    id: 4,
    title: 'Where does it come from?'
  }];
  return <Card id="accordions">
      <Card.Body>
        <CardTitle as="h5" className="mb-0">
          Accordions
        </CardTitle>
        <p className="sub-header">Build vertically collapsing accordions in combination with the Collapse component.</p>
        <Accordion defaultActiveKey="0" id="accordion" className="custom-accordionwitharrow">
          {(accordionContent || []).map((item, idx) => {
          return <CustomAccordion key={idx} item={item} index={idx} length={accordionContent.length} />;
        })}
        </Accordion>
      </Card.Body>
    </Card>;
};
export default AccordionExample;