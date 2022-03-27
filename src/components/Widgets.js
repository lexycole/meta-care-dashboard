import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button,  } from '@themesberg/react-bootstrap';
import { AverageResponseTimeChart} from '../data/averageResponseTimeChart';
import { RepliesPerResolutionChart } from '../data/repliesPerResolutionChart';
import { AverageResolutionTimeChart } from '../data/averageResolutionTimeChart';
import { FirstContactResolutionChart } from '../data/firstContactResolutionChart';

import { faSquare } from "@fortawesome/free-regular-svg-icons";


export const CounterWidget = (props) => {
  const {category, title,} = props;

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="py-5">
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={12} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h6>{category}</h6>
              <h4 className="mb-1">{title}</h4>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const AverageResponseTimeWidget = (props) => {
  const { title, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-primary-alt shadow-sm">
      <Card.Header>
        <Row>
          <Col xs={8} md={6}>
          <div className="d-block">
          <small className="fw-bold mt-1">
            <span className="me-2">{title}</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-2`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
          </Col>

          <Col xs={3}>
            <div>
                <h6><FontAwesomeIcon color="red" icon={faSquare} className="icon icon-xs me-0" /> High priority</h6>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <Button variant="outline-primary" className="me-1">
                  This Month <FontAwesomeIcon icon={faCalendar} className="me-2" />
              </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <AverageResponseTimeChart />
      </Card.Body>
    </Card>
  );
};

export const RepliesPerResolutionWidget = (props) => {
  const { title, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-primary-alt shadow-sm">
      <Card.Header>
        <Row>
          <Col xs={8} md={6}>
          <div className="d-block">
          <small className="fw-bold mt-1">
            <span className="me-2">{title}</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-2`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
          </Col>

          <Col xs={3}>
            <div>
                <h6><FontAwesomeIcon color="red" icon={faSquare} className="icon icon-xs me-0" /> High priority</h6>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <Button variant="outline-primary" className="me-1">
                  This Month <FontAwesomeIcon icon={faCalendar} className="me-2" />
              </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <RepliesPerResolutionChart />
      </Card.Body>
    </Card>
  );
};

export const AverageResolutionTimeWidget = (props) => {
  const { title, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-primary-alt shadow-sm">
      <Card.Header>
        <Row>
          <Col xs={8} md={6}>
          <div className="d-block">
          <small className="fw-bold mt-1">
            <span className="me-2">{title}</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-2`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
          </Col>

          <Col xs={3}>
            <div>
                <h6><FontAwesomeIcon color="red" icon={faSquare} className="icon icon-xs me-0" /> High priority</h6>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <Button variant="outline-primary" className="me-1">
                  This Month <FontAwesomeIcon icon={faCalendar} className="me-2" />
              </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <AverageResolutionTimeChart />
      </Card.Body>
    </Card>
  );
};

export const FirstContactResolutionWidget = (props) => {
  const { title, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-primary-alt shadow-sm">
      <Card.Header>
        <Row>
          <Col xs={8} md={6}>
          <div className="d-block">
          <small className="fw-bold mt-1">
            <span className="me-2">{title}</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-2`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
          </Col>

          <Col xs={3}>
            <div>
                <h6><FontAwesomeIcon color="red" icon={faSquare} className="icon icon-xs me-0" /> High priority</h6>
            </div>
          </Col>

          <Col xs={6} md={3}>
            <Button variant="outline-primary" className="me-1">
                  This Month <FontAwesomeIcon icon={faCalendar} className="me-2" />
              </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <FirstContactResolutionChart />
      </Card.Body>
    </Card>
  );
};