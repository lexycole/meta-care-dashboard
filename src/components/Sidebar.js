import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCheckSquare,  faCalendar, faClock, faComment } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="Metacare" image={ReactHero} />

              <CollapsableNavItem eventKey="admin" title="Admin" icon={faUsers}>
                  <NavItem title="Teams" />
                  <NavItem title="Knowledge Base" />
                  <NavItem title="Training SAM"/>
                  <NavItem title="Help Centre" />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="knowledgeBase/" title="Knowledge Base" icon={faCheckSquare}>
                <NavItem title="Teams" />
                  <NavItem title="Knowledge Base" />
                  <NavItem title="Training SAM"/>
                  <NavItem title="Help Centre" />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="trainSAM/" title="Train SAM" icon={faCheckSquare}>
                <NavItem title="Teams" />
                  <NavItem title="Knowledge Base" />
                  <NavItem title="Training SAM"/>
                  <NavItem title="Help Centre" />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="agentInbox/" title="Agent Inbox" icon={faCalendar}>
                <NavItem title="Teams" />
                  <NavItem title="Knowledge Base" />
                  <NavItem title="Training SAM"/>
                  <NavItem title="Help Centre" />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="helpCenter/" title="Help center" icon={faClock}>
                <NavItem title="Teams" />
                  <NavItem title="Knowledge Base" />
                  <NavItem title="Training SAM"/>
                  <NavItem title="Help Centre" />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="analytics/" title="Analytics" icon={faComment}>
                <NavItem title="Teams" />
                <NavItem title="Knowledge Base" />
                <NavItem title="Training SAM"/>
                <NavItem title="Help Centre" />
              </CollapsableNavItem>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
