import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

const headerHeight = 45;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${headerHeight + 'px'};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 100%;

  /* border: 2px solid red; */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px 10px;

  /* border: 2px solid blue; */

  // There seems to be a feature where ul have 40px
  // as automatic margin on the left of the ul (for ul tabs)
  // so manually had to set this value to 0
  padding-inline-start: 0px;
`;

const NavListItem = styled.li`
  color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;

  margin-top: 2px;
  /* margin-left: -15px; */
  padding: 8px 15px;

  transform-origin: bottom left;
  transition: all .4s ease-in-out;

  &:hover {
    color: white;
    cursor: pointer;
    /* transform: scale(1.05); */
  }

  & > .active {
    color: #b4e0e8;
    /* border-bottom: 2px solid #f25757; */
    /* padding: 0 0 2px; */
  }

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2.5px;
    margin-top: 2.5px;
    margin-bottom: -2.5px;
    background: #f25757;
    transition: width .3s;
  }

  :hover::after {
    /* transform: scale(1.05); */
    width: 100%;
    //transition: width .3s;
  }
`;
// active allows navigation links to underline when active

function HeaderNavigation() {
  return (
    <>
      <Profile>
        <NavList>
          <NavListItem>
            <Link
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={500}
            >
              Home
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={500}
            >
              Projects
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={500}
            >
              Work Experience
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={500}
            >
              Education
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={500}
            >
              Resume
            </Link>
          </NavListItem>
        </NavList>
      </Profile>
    </>
  );
}

export default HeaderNavigation;