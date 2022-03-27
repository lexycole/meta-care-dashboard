import React from "react";
import { Col, Row, Dropdown, Nav, Tab } from '@themesberg/react-bootstrap';

import { CounterWidget, AverageResponseTimeWidget, RepliesPerResolutionWidget, AverageResolutionTimeWidget, FirstContactResolutionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center py-4">
        <Col xs={12} xl={12} className="mb-4">
          <Tab.Container defaultActiveKey="efficiency">
          <Row>
            <Col lg={12}>
                <Nav className="nav-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="efficiency" className="mb-sm-3 mb-md-0">
                      Efficiency
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="volume" className="mb-sm-3 mb-md-0">
                      Volume
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="customerSatisfaction" className="mb-sm-3 mb-md-0">
                      Customer Satisfaction
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="backlog" className="mb-sm-3 mb-md-0">
                      Backlog
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col lg={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="efficiency" className="py-4">
                      <Row>
                        <Col xs={12} xl={12} className="mb-4">
                          <PageVisitsTable />
                         </Col>
                              <Col xs={12} sm={6} xl={9} className="mb-4 d-none d-sm-block">
                                <AverageResponseTimeWidget
                                  title="Average Response Time"
                                  percentage={+4.14}
                                />
                              </Col>
                                <Col xs={12} sm={9} xl={3} className="mb-4">
                                  <CounterWidget
                                    category="Average Response Time"
                                    title="30 Mins"
                                  />

                                  <Dropdown.Divider />

                                  <CounterWidget
                                    category="Response Time"
                                    title="1 Hour 30 Mins"
                                  />
                            </Col>
                      </Row>
                    {/* Replies per resolution */}
                    <Row>
                        <Col xs={12} sm={6} xl={9} className="mb-4 d-none d-sm-block">
                          < RepliesPerResolutionWidget
                            title="Replies per resolution"
                            percentage={+4.14}
                          />
                        </Col>

                          <Col xs={12} sm={9} xl={3} className="mb-4">
                            <CounterWidget
                              category="Average Response Time"
                              title="30 Mins"
                            />

                            <Dropdown.Divider />

                            <CounterWidget
                              category="Response Time"
                              title="1 Hour 30 Mins"
                            />
                        </Col>
                    </Row>
                    {/* Average resolution time */}
                    <Row>
                      <Col xs={12} sm={6} xl={9} className="mb-4 d-none d-sm-block">
                          <AverageResolutionTimeWidget
                            title="Average resolution time"
                             percentage={+4.14}
                           />
                          </Col>

                          <Col xs={12} sm={9} xl={3} className="mb-4">
                            <CounterWidget
                              category="Average Response Time"
                              title="30 Mins"
                            />

                            <Dropdown.Divider />

                            <CounterWidget
                              category="Response Time"
                              title="1 Hour 30 Mins"
                            />
                        </Col>
                    </Row>
                    {/* First contact resolution rate */}
                    <Row>
                      <Col xs={12} sm={6} xl={9} className="mb-4 d-none d-sm-block">
                          <FirstContactResolutionWidget
                             title="First contact resolution rate"
                             percentage={+4.14}
                           />
                          </Col>

                          <Col xs={12} sm={9} xl={3} className="mb-4">
                            <CounterWidget
                              category="Average Response Time"
                              title="30 Mins"
                            />

                            <Dropdown.Divider />

                            <CounterWidget
                              category="Response Time"
                              title="1 Hour 30 Mins"
                            />
                        </Col>
                    </Row>
                   
                  </Tab.Pane>
                  <Tab.Pane eventKey="volume" className="py-4">
                    <p>
                      Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                    </p>
                    <p>
                      Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="customerSatisfaction" className="py-4">
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                    </p>
                    <p>
                      Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="backlog" className="py-4">
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                    </p>
                    <p>
                      Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </>
  );
};
